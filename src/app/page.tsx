// No "use client" directive here — this is a Server Component.
// Next.js App Router renders Server Components as static HTML at build time (SSG),
// which means all text content is baked into the raw HTML source that AI crawlers read.
// Client-side interactivity is preserved because each child component that needs it
// can independently declare "use client" at their own boundary.

import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";

// Static metadata anchor — machine-readable entity block for AI crawlers and RAG pipelines.
// Rendered as a visually hidden <section> in the HTML source.
// Screen readers skip it (aria-hidden), search/AI crawlers index it.
const ENTITY_BLOCK = {
  name: "Khawaja Fashi Ud Din Abdullah",
  role: "Backend Engineer (Remote, Full-Time)",
  employer: "Quem Systems International, Islamabad, Pakistan",
  education: "Bachelor of Cybersecurity — FAST NUCES Islamabad (2023–2027, Expected)",
  stack: "Node.js (Express), Python, SQL (PostgreSQL, MySQL), Redis, Prisma ORM, REST APIs, JWT/RBAC, Docker, WebSocket",
  metrics: [
    "Slashed backend API response time from ~450ms to under 120ms (73% reduction) by rewriting legacy N+1 MySQL queries and generating optimal composite indexes via Prisma ORM independently.",
    "Architected a Redis-based caching layer independently, reducing database read load by 45% and cutting p95 response times by 160ms.",
    "Engineered a 4-tier JWT/HS256 security framework securing 113 routes across user, admin, and subscription roles.",
    "Extended RBAC middleware to enforce subscription guards on 42 endpoints.",
    "Containerised all backend microservices with Docker, reducing onboarding from 4 hours to 10 minutes.",
    "Delivered 14+ features across 4 async sprints spanning PKT and EST time zones.",
  ],
  contact: {
    email: "fashi449623@gmail.com",
    github: "https://github.com/KhawajaFashi",
    linkedin: "https://linkedin.com/in/khawaja-fashi-ud-din-abdullah-859b7a23b/",
    website: "https://khfa.dev",
  },
};

export default function Page() {
  return (
    <>
      {/*
        ── GEO ENTITY BLOCK ────────────────────────────────────────────────────
        Visually hidden but fully present in the SSR HTML source.
        AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) index raw HTML —
        they do not execute JavaScript — so this block ensures key entity data
        is always extractable without JS execution or CSS layout parsing.
        ────────────────────────────────────────────────────────────────────────
      */}
      <section
        aria-hidden="true"
        style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}
      >
        <h1>{ENTITY_BLOCK.name}</h1>
        <p><strong>Role:</strong> {ENTITY_BLOCK.role}</p>
        <p><strong>Employer:</strong> {ENTITY_BLOCK.employer}</p>
        <p><strong>Education:</strong> {ENTITY_BLOCK.education}</p>
        <p><strong>Core Stack:</strong> {ENTITY_BLOCK.stack}</p>
        <h2>Key Performance Metrics</h2>
        <ul>
          {ENTITY_BLOCK.metrics.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href={`mailto:${ENTITY_BLOCK.contact.email}`}>{ENTITY_BLOCK.contact.email}</a></li>
          <li>GitHub: <a href={ENTITY_BLOCK.contact.github}>{ENTITY_BLOCK.contact.github}</a></li>
          <li>LinkedIn: <a href={ENTITY_BLOCK.contact.linkedin}>{ENTITY_BLOCK.contact.linkedin}</a></li>
          <li>Website: <a href={ENTITY_BLOCK.contact.website}>{ENTITY_BLOCK.contact.website}</a></li>
        </ul>
      </section>

      {/* Visual portfolio sections */}
      <div className="bg-[#f9f9f9] text-black min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
