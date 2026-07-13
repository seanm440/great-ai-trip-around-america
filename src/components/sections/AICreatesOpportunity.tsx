"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { opportunityStories } from "@/data/opportunity-stories";

export function AICreatesOpportunity() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="AI Creates Opportunity"
          tone="light"
          title="Technology has always changed jobs. It's also always created new ones."
          description="That pattern isn't guaranteed to repeat exactly — but it's the honest starting point. Along the route, we're documenting where AI is already replacing tasks, and where it's opening doors that didn't exist five years ago."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunityStories.map((story, i) => (
            <motion.div
              key={story.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-7"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-1">
                {story.sector}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-paper-ink">
                {story.headline}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-ink-muted">
                {story.body}
              </p>
              {story.stat && (
                <div className="mt-6 border-t border-black/[0.06] pt-4">
                  <span className="font-display text-2xl font-semibold text-paper-ink">
                    {story.stat}
                  </span>
                  {story.statLabel && (
                    <p className="mt-1 text-xs text-paper-ink-muted">{story.statLabel}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-black/[0.06] bg-paper-2 p-8 text-center"
        >
          <p className="text-base leading-relaxed text-paper-ink-muted">
            We&apos;re not claiming every job disrupted by AI gets replaced one-for-one.
            We&apos;re committing to show real examples, from real people, and let viewers
            draw their own conclusions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
