"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Store, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cities } from "@/data/cities";
import { waypoints } from "@/data/waypoints";
import { cn } from "@/lib/utils";
import {
  US_MAP_VIEWBOX,
  US_MAP_WIDTH,
  US_MAP_HEIGHT,
  usNationOutlinePath,
  usStateBordersPath,
  usStatesFillPath,
  projectLatLng,
} from "@/lib/us-map";

type RouteStop =
  | { kind: "major"; slug: string }
  | { kind: "minor"; id: string };

const routeSequence: RouteStop[] = [
  { kind: "major", slug: "washington-dc" },
  { kind: "minor", id: "knoxville" },
  { kind: "major", slug: "nashville" },
  { kind: "minor", id: "chattanooga" },
  { kind: "major", slug: "tampa" },
  { kind: "minor", id: "new-orleans" },
  { kind: "major", slug: "austin" },
  { kind: "minor", id: "tucson" },
  { kind: "major", slug: "central-valley" },
];

function coordinatesFor(stop: RouteStop) {
  if (stop.kind === "major") {
    const city = cities.find((c) => c.slug === stop.slug);
    return city?.coordinates;
  }
  const waypoint = waypoints.find((w) => w.id === stop.id);
  return waypoint?.coordinates;
}

const routePoints = routeSequence
  .map(coordinatesFor)
  .filter((c): c is { lat: number; lng: number } => Boolean(c))
  .map((c) => projectLatLng(c.lat, c.lng));

const routePath = `M ${routePoints.map(([x, y]) => `${x} ${y}`).join(" L ")}`;

type ActiveItem = { kind: "major"; slug: string } | { kind: "minor"; id: string };

function percentPosition(lat: number, lng: number) {
  const [x, y] = projectLatLng(lat, lng);
  return {
    xPct: (x / US_MAP_WIDTH) * 100,
    yPct: (y / US_MAP_HEIGHT) * 100,
  };
}

function popupStyle(xPct: number, yPct: number, clampOffsetPx: number): React.CSSProperties {
  const translateX = xPct < 25 ? "0%" : xPct > 75 ? "-100%" : "-50%";
  const translateY = yPct > 55 ? "calc(-100% - 18px)" : "18px";
  return {
    left: `${xPct}%`,
    top: `${yPct}%`,
    transform: `translate(calc(${translateX} + ${clampOffsetPx}px), ${translateY})`,
  };
}

