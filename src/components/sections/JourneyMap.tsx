"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Store } from "lucide-react";
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

export function JourneyMap() {
  const [active, setActive] = useState<ActiveItem>({ kind: "major", slug: cities[0].slug });

  const activeCity = active.kind === "major" ? cities.find((c) => c.slug === active.slug) : undefined;
  const activeWaypoint = active.kind === "minor" ? waypoints.find((w) => w.id === active.id) : undefined;

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

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="relative rounded-3xl border border-surface-border bg-surface/60 p-4 sm:p-8 lg:col-span-3">
            <div className="relative aspect-[8/5] w-full">
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
                const [x, y] = projectLatLng(waypoint.coordinates.lat, waypoint.coordinates.lng);
                const isActive = active.kind === "minor" && active.id === waypoint.id;
                return (
                  <button
                    key={waypoint.id}
                    type="button"
                    title={`${waypoint.name}, ${waypoint.stateAbbr} — ${waypoint.business.name}`}
                    onClick={() => setActive({ kind: "minor", id: waypoint.id })}
                    style={{
                      left: `${((x / US_MAP_WIDTH) * 100).toFixed(3)}%`,
                      top: `${((y / US_MAP_HEIGHT) * 100).toFixed(3)}%`,
                    }}
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
                const [x, y] = projectLatLng(city.coordinates.lat, city.coordinates.lng);
                const isActive = active.kind === "major" && active.slug === city.slug;
                return (
                  <button
                    key={city.slug}
                    type="button"
                    onClick={() => setActive({ kind: "major", slug: city.slug })}
                    style={{
                      left: `${((x / US_MAP_WIDTH) * 100).toFixed(3)}%`,
                      top: `${((y / US_MAP_HEIGHT) * 100).toFixed(3)}%`,
                    }}
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
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeCity && (
                <motion.div
                  key={activeCity.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col rounded-3xl border border-surface-border bg-surface-2 p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <StatusBadge status={activeCity.status} />
                    <span className="font-mono text-xs text-ink-faint">{activeCity.dateWindow}</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    {activeCity.name}, {activeCity.stateAbbr}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{activeCity.tagline}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeCity.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full border border-surface-border px-3 py-1 text-xs text-ink-muted"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 flex-1 text-sm leading-relaxed text-ink-muted">
                    {activeCity.description}
                  </p>

                  <Link
                    href={`/cities/${activeCity.slug}`}
                    className="focus-ring group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                  >
                    Explore {activeCity.name}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              )}

              {activeWaypoint && (
                <motion.div
                  key={activeWaypoint.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col rounded-3xl border border-surface-border bg-surface-2 p-8"
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-surface-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-signal-3">
                    <span className="size-1.5 rounded-full bg-signal-3" />
                    Passing through
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    {activeWaypoint.name}, {activeWaypoint.stateAbbr}
                  </h3>

                  <div className="mt-6 flex-1 rounded-2xl border border-surface-border bg-surface p-5">
                    <div className="flex items-center gap-2.5 text-signal-3">
                      <Store className="size-4" strokeWidth={1.75} />
                      <span className="font-mono text-[11px] uppercase tracking-wider">
                        Small business using AI
                      </span>
                    </div>
                    <h4 className="mt-3 font-display text-base font-semibold text-ink">
                      {activeWaypoint.business.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {activeWaypoint.business.blurb}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
