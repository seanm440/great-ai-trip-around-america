"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { InstagramIcon, YoutubeIcon, XIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://youtube.com", label: "YouTube", icon: YoutubeIcon },
  { href: "https://twitter.com", label: "X / Twitter", icon: XIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedInIcon },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-full border border-signal-2/40 bg-signal-2/10 px-5 py-3.5 text-sm text-ink">
        <Check className="size-4 text-signal-2" />
        You&apos;re on the list — we&apos;ll email you before we hit the road.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="focus-ring w-full flex-1 rounded-full border border-surface-border bg-surface-2 px-5 py-3.5 text-sm text-ink placeholder:text-ink-faint"
      />
      <button
        type="submit"
        className="focus-ring shrink-0 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-void transition-colors hover:bg-signal-2"
      >
        Notify Me
      </button>
    </form>
  );
}

export function FollowTheJourney() {
  return (
    <section id="follow" className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="animate-drift absolute left-1/4 bottom-0 size-[28rem] rounded-full bg-signal-3/15 blur-[64px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Follow the Journey"
          title="The route keeps growing"
          description="Five cities are locked in. More get announced as the trip goes on — here's what's ahead."
        />

        {/* Timeline */}
        <div className="mt-16 overflow-x-auto pb-4">
          <div className="relative flex min-w-[720px] gap-2 sm:min-w-0">
            <div className="absolute left-0 right-0 top-5 h-px bg-surface-border" />
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex-1 px-3 first:pl-0 last:pr-0"
              >
                <div
                  className={cn(
                    "relative z-10 size-2.5 rounded-full ring-4 ring-void",
                    entry.status === "planned" ? "bg-ink-faint" : "bg-signal-2",
                  )}
                />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {entry.label}
                </p>
                <h3 className="mt-1.5 text-sm font-semibold text-ink">{entry.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter + social */}
        <div className="mt-20 flex flex-col items-start gap-10 rounded-3xl border border-surface-border bg-surface-2 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Get the route before it&apos;s announced
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
              One email when we lock in a new city, drop a new episode, or hit the road.
              No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-6 lg:w-auto lg:items-end">
            <NewsletterForm />
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring flex size-10 items-center justify-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-ink/50 hover:text-ink"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
