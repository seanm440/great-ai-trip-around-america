import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function SourceLink({
  name,
  url,
  tone = "dark",
  className,
}: {
  name: string;
  url: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-ring inline-flex items-center gap-1 text-[11px] transition-colors",
        tone === "dark"
          ? "text-ink-faint hover:text-ink-muted"
          : "text-paper-ink-muted/70 hover:text-paper-ink-muted",
        className,
      )}
    >
      <ExternalLink className="size-3" />
      Source: {name}
    </a>
  );
}
