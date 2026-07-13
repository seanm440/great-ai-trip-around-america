"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { impactStats } from "@/data/impact-stats";

export function StatsBanner() {
  return (
    <section className="relative border-y border-surface-border bg-surface py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
          {impactStats.map((stat, i) => (
            <motion.a
              key={stat.label}
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="focus-ring group block"
            >
              <span className="signal-gradient-text font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm leading-snug text-ink-muted">{stat.label}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ink-faint transition-colors group-hover:text-ink-muted">
                {stat.source}
              </p>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
