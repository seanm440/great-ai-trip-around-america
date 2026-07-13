"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const STARTERS = [
  "Which companies are you visiting in Austin?",
  "How is AI helping small businesses on the route?",
  "What's the timeline for the trip?",
];

export function TripAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;
    setError(null);
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = "";
      let done = false;
      while (!done) {
        const result = await reader.read();
        done = result.done;
        if (result.value) {
          full += decoder.decode(result.value, { stream: true });
          const streamed = full;
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: streamed };
            return copy;
          });
        }
      }
    } catch (err) {
      setMessages((prev) => prev.slice(0, -1));
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="focus-ring fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-signal-1 to-signal-2 text-white shadow-lg shadow-signal-1/30 transition-transform hover:scale-105"
        aria-label={open ? "Close trip assistant" : "Open trip assistant"}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[min(600px,70vh)] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface-2 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-surface-border px-5 py-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-signal-1 to-signal-2">
                <Sparkles className="size-4 text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Trip Assistant</p>
                <p className="text-xs text-ink-faint">Ask about the route, companies, or stats</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-ink-muted">Try asking:</p>
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => sendMessage(s)}
                      className="focus-ring block w-full rounded-xl border border-surface-border px-3 py-2 text-left text-xs text-ink-muted transition-colors hover:border-signal-2/50 hover:text-ink"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      m.role === "user" ? "bg-signal-1 text-white" : "bg-surface text-ink-muted",
                    )}
                  >
                    {m.content ||
                      (loading && i === messages.length - 1 ? (
                        <span className="inline-flex gap-1">
                          <span className="size-1.5 animate-pulse-slow rounded-full bg-ink-faint" />
                          <span
                            className="size-1.5 animate-pulse-slow rounded-full bg-ink-faint"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <span
                            className="size-1.5 animate-pulse-slow rounded-full bg-ink-faint"
                            style={{ animationDelay: "0.4s" }}
                          />
                        </span>
                      ) : null)}
                  </div>
                </div>
              ))}

              {error && (
                <p className="rounded-xl border border-signal-3/30 bg-signal-3/10 px-3 py-2 text-xs text-signal-3">
                  {error}
                </p>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-surface-border p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the trip..."
                disabled={loading}
                className="focus-ring flex-1 rounded-full border border-surface-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="focus-ring flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-void transition-colors hover:bg-signal-2 disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