export function JourneyMap() {
  const [active, setActive] = useState<ActiveItem | null>(null);
  const [clampOffset, setClampOffset] = useState(0);
  const mapBoxRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const activeCity = active?.kind === "major" ? cities.find((c) => c.slug === active.slug) : undefined;
  const activeWaypoint = active?.kind === "minor" ? waypoints.find((w) => w.id === active.id) : undefined;

  const activePosition = activeCity
    ? percentPosition(activeCity.coordinates.lat, activeCity.coordinates.lng)
    : activeWaypoint
      ? percentPosition(activeWaypoint.coordinates.lat, activeWaypoint.coordinates.lng)
      : null;

  const activeKey = activeCity?.slug ?? activeWaypoint?.id ?? null;

  useLayoutEffect(() => {
    if (!activeKey || !popupRef.current || !mapBoxRef.current) {
      setClampOffset(0);
      return;
    }
    // Measure with any prior clamp offset removed, so this computes an
    // absolute correction each time rather than compounding on itself.
    const popupRect = popupRef.current.getBoundingClientRect();
    const mapRect = mapBoxRef.current.getBoundingClientRect();
    const PADDING = 8;
    let offset = 0;
    if (popupRect.left - clampOffset < mapRect.left + PADDING) {
      offset = mapRect.left + PADDING - (popupRect.left - clampOffset);
    } else if (popupRect.right - clampOffset > mapRect.right - PADDING) {
      offset = mapRect.right - PADDING - (popupRect.right - clampOffset);
    }
    setClampOffset((prev) => (prev === offset ? prev : offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  return (
    <section id="route" className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="animate-drift absolute right-0 top-0 size-[30rem] rounded-full bg-signal-1/20 blur-[64px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="The Route"
          title="Five cities announced. Stops along the way, too."
          description="From DC to the Central Valley, the bus passes through small towns as well as big ones. Select a pin for a city deep-dive, or a dot to meet a local business using AI."
        />

        <div className="relative mt-16 rounded-3xl border border-surface-border bg-surface/60 p-4 sm:p-8">
          <div
            ref={mapBoxRef}
            className="relative aspect-[8/5] w-full"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActive(null);
            }}
          >
            <svg
              viewBox={US_MAP_VIEWBOX}
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="map-route" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-signal-1)" />
                  <stop offset="50%" stopColor="var(--color-signal-3)" />
                  <stop offset="100%" stopColor="var(--color-signal-2)" />
                </linearGradient>
              </defs>

              {/* state fills */}
              <path d={usStatesFillPath} fill="var(--color-surface-2)" />
              {/* state borders */}
              <path
                d={usStateBordersPath}
                fill="none"
                stroke="var(--color-surface-border)"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              {/* national outline */}
              <path
                d={usNationOutlinePath}
                fill="none"
                stroke="var(--color-ink-faint)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <motion.path
                d={routePath}
                fill="none"
                stroke="url(#map-route)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </svg>

            {/* minor waypoint dots */}
            {waypoints.map((waypoint) => {
              const { xPct, yPct } = percentPosition(waypoint.coordinates.lat, waypoint.coordinates.lng);
              const isActive = active?.kind === "minor" && active.id === waypoint.id;
              return (
                <button
                  key={waypoint.id}
                  type="button"
                  title={`${waypoint.name}, ${waypoint.stateAbbr} — ${waypoint.business.name}`}
                  onClick={() => setActive(isActive ? null : { kind: "minor", id: waypoint.id })}
                  style={{ left: `${xPct.toFixed(3)}%`, top: `${yPct.toFixed(3)}%` }}
                  className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 p-1.5"
                  aria-pressed={isActive}
                  aria-label={`Preview ${waypoint.name} — ${waypoint.business.name}`}
                >
                  <span className="relative flex items-center justify-center">
                    {isActive && (
                      <span className="absolute size-6 rounded-full bg-signal-3/30 animate-ping" />
                    )}
                    <span
                      className={cn(
                        "block size-2.5 rounded-full border transition-all duration-300",
                        isActive
                          ? "scale-150 border-white bg-signal-3"
                          : "border-void/60 bg-signal-3/80 hover:scale-125 hover:bg-signal-3",
                      )}
                    />
                  </span>
                </button>
              );
            })}

            {/* major city pins */}
            {cities.map((city) => {
              const { xPct, yPct } = percentPosition(city.coordinates.lat, city.coordinates.lng);
              const isActive = active?.kind === "major" && active.slug === city.slug;
              return (
                <button
                  key={city.slug}
                  type="button"
                  onClick={() => setActive(isActive ? null : { kind: "major", slug: city.slug })}
                  style={{ left: `${xPct.toFixed(3)}%`, top: `${yPct.toFixed(3)}%` }}
                  className="focus-ring absolute -translate-x-1/2 -translate-y-1/2"
                  aria-pressed={isActive}
                  aria-label={`Preview ${city.name}`}
                >
                  <span className="relative flex items-center justify-center">
                    {isActive && (
                      <span className="absolute size-8 rounded-full bg-signal-2/25 animate-ping" />
                    )}
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded-full border-2 border-white bg-signal-2 transition-all duration-300",
                        isActive ? "scale-125" : "hover:scale-110",
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider transition-colors",
                      isActive ? "text-ink" : "text-ink-faint",
                    )}
                  >
                    {city.stateAbbr}
                  </span>
                </button>
              );
            })}

            {/* popup */}
            <AnimatePresence>
              {activePosition && (activeCity || activeWaypoint) && (
                <div
                  key={activeCity?.slug ?? activeWaypoint?.id}
                  ref={popupRef}
                  style={popupStyle(activePosition.xPct, activePosition.yPct, clampOffset)}
                  className="absolute z-20 w-[min(320px,calc(100%-2rem))]"
                >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-2xl border border-black/[0.06] bg-paper p-6 shadow-2xl"
                >
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="focus-ring absolute right-3 top-3 flex size-7 items-center justify-center rounded-full text-paper-ink-muted transition-colors hover:bg-black/5 hover:text-paper-ink"
                  >
                    <X className="size-4" />
                  </button>

                  {activeCity && (
                    <>
                      <div className="flex items-center gap-3 pr-6">
                        <StatusBadge status={activeCity.status} />
                        <span className="font-mono text-xs text-paper-ink-muted">
                          {activeCity.dateWindow}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-xl font-semibold text-paper-ink">
                        {activeCity.name}, {activeCity.stateAbbr}
                      </h3>
                      <p className="mt-2 text-sm text-paper-ink-muted">{activeCity.tagline}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeCity.themes.map((theme) => (
                          <span
                            key={theme}
                            className="rounded-full border border-black/[0.08] px-3 py-1 text-xs text-paper-ink-muted"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/cities/${activeCity.slug}`}
                        className="focus-ring group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-paper-ink"
                      >
                        Explore {activeCity.name}
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </>
                  )}

                  {activeWaypoint && (
                    <>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-signal-1/25 bg-signal-1/[0.06] px-3 py-1 pr-6 font-mono text-[11px] uppercase tracking-wider text-signal-1">
                        <span className="size-1.5 rounded-full bg-signal-1" />
                        Passing through
                      </span>

                      <h3 className="mt-4 font-display text-xl font-semibold text-paper-ink">
                        {activeWaypoint.name}, {activeWaypoint.stateAbbr}
                      </h3>

                      <div className="mt-4 rounded-xl border border-black/[0.06] bg-paper-2 p-4">
                        <div className="flex items-center gap-2 text-signal-1">
                          <Store className="size-4" strokeWidth={1.75} />
                          <span className="font-mono text-[10px] uppercase tracking-wider">
                            Small business using AI
                          </span>
                        </div>
                        <h4 className="mt-2 font-display text-sm font-semibold text-paper-ink">
                          {activeWaypoint.business.name}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-paper-ink-muted">
                          {activeWaypoint.business.blurb}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-surface-border pt-4 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-full border-2 border-white bg-signal-2" />
              Featured stop
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full border border-white/60 bg-signal-3" />
              Small business along the route
            </span>
            <span className="text-ink-faint/70">Tap a pin to see details</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
