"use client";

import { useEffect, useState } from "react";
import { User, Gauge, Zap, ShieldCheck, Terminal, Layers } from "lucide-react";

const SKILLS = {
  Backend: ["Node.js", "Express", "PostgreSQL", "Redis"],
  Security: ["JWT", "RBAC", "OAuth2", "Pen Testing"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Tools: ["Docker", "Git", "Linux", "AWS"],
};

export default function About() {
  return (
    <section id="about" className="relative bg-[#080B12] text-slate-100 py-24 overflow-hidden px-6 sm:px-12">
      {/* Visual background scanning effects */}
      <div className="absolute inset-0 bg-indigo-500/4 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <span className="text-indigo-500/20 text-lg font-mono absolute left-[30%] top-10">+</span>
        <span className="text-indigo-500/20 text-lg font-mono absolute right-[20%] top-[40%]" >+</span>
        <span className="text-indigo-500/20 text-lg font-mono absolute left-[10%] bottom-[20%]">+</span>
      </div>

      <span className="leading-tight select-none pointer-events-none font-mono text-indigo-500/20 text-[10px] absolute right-10 top-36 hidden sm:block text-right">
        01001011 01000110 01000001
        <br />
        0x4F2A 0x88B1 0xC3DE
        <br />
        11010010 01101001 00110101
      </span>

      {/* Container */}
      <div className="max-w-[1140px] mx-auto">
        
        {/* Large Header Section */}
        <div className="flex items-end gap-4 mb-12">
          <span className="font-mono text-slate-500 text-sm mb-3">
            // 01
          </span>
          <h2 className="leading-none select-none font-sans font-extrabold text-slate-100 text-6xl sm:text-8xl lg:text-[100px] tracking-tighter">
            about
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-start">
          
          {/* Left Column: identity.json Profile Stats Card */}
          <div className="relative rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/15 overflow-hidden">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            
            <div className="flex p-6 flex-col gap-6">
              {/* Header Box */}
              <div className="rounded-xl bg-[#080B12] border border-indigo-500/15 flex p-6 flex-col items-center gap-3 relative overflow-hidden">
                <div className="size-20 rounded-full border border-indigo-500/30 overflow-hidden relative group">
                  <img
                    src="/DSC_9812.jpg"
                    alt="Khawaja Fashi"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-110"
                  />
                </div>
                <div className="font-mono text-[#22D3A5] text-xs">
                  identity.json
                </div>
              </div>

              {/* Information Rows */}
              <div className="font-mono text-xs sm:text-sm flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-16">name</span>
                  <span className="text-indigo-500">→</span>
                  <span className="text-slate-100">Khawaja Fashi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-16">role</span>
                  <span className="text-indigo-500">→</span>
                  <span className="text-slate-100">Backend Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-16">uni</span>
                  <span className="text-indigo-500">→</span>
                  <span className="text-slate-100">FAST NUCES, ISB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-16">degree</span>
                  <span className="text-indigo-500">→</span>
                  <span className="text-slate-100">B.Cybersecurity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-16">year</span>
                  <span className="text-indigo-500">→</span>
                  <span className="text-slate-100">2023 — 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 w-16">status</span>
                  <span className="text-indigo-500">→</span>
                  <span className="text-[#22D3A5] flex items-center gap-1.5 font-medium">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#22D3A5]" />
                    actively building
                  </span>
                </div>
              </div>

              {/* 3 mini metric cards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-[#080B12] border border-indigo-500/15 flex p-3 flex-col gap-1.5">
                  <Gauge className="size-4 text-[#22D3A5]" />
                  <span className="font-sans font-extrabold text-slate-100 text-sm sm:text-base">
                    73%
                  </span>
                  <span className="leading-tight font-mono text-[9px] text-slate-500">
                    API Latency
                  </span>
                </div>
                <div className="rounded-xl bg-[#080B12] border border-indigo-500/15 flex p-3 flex-col gap-1.5">
                  <Zap className="size-4 text-indigo-500" />
                  <span className="font-sans font-extrabold text-slate-100 text-sm sm:text-base">
                    &lt;300ms
                  </span>
                  <span className="leading-tight font-mono text-[9px] text-slate-500">
                    ML pipeline
                  </span>
                </div>
                <div className="rounded-xl bg-[#080B12] border border-indigo-500/15 flex p-3 flex-col gap-1.5">
                  <ShieldCheck className="size-4 text-[#22D3A5]" />
                  <span className="font-sans font-extrabold text-slate-100 text-[11px] sm:text-xs truncate">
                    JWT/RBAC
                  </span>
                  <span className="leading-tight font-mono text-[9px] text-slate-500">
                    Auth Shipped
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Skills Categories */}
          <div className="flex flex-col gap-8">
            
            {/* Bio Card */}
            <div className="relative rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/15 overflow-hidden">
              <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
              <div className="flex p-6 flex-col gap-3">
                <div className="font-mono text-slate-500 text-xs flex items-center gap-2">
                  <Terminal className="size-3.5 text-[#22D3A5]" />
                  cat bio.md
                </div>
                <p className="leading-relaxed font-sans text-slate-200 text-sm sm:text-base lg:text-lg">
                  I design secure systems where latency and threat surfaces are systematically crushed. Combining operational cybersecurity with solid backend engineering in Node.js and Python, I focus on performance architecture, authentication validation protocols, and reliable real-time analytics pipelines.
                </p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="relative rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/15 overflow-hidden flex-1">
              <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
              <div className="flex p-6 flex-col gap-4">
                <div className="font-mono text-slate-500 text-xs flex items-center gap-2">
                  <Layers className="size-3.5 text-[#22D3A5]" />
                  ./skills --list
                </div>
                
                <div className="divide-y divide-indigo-500/10 flex flex-col">
                  {Object.entries(SKILLS).map(([category, items]) => (
                    <div key={category} className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] py-3.5 items-center gap-4">
                      <span className="font-mono text-right text-slate-400 text-xs sm:text-sm font-semibold">
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="font-mono rounded-md bg-[#080B12] text-slate-200 text-[10px] sm:text-xs border border-indigo-500/20 hover:border-indigo-500/40 px-2.5 py-1.5 transition-all"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
