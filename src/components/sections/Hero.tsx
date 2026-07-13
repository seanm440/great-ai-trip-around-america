"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cities } from "@/data/cities";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-signal-1 pt-16 sm:pt-20">
      {/* Depth vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, transparent 0%, rgba(7,17,32,0.45) 100%)",
        }}
      />

      {/* Wave-line texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
        <defs>
          <pattern
            id="hero-waves"
            width="220"
            height="70"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.4)"
          >
            <path
              d="M -10 35 Q 45 5 100 35 T 210 35"
              fill="none"
              stroke="white"
              strokeOpacity="0.12"
              strokeWidth="1.25"
            />
            <path
              d="M -10 55 Q 45 25 100 55 T 210 55"
              fill="none"
              stroke="white"
              strokeOpacity="0.07"
              strokeWidth="1.25"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-waves)" />
      </svg>

      <div className="grain-overlay absolute inset-0" />

      <Container className="relative z-10">
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/90"
          >
            <span className="size-1.5 rounded-full bg-signal-2 animate-pulse-slow" />
            5 cities announced · route expanding
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            The Great AI Trip
            <br />
            <span className="font-normal italic text-[#f6dcc0]">Around America</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
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
            <Button
              href="#route"
              variant="secondary"
              showArrow={false}
              className="border-white/40 text-white hover:border-white hover:bg-white/10"
            >
              Explore the Route
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* City marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/20 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...cities, ...cities].map((city, i) => (
              <span
                key={`${city.slug}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-white/60"
              >
                {city.name}, {city.stateAbbr}
                <span className="text-signal-2">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 left-1/2 z-10 -translate-x-1/2 text-white/60"
      >
        <ChevronDown className="size-5" />
      </motion.div>
    </section>
  );
}
