import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-32 text-center">
      <div className="max-w-[600px] mx-auto px-6">
        <h1 className="text-6xl font-bold text-[var(--blue)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--ink)] mb-4">Page Not Found</h2>
        <p className="text-[var(--mute)] mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
}