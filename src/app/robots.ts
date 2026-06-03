import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://khfa.dev";

  // All rules share the same allow/disallow config.
  // Next.js MetadataRoute.Robots doesn't support per-bot allow/disallow
  // variations, so we use the rules array form and repeat the config.
  const sharedRule = {
    allow: "/",
    disallow: ["/_next/static/", "/_next/image/"],
  };

  return {
    rules: [
      // General crawlers
      { userAgent: "*",              ...sharedRule },
      // OpenAI
      { userAgent: "GPTBot",         ...sharedRule },
      { userAgent: "ChatGPT-User",   ...sharedRule },
      { userAgent: "OAI-SearchBot",  ...sharedRule },
      // Anthropic
      { userAgent: "ClaudeBot",      ...sharedRule },
      { userAgent: "Claude-Web",     ...sharedRule },
      // Google AI
      { userAgent: "Google-Extended",...sharedRule },
      { userAgent: "Googlebot",      ...sharedRule },
      // Perplexity
      { userAgent: "PerplexityBot",  ...sharedRule },
      // Cohere
      { userAgent: "cohere-ai",      ...sharedRule },
      // Meta
      { userAgent: "FacebookBot",    ...sharedRule },
      // Common / others
      { userAgent: "Omgilibot",      ...sharedRule },
      { userAgent: "Bytespider",     ...sharedRule },
      { userAgent: "PetalBot",       ...sharedRule },
      { userAgent: "YouBot",         ...sharedRule },
      { userAgent: "CCBot",          ...sharedRule },
      { userAgent: "ia_archiver",    ...sharedRule },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
