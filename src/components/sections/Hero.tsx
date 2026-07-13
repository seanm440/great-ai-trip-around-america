"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cities } from "@/data/cities";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-16 sm:pt-20">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-32 top-[10%] size-[36rem] rounded-full bg-signal-1/20 blur-[64px]" />
        <div
          className="animate-drift absolute -right-32 bottom-[5%] size-[36rem] rounded-full bg-signal-2/15 blur-[64px]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-drift absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-3/10 blur-[100px]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Animated route line background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60">
        <svg
          viewBox="0 0 1200 600"
          fill="none"
          className="h-full w-full max-w-[1600px]"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <motion.path
            d="M -50 420 C 150 420, 220 180, 400 220 C 600 260, 620 460, 850 400 C 1000 360, 1050 200, 1250 180"
            stroke="url(#route-gradient)"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-signal-1)" />
              <stop offset="55%" stopColor="var(--color-signal-2)" />
              <stop offset="100%" stopColor="var(--color-signal-3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grain-overlay absolute inset-0" />

      <Container className="relative z-10">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            <span className="size-1.5 rounded-full bg-signal-2 animate-pulse-slow" />
            5 cities announced · route expanding
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            The Great AI Trip
            <br />
            <span className="signal-gradient-text">Around America</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            One bus. Thousands of miles. Countless conversations about the future of AI.
            We&apos;re crossing the country to meet the people actually building it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#follow" variant="primary">
              Follow the Journey
            </Button>
            <Button href="#route" variant="secondary" showArrow={false}>
              Explore the Route
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* City marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-surface-border bg-void/60 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...cities, ...cities].map((city, i) => (
              <span
                key={`${city.slug}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink-faint"
              >
                {city.name}, {city.stateAbbr}
                <span className="text-signal-1">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 left-1/2 z-10 -translate-x-1/2 text-ink-faint"
      >
        <ChevronDown className="size-5" />
      </motion.div>
    </section>
  );
}
