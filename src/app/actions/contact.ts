"use server";

import { z } from "zod";

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
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const enquiryType = formData.get("enquiryType") as string;
  const message = formData.get("message") as string;
  const botcheck = formData.get("botcheck");

  // Basic Honeypot Validation
  if (botcheck) {
    return { success: false, message: "Bot detected." };
  }

  if (!name || !message) {
    return { success: false, message: "Name and message are required fields." };
  }

  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "";

  const payload = new FormData();
  payload.append("access_key", accessKey);
  payload.append("name", name);
  payload.append("phone", phone || "Not provided");
  payload.append("email", email || "Not provided");
  payload.append("enquiryType", enquiryType || "General Enquiry");
  payload.append("message", message);
  payload.append("subject", `New Website Enquiry from ${name}`);
  payload.append("from_name", "Fingersoft Tissues Website");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: "Thank you! Your enquiry has been sent successfully.",
      };
    } else {
      return {
        success: false,
        message: data.message || "Failed to submit enquiry. Please try WhatsApp.",
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "An error occurred while connecting to the email service.",
    };
  }
}