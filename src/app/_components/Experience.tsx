"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink, GitBranch, Plus } from "lucide-react";
import Link from "next/link";

interface DetailBullet {
  code: string;
  text: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  shortCompany: string;
  role: string;
  type: string;
  period: string;
  location: string;
  link: string;
  active: boolean;
  stack: string[];
  details: DetailBullet[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "full-time",
    company: "QUEM SYSTEMS INTERNATIONAL",
    shortCompany: "QUEM SYSTEMS",
    role: "Backend Engineer",
    type: "Remote, Full-Time",
    period: "May 2026 — Present",
    location: "Islamabad, PK · remote",
    link: "https://quemsys.github.io/",
    active: true,
    stack: ["Node.js", "Docker", "RBAC", "Redis", "AWS", "Linux"],
    details: [
      {
        code: "Redis-based caching layer",
        text: "Architected a Redis-based caching layer independently, reducing database read load by 45% and cutting p95 response times by 160ms — designed and shipped asynchronously with zero real-time supervision."
      },
      {
        code: "backend microservices",
        text: "Containerized all backend microservices using Docker, standardizing environment parity across a distributed team and reducing onboarding setup times from 4 hours to 10 minutes."
      },
      {
        code: "RBAC middleware",
        text: "Extended RBAC middleware to enforce subscription guards on 42 endpoints, independently fixing a critical privilege gap and detailing the resolution via a structured documentation write-up on Notion/GitHub."
      },
      {
        code: "async delivery",
        text: "Delivered 14+ high-priority features across 4 development sprints entirely async, driving progress across PKT and EST time zones through clean documentation, explicit Slack updates, and thorough PR reviews."
      }
    ]
  },
  {
    id: "intern",
    company: "QUEM SYSTEMS INTERNATIONAL",
    shortCompany: "QUEM SYSTEMS",
    role: "Backend Engineer Intern",
    type: "Remote",
    period: "March 2026 — May 2026",
    location: "Islamabad, PK · remote",
    link: "https://quemsys.github.io/",
    active: false,
    stack: ["Prisma ORM", "MySQL", "JWT", "Promise.all", "Axios"],
    details: [
      {
        code: "MySQL queries",
        text: "Slashed backend API response time from ~450ms to under 120ms (73% reduction) by rewriting legacy N+1 MySQL queries and generating optimal composite indexes via Prisma ORM independently."
      },
      {
        code: "HS256 JWT",
        text: "Engineered a 4-tier security framework (HS256 JWT) securing 113 routes across user, admin, and subscription roles with bulletproof cookie isolation and account-state verification."
      },
      {
        code: "Promise.all",
        text: "Accelerated admin dashboard workflows by batching 17 queries via Promise.all, mitigating UI blocking to render user metrics and multi-platform social data in one unified network round-trip."
      },
      {
        code: "Axios interceptor",
        text: "Implemented an Axios interceptor managing silent JWT rotation; self-documented the architecture to enable seamless async integration for frontend developers without needing synchronous meetings."
      }
    ]
  }
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string>("full-time");

  const selectedExp = EXPERIENCES.find((exp) => exp.id === selectedId) || EXPERIENCES[0];

