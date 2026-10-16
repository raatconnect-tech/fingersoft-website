"use server";

import { z } from "zod";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  phone: z.string().max(20).optional(),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  enquiryType: z.string(),
  message: z.string().min(5, "Message must be at least 5 characters").max(1000, "Message max 1000 chars"),
  website: z.string().max(0, "Bot detected"), // Honeypot
}).refine(data => data.phone || data.email, {
  message: "Either phone number or email address is required.",
  path: ["phone"],
});

export async function submitEnquiry(formData: FormData) {
  // Lazily instantiate Resend inside the action at runtime
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    enquiryType: formData.get("enquiryType"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = formSchema.safeParse(rawData);
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0].message };
  }

  const { name, phone, email, enquiryType, message } = parsed.data;

  const cleanName = name.replace(/[\n\r\t]/g, " ").trim();
  const cleanPhone = (phone || "Not provided").replace(/[\n\r\t]/g, " ").trim();
  const cleanEmail = (email || "Not provided").replace(/[\n\r\t]/g, " ").trim();
  const cleanType = enquiryType.replace(/[\n\r\t]/g, " ").trim();
  const cleanMessage = message.replace(/[\n\r\t]/g, " ").substring(0, 1000).trim();

  const results = await Promise.allSettled([
    // 1. WhatsApp Cloud API
    fetch(`https://graph.facebook.com/v21.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: process.env.WHATSAPP_RECIPIENT,
        type: "template",
        template: {
          name: process.env.WHATSAPP_TEMPLATE_NAME || "enquiry_notification",
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: cleanName },
                { type: "text", text: cleanPhone },
                { type: "text", text: cleanEmail },
                { type: "text", text: cleanType },
                { type: "text", text: cleanMessage },
              ],
            },
          ],
        },
      }),
    }).then(async (res) => {
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    }),

    // 2. Backup Email via Resend
    resend.emails.send({
      from: "Fingersoft Tissues <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_RECIPIENT || "support@ronypeter.in",
      subject: `New Website Enquiry: ${cleanType} from ${cleanName}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Phone:</strong> ${cleanPhone}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Type:</strong> ${cleanType}</p>
        <p><strong>Message:</strong><br/>${cleanMessage}</p>
      `,
    }),
  ]);

  const hasSucceeded = results.some((r) => r.status === "fulfilled");

  if (!hasSucceeded) {
    return { success: false, message: "Failed to send enquiry. Please try contacting us via WhatsApp directly." };
  }

  return { success: true, message: "Thank you! Your enquiry has been sent successfully." };
}