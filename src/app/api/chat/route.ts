import Anthropic from "@anthropic-ai/sdk";
import { buildTripSystemPrompt } from "@/lib/trip-context";

export const runtime = "nodejs";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_HISTORY = 20;
const MAX_MESSAGE_LENGTH = 2000;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    (record.role === "user" || record.role === "assistant") &&
    typeof record.content === "string"
  );
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The trip assistant isn't connected yet — no API key configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0 || !messages.every(isChatMessage)) {
    return Response.json({ error: "Expected a non-empty list of chat messages." }, { status: 400 });
  }

  const trimmed: ChatMessage[] = messages
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  const anthropic = new Anthropic({ apiKey });

  let stream;
  try {
    stream = anthropic.messages.stream({
      model: MODEL,
      max_tokens: 400,
      system: buildTripSystemPrompt(),
      messages: trimmed,
    });
  } catch {
    return Response.json({ error: "Couldn't reach the trip assistant." }, { status: 502 });
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        stream.on("text", (delta) => {
          controller.enqueue(encoder.encode(delta));
        });
        await stream.finalMessage();
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