  // Helper function to render text with specific code segments formatted beautifully
  const renderHighlightedText = (text: string, code: string) => {
    const parts = text.split(code);
    if (parts.length <= 1) return <span>{text}</span>;
    return (
      <>
        {parts[0]}
        <code className="font-mono rounded-md bg-indigo-500/10 text-indigo-400 text-xs border border-indigo-500/20 px-1.5 py-0.5 mx-1 font-semibold">
          {code}
        </code>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      id="experience"
      className="relative bg-[#080B12] text-slate-100 py-24 overflow-hidden px-6 sm:px-12"
    >
      <div className="absolute inset-0 bg-indigo-500/4 pointer-events-none" />
      <div className="top-1/4 left-1/2 size-[600px] -translate-x-1/2 blur-3xl rounded-full bg-indigo-500/10 absolute pointer-events-none" />

      {/* Floating absolute decorative markers */}
      <div className="text-indigo-500/10 leading-relaxed select-none font-mono text-[10px] absolute right-16 top-16 hidden md:block">
        01001110 01101111 01100100
        <br />
        01100101 00101110 01101010
        <br />
        0x4A 0x57 0x54 0x52 0x42 0x43
      </div>
      <div className="left-[40%] text-[#22D3A5]/10 leading-relaxed select-none font-mono text-[10px] absolute bottom-12 hidden md:block">
        sys.audit() ::-&gt; ok
        <br />
        auth.verify(token) -&gt; 200
      </div>

      <div className="text-indigo-500/30 absolute left-8 top-32">
        <Plus className="size-4" />
      </div>
      <div className="text-indigo-500/25 absolute right-12 bottom-24">
        <Plus className="size-4" />
      </div>

      <div className="max-w-[1140px] mx-auto w-full">
        {/* Section Header */}
        <div className="relative z-10 flex flex-col mb-12">
          <div className="items-baseline flex gap-4">
            <span className="font-mono text-slate-500 text-sm leading-5 tracking-widest">
              // 02
            </span>
            <span className="font-mono uppercase text-indigo-400 text-xs tracking-[4.8px]">
              experience.log
            </span>
          </div>
          <div className="relative mt-2">
            <h2 className="leading-none select-none font-sans font-extrabold text-slate-100 text-6xl sm:text-8xl lg:text-[100px] tracking-tighter">
              experience
            </h2>
          </div>
        </div>

        {/* Layout split: 30% Timeline / 70% Card Details */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 mt-6">

          {/* Timeline Column */}
          <div className="w-full lg:w-[30%] flex flex-col">
            <div className="font-mono uppercase text-slate-500 text-[11px] tracking-[4px] flex mb-6 items-center gap-2">
              <GitBranch className="size-4 text-indigo-500" />
              timeline
            </div>

            {/* Timeline connectors */}
            <div className="relative pl-8">
              <div className="bg-gradient-to-b from-[#6366F1]/60 via-[#6366F1]/20 to-transparent absolute left-[7px] top-2 bottom-4 w-px" />

              {/* Dynamic Experience Selector Items */}
              {EXPERIENCES.map((exp) => {
                const isSelected = exp.id === selectedId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className="relative mb-12 flex flex-col text-left group w-full cursor-pointer focus:outline-none transition-all duration-300"
                  >
                    {/* Selected Status Glowing Bullet */}
                    {isSelected ? (
                      <div className="size-4 ring-4 ring-indigo-500/20 shadow-[0_0_18px_4px_rgba(99,102,241,0.55)] rounded-full bg-indigo-500 absolute -left-[29px] top-1 transition-all duration-300" />
                    ) : (
                      <div className="size-3 rounded-full bg-[#0D1117] border border-slate-500/40 absolute -left-[28px] top-1.5 group-hover:border-indigo-500/60 transition-all duration-300" />
                    )}

                    {/* Indicator badge */}
                    <div className="flex mb-1 items-center gap-2">
                      <span className={`size-1.5 rounded-full ${exp.active ? "bg-[#22D3A5] animate-pulse" : "bg-slate-500"}`} />
                      <span className={`font-mono uppercase text-[9px] tracking-widest ${exp.active ? "text-[#22D3A5]" : "text-slate-500"}`}>
                        {exp.active ? "active" : "completed"}
                      </span>
                    </div>

                    {/* Company and Role Details */}
                    <div className={`font-mono font-semibold text-[15px] tracking-tight transition-colors duration-300 ${isSelected ? "text-slate-100" : "text-slate-400 group-hover:text-slate-200"}`}>
                      {exp.shortCompany}
                    </div>
                    <div className={`text-sm leading-5 mt-0.5 transition-colors duration-300 ${isSelected ? "text-slate-300" : "text-slate-500 group-hover:text-slate-400"}`}>
                      {exp.role}
                    </div>
                    <div className={`font-mono text-[11px] mt-1 font-medium transition-colors duration-300 ${isSelected ? "text-indigo-400" : "text-indigo-400/60 group-hover:text-indigo-400"}`}>
                      {exp.period}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full lg:w-[70%]">
            <div className="relative shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/30 overflow-hidden min-h-[460px] flex flex-col justify-between">
              <div className="bg-gradient-to-r from-transparent via-[#6366F1]/60 to-transparent absolute inset-x-0 top-0 h-px" />
              <div className="bg-gradient-to-b from-[#6366F1]/[0.06] to-transparent pointer-events-none absolute inset-x-0 top-0 h-24" />

              <div className="relative bg-gray-900/10 p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header block inside card */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold uppercase text-[#22D3A5] text-xl sm:text-2xl tracking-tight flex items-center gap-1.5">
                          {selectedExp.company}
                        </span>
                        <Link href={selectedExp.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-5 text-[#22D3A5]/70 hover:text-[#22D3A5] shrink-0 transition-colors" />
                        </Link>
                      </div>
                      <div className="font-mono uppercase text-slate-500 text-[10px] tracking-[4px] mt-2">
                        {selectedExp.location}
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-semibold text-slate-100 text-sm sm:text-base">
                        {selectedExp.role} <span className="text-slate-500 text-xs sm:text-sm font-normal">({selectedExp.type})</span>
                      </div>
                      <div className="font-mono text-indigo-400 text-xs mt-1">
                        {selectedExp.period}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#6366F1]/20 via-[#6366F1]/5 to-transparent my-6 h-px" />

                  {/* Bullets content */}
                  <div className="flex flex-col gap-5">
                    {selectedExp.details.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                        <ChevronRight className="size-5 shrink-0 text-indigo-500 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                        <p className="leading-relaxed text-slate-300 text-sm sm:text-[15px]">
                          {renderHighlightedText(item.text, item.code)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-r from-[#6366F1]/20 via-transparent to-transparent my-6 h-px" />

                  {/* Footer Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span className="font-mono uppercase text-slate-500 text-[9px] tracking-[4px] mr-1">
                      stack
                    </span>
                    {selectedExp.stack.map((tech) => (
                      <div key={tech} className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-[#22D3A5] text-xs sm:text-sm">
                          #{tech}
                        </span>
                        <span className="text-slate-700 last:hidden">·</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Employed status label beneath card */}
            <div className="font-mono text-slate-500 text-[10px] flex mt-4 justify-between items-center px-2">
              <span className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse rounded-full bg-[#22D3A5]" />
                currently_employed → {selectedExp.active ? "true" : "false"}
              </span>
              <span>entry {selectedId === "full-time" ? "01" : "02"} / 02</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
