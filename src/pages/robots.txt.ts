import type { APIRoute } from "astro";

/**
 * robots.txt — welcomes both classic search engines and AI crawlers
 * (part of the "AI SEO" setup: assistants like ChatGPT, Claude,
 * Perplexity and Google's AI features can only recommend the shop
 * if their crawlers are allowed to read the site).
 */
export const GET: APIRoute = ({ site }) => {
  const body = `# Mimi Creates — robots.txt
# All friendly crawlers are welcome, including AI assistants.

User-agent: *
Allow: /

# ── AI / LLM crawlers, explicitly welcomed ──
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Bytespider
Allow: /

# Machine-readable site guide for AI assistants
# See also: ${new URL("/llms.txt", site).href}

Sitemap: ${new URL("/sitemap-index.xml", site).href}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
