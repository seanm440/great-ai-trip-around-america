"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { busFeatures } from "@/data/bus-features";
import { cn } from "@/lib/utils";

const BODY_PATH =
  "M 60 58 L 348 58 Q 376 58 376 86 L 376 148 Q 376 174 350 174 L 60 174 Q 24 174 24 138 L 24 94 Q 24 58 60 58 Z";

export function TheBus() {
  const [active, setActive] = useState<string>(busFeatures[0].key);
  const activeFeature = busFeatures.find((f) => f.key === active) ?? busFeatures[0];

  return (
    <section id="bus" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="The Bus"
          title="A studio on wheels"
          description="Every stop starts with the same vehicle — wrapped, wired, and built to turn any parking lot into a production set. Tap a hotspot to look inside."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          {/* Bus illustration with hotspots */}
          <div className="relative lg:col-span-3">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl">
              <svg
                viewBox="0 0 400 250"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="bus-stripe" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--color-signal-1)" />
                    <stop offset="50%" stopColor="var(--color-signal-3)" />
                    <stop offset="100%" stopColor="var(--color-signal-2)" />
                  </linearGradient>
                  <linearGradient id="bus-badge" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-signal-1)" />
                    <stop offset="100%" stopColor="var(--color-signal-2)" />
                  </linearGradient>
                  <linearGradient id="bus-glass" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5b6577" />
                    <stop offset="100%" stopColor="#252b37" />
                  </linearGradient>
                  <linearGradient id="bus-glass-shine" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                    <stop offset="45%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="bus-sheen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="bus-tire" cx="0.35" cy="0.35" r="0.75">
                    <stop offset="0%" stopColor="#33383f" />
                    <stop offset="100%" stopColor="#101216" />
                  </radialGradient>
                  <filter id="bus-shadow-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" />
                  </filter>
                  <clipPath id="bus-body-clip">
                    <path d={BODY_PATH} />
                  </clipPath>
                </defs>

                {/* ground shadow */}
                <ellipse cx="200" cy="204" rx="158" ry="8" fill="black" opacity="0.32" filter="url(#bus-shadow-blur)" />

                {/* roof equipment: AC unit + antenna */}
                <rect x="165" y="44" width="70" height="14" rx="4" fill="#eceef1" stroke="#c9ccd4" />
                <rect x="172" y="47" width="20" height="4" rx="2" fill="#c9ccd4" />
                <line x1="322" y1="58" x2="322" y2="34" stroke="var(--color-ink)" strokeWidth="2" />
                <circle cx="322" cy="31" r="3.5" fill="var(--color-signal-2)" />
                <circle cx="322" cy="31" r="6" fill="none" stroke="var(--color-signal-2)" strokeWidth="1" opacity="0.5" />

                {/* body */}
                <path d={BODY_PATH} fill="#f4f5f7" stroke="#d5d7de" strokeWidth="1.5" />

                {/* windshield + side windows */}
                <rect x="38" y="68" width="30" height="26" rx="7" fill="url(#bus-glass)" />
                <rect x="38" y="68" width="30" height="26" rx="7" fill="url(#bus-glass-shine)" />
                {Array.from({ length: 5 }).map((_, i) => (
                  <g key={i}>
                    <rect
                      x={78 + i * 56}
                      y={68}
                      width="38"
                      height="26"
                      rx="6"
                      fill="url(#bus-glass)"
                    />
                    <rect
                      x={78 + i * 56}
                      y={68}
                      width="38"
                      height="26"
                      rx="6"
                      fill="url(#bus-glass-shine)"
                    />
                  </g>
                ))}

                {/* side mirror */}
                <path d="M 38 66 L 27 60 L 27 53" fill="none" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />

                {/* wrap stripe with wordmark */}
                <path d="M 24 106 L 376 98 L 376 132 L 24 140 Z" fill="url(#bus-stripe)" />
                <circle cx="52" cy="119" r="13" fill="url(#bus-badge)" stroke="white" strokeWidth="1.5" />
                <text
                  x="52"
                  y="123.5"
                  textAnchor="middle"
                  fontFamily="var(--font-display)"
                  fontSize="11"
                  fontWeight="700"
                  fill="white"
                >
                  AI
                </text>
                <text
                  x="76"
                  y="123"
                  fontFamily="var(--font-display)"
                  fontSize="12"
                  fontWeight="800"
                  letterSpacing="0.4"
                  fill="white"
                  stroke="rgba(15,17,22,0.25)"
                  strokeWidth="2.5"
                  paintOrder="stroke"
                >
                  GREAT AMERICAN INNOVATION TOUR
                </text>

                {/* lower body sheen */}
                <rect x="24" y="58" width="352" height="46" fill="url(#bus-sheen)" clipPath="url(#bus-body-clip)" opacity="0.5" />

                {/* headlight + taillight */}
                <rect x="24" y="150" width="8" height="12" rx="2" fill="var(--color-signal-3)" />
                <rect x="368" y="150" width="8" height="12" rx="2" fill="#e14b4b" />

                {/* wheels */}
                {[100, 300].map((cx) => (
                  <g key={cx}>
                    <circle cx={cx} cy="180" r="19" fill="url(#bus-tire)" stroke="#08090b" strokeWidth="2" />
                    <circle cx={cx} cy="180" r="8" fill="#9ca0ac" />
                    <circle cx={cx} cy="180" r="8" fill="none" stroke="#6b6f7a" strokeWidth="1" />
                    {[0, 60, 120].map((angle) => (
                      <line
                        key={angle}
                        x1={cx}
                        y1="180"
                        x2={cx + 6 * Math.cos((angle * Math.PI) / 180)}
                        y2={180 + 6 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#6b6f7a"
                        strokeWidth="1"
                      />
                    ))}
                  </g>
                ))}
              </svg>

              {busFeatures.map((feature) => (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  style={{ left: `${feature.position.x}%`, top: `${feature.position.y}%` }}
                  className={cn(
                    "focus-ring absolute -translate-x-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full border transition-all duration-300",
                    active === feature.key
                      ? "border-signal-2 bg-signal-2 text-void scale-110"
                      : "border-surface-border bg-surface text-ink-muted hover:border-ink/50 hover:text-ink",
                  )}
                  aria-pressed={active === feature.key}
                  aria-label={`View ${feature.title}`}
                >
                  <Plus className={cn("size-4 transition-transform", active === feature.key && "rotate-45")} />
                  {active !== feature.key && (
                    <span className="absolute inset-0 rounded-full bg-signal-2/30 animate-ping" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Feature detail card */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {busFeatures.map((feature) => (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  className={cn(
                    "focus-ring rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                    active === feature.key
                      ? "border-signal-2 text-signal-2"
                      : "border-surface-border text-ink-muted hover:text-ink",
                  )}
                >
                  {feature.title}
                </button>
              ))}
            </div>

            <div className="relative mt-6 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-surface-border bg-surface-2 p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {activeFeature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {activeFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
