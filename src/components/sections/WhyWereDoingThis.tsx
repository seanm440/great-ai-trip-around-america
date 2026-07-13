"use client";

import { motion } from "framer-motion";
import { Eye, Users, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Eye,
    title: "Most people have never seen AI being built",
    body: "They see headlines and demos, not the labs, the whiteboards, or the people writing the code. That gap is where fear lives.",
  },
  {
    icon: Users,
    title: "Understanding comes from meeting people",
    body: "It's harder to be afraid of something once you've talked to the engineer, the founder, or the small-business owner actually using it.",
  },
  {
    icon: Compass,
    title: "The story is happening everywhere, not just Silicon Valley",
    body: "Nashville, Austin, Tampa, and the Central Valley all have their own AI story. We want to show the whole map, not just one corner of it.",
  },
];

export function WhyWereDoingThis() {
  return (
    <section id="why" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why We're Doing This"
          tone="light"
          title="AI is easy to fear and hard to understand. We want to close that gap."
          description="A lot of people are anxious about AI — and reasonably so, given how it's usually talked about. Most of that conversation happens far away from where AI is actually built. We're going there instead."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-paper-2">
                <reason.icon className="size-5 text-signal-1" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-paper-ink">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-ink-muted">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-paper-ink-muted"
        >
          We&apos;re not here to sell AI or dismiss the real concerns around it. We&apos;re here
          to document it honestly — the good, the uncertain, and the genuinely new
          opportunities it&apos;s creating.
        </motion.p>
      </Container>
    </section>
  );
}
