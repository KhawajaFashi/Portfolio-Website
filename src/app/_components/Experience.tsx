"use client";

import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience-container"
      className="relative bg-[#f9f9f9] text-black w-full overflow-visible border-t border-black/5"
    >
      {/* Stacked Cards Container */}
      <div className="relative flex flex-col">
        
        {/* Card 1: Full-Time Role (Sticky Z-10, Black Background, White Text) */}
        <div 
          id="experience"
          className="sticky top-0 w-full h-screen bg-black text-white flex flex-col justify-center px-6 sm:px-12 z-10 border-b border-black/5"
        >
          {/* Decorative vertical columns overlay */}
          <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1240px] mx-auto w-full px-6 sm:px-12 z-0">
            <div className="w-px h-full bg-white/[0.03]" />
            <div className="w-px h-full bg-white/[0.03]" />
            <div className="w-px h-full bg-white/[0.03]" />
            <div className="w-px h-full bg-white/[0.03]" />
          </div>

          <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col justify-center h-[80vh]">
            {/* Section Header */}
            <div className="flex items-baseline gap-3 mb-10 sm:mb-16 select-none">
              <span className="font-mono text-slate-400 text-xs font-bold">// 02</span>
              <span className="font-mono text-[#e04e00] text-xs uppercase tracking-widest font-extrabold">Professional Experience</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-16 items-start">
              
              {/* Left Column: Role Details */}
              <div className="flex flex-col text-left">
                <span className="font-mono text-slate-400 text-[10px] tracking-[3px] uppercase font-bold mb-4">
                  May 2026 — Present
                </span>
                <h3 className="font-serif font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-4">
                  Backend Engineer
                </h3>
                <span className="font-mono text-[#e04e00] text-xs uppercase tracking-widest font-extrabold">
                  Quem Systems International
                </span>
              </div>

              {/* Right Column: Descriptions & Bullets */}
              <div className="flex flex-col gap-6">
                <p className="font-geist text-slate-300 text-base sm:text-lg leading-relaxed font-semibold">
                  Operating with full autonomy across PKT and EST time zones, architecting scalable infrastructure.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-400 text-sm sm:text-[15px] leading-relaxed">
                      Architected a Redis-based caching layer independently, reducing database read load by <strong>45%</strong> and cutting p95 response times by <strong>160ms</strong> — designed and shipped asynchronously with zero real-time supervision.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-400 text-sm sm:text-[15px] leading-relaxed">
                      Containerized all backend microservices using Docker, standardizing environment parity across a distributed team and reducing onboarding setup times from <strong>4 hours to 10 minutes</strong>.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-400 text-sm sm:text-[15px] leading-relaxed">
                      Extended RBAC middleware to enforce subscription guards on <strong>42 endpoints</strong>, independently fixing a critical privilege gap and detailing the resolution via a structured documentation write-up on Notion/GitHub.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-400 text-sm sm:text-[15px] leading-relaxed">
                      Delivered <strong>14+</strong> high-priority features across <strong>4 development sprints</strong> entirely async, driving progress across PKT and EST time zones through clean documentation, explicit Slack updates, and thorough PR reviews.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Card 2: Intern Role (Sticky Z-20, Light Background, Black Text) */}
        <div 
          id="experience-light"
          className="sticky top-0 w-full h-screen bg-[#f9f9f9] text-black flex flex-col justify-center px-6 sm:px-12 z-20"
        >
          {/* Decorative vertical columns overlay */}
          <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1240px] mx-auto w-full px-6 sm:px-12 z-0">
            <div className="w-px h-full bg-black/[0.03]" />
            <div className="w-px h-full bg-black/[0.03]" />
            <div className="w-px h-full bg-black/[0.03]" />
            <div className="w-px h-full bg-black/[0.03]" />
          </div>

          <div className="max-w-[1240px] mx-auto w-full relative z-10 flex flex-col justify-center h-[80vh]">
            {/* Section Header */}
            <div className="flex items-baseline gap-3 mb-10 sm:mb-16 select-none">
              <span className="font-mono text-slate-500 text-xs font-bold">// 02</span>
              <span className="font-mono text-[#e04e00] text-xs uppercase tracking-widest font-extrabold">Professional Experience</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-16 items-start">
              
              {/* Left Column: Role Details */}
              <div className="flex flex-col text-left">
                <span className="font-mono text-slate-500 text-[10px] tracking-[3px] uppercase font-bold mb-4">
                  March 2026 — May 2026
                </span>
                <h3 className="font-serif font-black text-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-4">
                  Backend Intern
                </h3>
                <span className="font-mono text-[#e04e00] text-xs uppercase tracking-widest font-extrabold">
                  Quem Systems International
                </span>
              </div>

              {/* Right Column: Descriptions & Bullets */}
              <div className="flex flex-col gap-6">
                <p className="font-geist text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
                  Optimized legacy systems and implemented security protocols for mission-critical infrastructure.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Slashed backend API response time from ~450ms to under 120ms (<strong className="text-black font-bold">73% reduction</strong>) by rewriting legacy N+1 MySQL queries and generating optimal composite indexes via Prisma ORM independently.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Engineered a 4-tier security framework (HS256 JWT) securing <strong className="text-black font-bold">113 routes</strong> across user, admin, and subscription roles with bulletproof cookie isolation and account-state verification.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Accelerated admin dashboard workflows by batching <strong className="text-black font-bold">17 queries</strong> via <code className="text-slate-800 font-mono">Promise.all</code>, mitigating UI blocking to render user metrics and multi-platform social data in one unified network round-trip.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="font-mono text-[#e04e00] text-sm font-bold mt-0.5 select-none">→</span>
                    <p className="font-geist text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      Implemented an Axios interceptor managing silent JWT rotation; self-documented the architecture to enable seamless async integration for frontend developers without needing synchronous meetings.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
