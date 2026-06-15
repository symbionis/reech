/**
 * Cloudflare Pages Function — POST /api/contact (Contact form).
 *
 * Posts the inquiry to a Slack Incoming Webhook (SLACK_WEBHOOK_URL). The URL is
 * a server-side secret (set in the Pages project: Settings → Variables and
 * Secrets, or `wrangler pages secret put SLACK_WEBHOOK_URL`); when unset the
 * route returns 503 so the form falls back to the email contact. Pages auto-
 * discovers this file and routes `/api/contact` to it — static/SPA routes are
 * served by the asset handler and never reach this script.
 *
 * Mirrors the Slack wiring used on the ackinax site.
 */

interface Env {
  SLACK_WEBHOOK_URL?: string;
}

interface ContactMessage {
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  message: string;
  interests?: {
    general?: boolean;
    cpuMechanism?: boolean;
    strategy?: boolean;
    other?: boolean;
  };
}

// Best-effort, per-isolate rate limit — a soft guard against casual abuse.
const RATE_LIMIT = 6;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > RATE_LIMIT;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INTEREST_LABELS: Record<string, string> = {
  general: "General fund concept",
  cpuMechanism: "CPU mechanism",
  strategy: "Investment strategy",
  other: "Other",
};

async function postToSlack(webhook: string, payload: unknown): Promise<boolean> {
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

function buildContactMessage(c: ContactMessage) {
  const who = c.name || c.email || "Someone";
  const sender = c.organization ? `${who} · ${c.organization}` : who;

  const interests = Object.entries(c.interests ?? {})
    .filter(([, on]) => on)
    .map(([key]) => INTEREST_LABELS[key] ?? key);

  const facts = [
    c.email ? `*Email:* ${c.email}` : null,
    c.phone ? `*Phone:* ${c.phone}` : null,
    c.organization ? `*Organization:* ${c.organization}` : null,
    interests.length ? `*Interests:* ${interests.join(", ")}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    text: `Contact inquiry — ${sender}`,
    blocks: [
      { type: "section", text: { type: "mrkdwn", text: `✉️ *New Reech Fund inquiry*\n${c.message}` } },
      ...(facts ? [{ type: "section", text: { type: "mrkdwn", text: facts } }] : []),
      { type: "context", elements: [{ type: "mrkdwn", text: `From: ${sender}  ·  Source: Contact form (\`/contact\`)` }] },
    ],
  };
}

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const { request, env } = context;

  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  if (rateLimited(`contact:${ip}`)) {
    return json({ error: "Too many requests — try again in a minute." }, 429);
  }
  if (!env.SLACK_WEBHOOK_URL) {
    return json({ error: "This form is not configured." }, 503);
  }

  let body: ContactMessage;
  try {
    body = (await request.json()) as ContactMessage;
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  if (!body.message?.trim()) return json({ error: "A message is required" }, 400);
  const email = body.email?.trim();
  if (!email) return json({ error: "An email is required" }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: "Invalid email" }, 400);

  const contact: ContactMessage = {
    name: body.name?.trim().slice(0, 100),
    organization: body.organization?.trim().slice(0, 120),
    email: email.slice(0, 255),
    phone: body.phone?.trim().slice(0, 32),
    message: body.message.trim().slice(0, 2000),
    interests: body.interests,
  };

  const ok = await postToSlack(env.SLACK_WEBHOOK_URL, buildContactMessage(contact));
  return ok ? json({ success: true }) : json({ error: "Failed to deliver message" }, 502);
};
