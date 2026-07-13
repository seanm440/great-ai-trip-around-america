import { cn } from "@/lib/utils";
import type { StopStatus } from "@/types";

const statusConfig: Record<StopStatus, { label: string; dot: string; text: string }> = {
  completed: { label: "Visited", dot: "bg-signal-2", text: "text-signal-2" },
  "in-progress": { label: "On the road", dot: "bg-signal-3", text: "text-signal-3" },
  upcoming: { label: "Upcoming stop", dot: "bg-signal-1", text: "text-signal-1" },
  planned: { label: "Planned", dot: "bg-ink-faint", text: "text-ink-faint" },
};

export function StatusBadge({
  status,
  className,
}: {
  status: StopStatus;
  className?: string;
}) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
        config.text,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full animate-pulse-slow", config.dot)} />
      {config.label}
    </span>
  );
}
