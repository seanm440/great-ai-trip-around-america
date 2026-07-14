"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { href: "#why", label: "Why" },
  { href: "#bus", label: "The Bus" },
  { href: "#route", label: "The Route" },
  { href: "#stops", label: "Stops" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#follow", label: "Follow" },
  { href: "/sources", label: "Sources" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-surface-border bg-void/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="focus-ring flex items-center gap-2 font-display text-base font-semibold tracking-tight text-ink"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-signal-1 to-signal-2 text-xs font-bold text-void">
              AI
            </span>
            <span className="hidden sm:inline">The Great AI Trip</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#follow"
              className="focus-ring inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-void transition-colors hover:bg-signal-2"
            >
              Follow the Journey
            </a>
          </div>

          <button
            type="button"
            className="focus-ring -mr-2 flex size-10 items-center justify-center text-ink lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-surface-border bg-void lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring rounded-lg px-3 py-3 text-base text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#follow"
                onClick={() => setMenuOpen(false)}
                className="focus-ring mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-void"
              >
                Follow the Journey
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
