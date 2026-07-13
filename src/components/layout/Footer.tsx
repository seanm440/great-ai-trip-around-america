import Link from "next/link";
import { InstagramIcon, YoutubeIcon, XIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { cities } from "@/data/cities";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://youtube.com", label: "YouTube", icon: YoutubeIcon },
  { href: "https://twitter.com", label: "X / Twitter", icon: XIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-void">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-base font-semibold text-ink">
              <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-signal-1 to-signal-2 text-xs font-bold text-void">
                AI
              </span>
              The Great AI Trip
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              A nationwide road trip documenting how AI is creating opportunity across
              America, one community at a time.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              The Route
            </h3>
            <ul className="mt-4 space-y-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="focus-ring text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {city.name}, {city.stateAbbr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "#why", label: "Why We're Doing This" },
                { href: "#bus", label: "The Bus" },
                { href: "#visit", label: "What We'll Visit" },
                { href: "#opportunity", label: "AI Creates Opportunity" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              Follow Along
            </h3>
            <div className="mt-4 flex gap-3">
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

        <div className="mt-16 flex flex-col gap-4 border-t border-surface-border pt-8 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Great AI Trip Around America. All rights reserved.</p>
          <p>Built to show America what AI actually looks like.</p>
        </div>
      </Container>
    </footer>
  );
}
