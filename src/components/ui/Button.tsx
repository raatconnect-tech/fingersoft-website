import Link from "next/link";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyles = "inline-block px-[26px] py-[13px] rounded-full font-semibold transition-all duration-200 cursor-pointer text-center";
  
  // Added ! prefix to force override global anchor/body inheritance
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--blue)] !text-white hover:bg-[var(--blue2)]"
      : "bg-transparent !text-[var(--blue)] border-[1.5px] border-[var(--blue)] hover:bg-[var(--tint)]";

  const combinedClasses = cn(baseStyles, variantStyles, className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}