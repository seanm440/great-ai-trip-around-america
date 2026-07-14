import { usNationOutlinePath, US_MAP_VIEWBOX } from "@/lib/us-map";

export function UsaMark({ className }: { className?: string }) {
  return (
    <svg viewBox={US_MAP_VIEWBOX} className={className} fill="currentColor" aria-hidden="true">
      <path d={usNationOutlinePath} />
    </svg>
  );
}
