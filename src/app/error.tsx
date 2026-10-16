"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-32 text-center">
      <div className="max-w-[600px] mx-auto px-6">
        <h1 className="text-4xl font-bold text-[var(--blue)] mb-4">Something went wrong!</h1>
        <p className="text-[var(--mute)] mb-8">An unexpected error occurred while processing your request.</p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}