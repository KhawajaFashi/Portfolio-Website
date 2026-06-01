"use client";

import { ChevronRight, ExternalLink, GitBranch, Plus } from "lucide-react";
import Link from "next/link";

const DETAILS = [
  {
    code: "RBAC",
    text: "Architected a 4-tier authorization layer, scoping every endpoint to granular roles and shrinking the attack surface across the API.",
  },
  {
    code: "HS256 JWT",
    text: "Implemented stateless authentication using rotating refresh flows and secure server-side validation to protect 113 API routes.",
  },
  {
    code: "Promise.all",
    text: "Parallelised 17 high-frequency database queries (PostgreSQL/MongoDB) to serve subscription metrics, reducing API response latency by 73%.",
  },
  {
    code: "Axios interceptor",
    text: "Built a client-side interceptor that automatically refreshes expired JWTs on 401, queues in-flight requests, and replays them transparently.",
  },
];

export default function Experience() {
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

              {/* Active Role */}
              <div className="relative mb-12">
                <div className="size-4 ring-4 ring-indigo-500/20 shadow-[0_0_18px_4px_rgba(99,102,241,0.55)] rounded-full bg-indigo-500 absolute -left-[29px] top-1" />
                <div className="flex mb-1 items-center gap-2">
                  <span className="size-1.5 animate-pulse rounded-full bg-[#22D3A5]" />
                  <span className="font-mono uppercase text-[#22D3A5] text-[9px] tracking-widest">
                    active
                  </span>
                </div>
                <div className="font-mono font-semibold text-slate-100 text-[15px] tracking-tight">
                  QUEM SYSTEMS
                </div>
                <div className="text-slate-500 text-sm leading-5 mt-0.5">
                  Backend Developer Intern
                </div>
                <div className="font-mono text-indigo-400 text-[11px] mt-1 font-medium">
                  Jun 2025 — Present
                </div>
              </div>

              {/* Placeholders */}
              <div className="relative opacity-40 mb-12">
                <div className="size-3 rounded-full bg-[#0D1117] border border-slate-500/40 absolute -left-[27px] top-1.5" />
                <div className="font-mono text-slate-500 text-[13px] tracking-tight">
                  FUTURE_ROLE
                </div>
                <div className="text-slate-600 text-xs leading-4 mt-0.5">
                  awaiting next chapter
                </div>
                <div className="font-mono text-slate-600/50 text-[11px] mt-1">
                  — · —
                </div>
              </div>

              <div className="relative opacity-20">
                <div className="size-3 rounded-full bg-[#0D1117] border border-slate-500/40 absolute -left-[27px] top-1.5" />
                <div className="font-mono text-slate-500 text-[13px] tracking-tight">
                  FUTURE_ROLE
                </div>
                <div className="text-slate-600 text-xs leading-4 mt-0.5">
                  awaiting next chapter
                </div>
                <div className="font-mono text-slate-600/50 text-[11px] mt-1">
                  — · —
                </div>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full lg:w-[70%]">
            <div className="relative shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-transparent via-[#6366F1]/60 to-transparent absolute inset-x-0 top-0 h-px" />
              <div className="bg-gradient-to-b from-[#6366F1]/[0.06] to-transparent pointer-events-none absolute inset-x-0 top-0 h-24" />

              <div className="relative bg-gray-900/10 p-6 sm:p-8">
                {/* Header block inside card */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold uppercase text-[#22D3A5] text-xl sm:text-2xl tracking-tight flex items-center gap-1.5">
                        QUEM SYSTEMS
                      </span>
                      <Link href="https://quemsys.github.io/" about="_blank">
                        <ExternalLink className="size-5 text-[#22D3A5]/70 shrink-0" />
                      </Link>
                    </div>
                    <div className="font-mono uppercase text-slate-500 text-[10px] tracking-[4px] mt-2">
                      Islamabad, PK · remote
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-semibold text-slate-100 text-sm sm:text-base">
                      Backend Developer Intern
                    </div>
                    <div className="font-mono text-indigo-400 text-xs mt-1">
                      Mar 2026 — Present
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#6366F1]/20 via-[#6366F1]/5 to-transparent my-6 h-px" />

                {/* Bullets content */}
                <div className="flex flex-col gap-5">
                  {DETAILS.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                      <ChevronRight className="size-5 shrink-0 text-indigo-500 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                      <p className="leading-relaxed text-slate-300 text-sm sm:text-[15px]">
                        {item.text.split(item.code)[0]}
                        <code className="font-mono rounded-md bg-indigo-500/10 text-indigo-400 text-xs border border-indigo-500/20 px-1.5 py-0.5 mx-1 font-semibold">
                          {item.code}
                        </code>
                        {item.text.split(item.code)[1]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#6366F1]/20 via-transparent to-transparent my-6 h-px" />

                {/* Footer Tech stack tags */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <span className="font-mono uppercase text-slate-500 text-[9px] tracking-[4px] mr-1">
                    stack
                  </span>
                  <span className="font-mono text-[#22D3A5] text-xs sm:text-sm">
                    #Node.js
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="font-mono text-[#22D3A5] text-xs sm:text-sm">
                    #PostgreSQL
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="font-mono text-[#22D3A5] text-xs sm:text-sm">
                    #JWT
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="font-mono text-[#22D3A5] text-xs sm:text-sm">
                    #Redis
                  </span>
                </div>
              </div>
            </div>

            {/* Employed status label beneath card */}
            <div className="font-mono text-slate-500 text-[10px] flex mt-4 justify-between items-center px-2">
              <span className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse rounded-full bg-[#22D3A5]" />
                currently_employed → true
              </span>
              <span>entry 01 / 01</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
