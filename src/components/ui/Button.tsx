import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-void hover:bg-signal-2 hover:text-void shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
  secondary:
    "bg-transparent text-ink border border-surface-border hover:border-ink/60 hover:bg-white/5",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  showArrow = true,
  ...props
}: ButtonBaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http");
  const content = (
    <span
      className={cn(
        "focus-ring group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </span>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {content}
    </Link>
  );
}
