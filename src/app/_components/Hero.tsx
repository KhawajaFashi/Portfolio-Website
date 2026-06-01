
"use client";

import { useState } from "react";
import { Radar } from "lucide-react";


const LOGOS = [
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("about");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative bg-[#080B12] text-neutral-50 min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-6 sm:px-12"
    >
      {/* Visual background scanning effects */}
      <div className="absolute inset-0 bg-indigo-500/4 pointer-events-none" />
      <div className="absolute inset-0 bg-indigo-500/6 pointer-events-none" />

      {/* Floating Binary / Cyber Data */}
      <div className="select-none leading-loose font-mono text-indigo-500/10 text-[10px] absolute left-10 top-24 hidden md:block">
        01001011 01000110 01000001 00100000 01110011 01100101 01100011
      </div>
      <div className="select-none leading-loose font-mono text-[#22D3A5]/10 text-[10px] absolute right-16 bottom-28 hidden md:block">
        0xDEADBEEF 0x1A2B3C4D 0xFF00AA
      </div>
      <div className="select-none text-indigo-500/20 text-xl font-mono absolute left-[48%] top-24">
        +
      </div>
      <div className="select-none text-indigo-500/20 text-xl font-mono absolute left-12 bottom-36">
        +
      </div>
      <div className="select-none text-[#22D3A5]/20 text-xl font-mono absolute right-24 top-28">
        +
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 py-12">
        {/* Left Column: Text & Content */}
        <div className="w-full lg:w-[58%] flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="flex mb-6 items-center gap-3">
            <span className="bg-slate-500/30 w-8 sm:w-10 h-px" />
            <span className="relative flex w-2 h-2">
              <span className="inline-flex animate-ping opacity-75 rounded-full bg-[#22D3A5] absolute w-full h-full" />
              <span className="relative inline-flex rounded-full bg-[#22D3A5] w-2 h-2" />
            </span>
            <span className="font-mono uppercase text-slate-400 text-[10px] sm:text-xs tracking-[3.2px]">
              Available for Internships · 2026
            </span>
          </div>

          {/* Name Header */}
          <h1 className="font-sans font-extrabold text-slate-100 text-4xl sm:text-6xl lg:text-[76px] leading-[1.05] tracking-tight">
            Khawaja Fashi
            <br />
            ud Din Abdullah
          </h1>

          {/* Role Badges */}
          <div className="font-mono text-indigo-400 text-sm sm:text-base md:text-lg flex flex-col gap-1 mt-6">
            <span className="flex items-center gap-2">
              <span className="text-[#22D3A5]">{`//`}</span> {`< Backend Engineer />`}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#22D3A5]">{`//`}</span> {`< Cybersecurity Student />`}
            </span>
          </div>

          {/* Bio text */}
          <p className="max-w-xl leading-relaxed text-slate-400 text-sm sm:text-base mt-6">
            I build resilient backend systems where performance and security aren't afterthoughts — they're the foundation. Backend Engineer with 2+ years of hands-on experience in Node.js, Python, and PostgreSQL, operating with full autonomy across remote and asynchronous environments. Shipped secure JWT/RBAC frameworks, built live ML threat pipelines, and cut API latency by 73% with zero micro-management.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap mt-8 gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("projects")}
              className="group transition-all duration-300 shadow-[0_0_30px_-8px_rgba(99,102,241,0.6)] font-mono font-medium bg-indigo-600 hover:bg-indigo-500 text-slate-100 text-sm flex px-6 py-3.5 items-center gap-2 rounded-lg border border-indigo-500/30 cursor-pointer"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 font-mono font-medium text-slate-100 text-sm border border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-500/5 hover:bg-indigo-500/10 flex px-6 py-3.5 items-center gap-2 rounded-lg cursor-pointer"
            >
              View CV
            </a>
          </div>
        </div>

        {/* Right Column: High-tech Scan orbit graphic */}
        <div className="relative w-full lg:w-[42%] flex justify-center items-center py-6">
          <div className="blur-3xl rounded-full bg-indigo-500/10 absolute w-72 h-72 sm:w-96 sm:h-96" />

          {/* Main concentric orbits */}
          <div className="relative rounded-full border border-indigo-500/20 flex justify-center items-center w-72 h-72 sm:w-96 sm:h-96">
            <div className="rounded-full border border-indigo-500/15 absolute w-56 h-56 sm:w-72 sm:h-72" />
            <div className="rounded-full border border-[#22D3A5]/10 absolute w-36 h-36 sm:w-48 sm:h-48" />
            <div className="rounded-full border border-indigo-500/25 absolute w-20 h-20 sm:w-28 sm:h-28" />

            {/* Orbiting particles */}
            <div className="rounded-full absolute w-72 h-72 sm:w-96 sm:h-96 animate-[spin_24s_linear_infinite]">
              <span className="left-1/2 -translate-x-1/2 shadow-[0_0_12px_3px_rgba(99,102,241,0.8)] rounded-full bg-indigo-500 absolute top-0 w-3 h-3" />
            </div>
            <div className="rounded-full absolute w-56 h-56 sm:w-72 sm:h-72 animate-[spin_16s_linear_infinite_reverse]">
              <span className="left-1/2 -translate-x-1/2 shadow-[0_0_10px_2px_rgba(34,211,165,0.8)] rounded-full bg-[#22D3A5] absolute top-0 w-2.5 h-2.5" />
            </div>
            <div className="rounded-full absolute w-36 h-36 sm:w-48 sm:h-48 animate-[spin_10s_linear_infinite]">
              <span className="left-1/2 -translate-x-1/2 shadow-[0_0_10px_2px_rgba(99,102,241,0.7)] rounded-full bg-indigo-500 absolute top-0 w-2 h-2" />
            </div>
            <div className="rounded-full absolute w-20 h-20 sm:w-28 sm:h-28 animate-[spin_6s_linear_infinite_reverse]">
              <span className="left-1/2 -translate-x-1/2 shadow-[0_0_8px_2px_rgba(34,211,165,0.7)] rounded-full bg-[#22D3A5] absolute top-0 w-1.5 h-1.5" />
            </div>

            {/* Centered Pulsing Radar */}
            <div className="relative shadow-[0_0_30px_-4px_rgba(99,102,241,0.6)] rounded-full bg-[#0D1117] border border-indigo-500/40 flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16">
              <Radar className="size-5 sm:size-7 animate-pulse text-[#22D3A5]" />
            </div>
          </div>

          <span className="font-mono text-slate-500 text-[10px] tracking-wider absolute right-0 bottom-0 sm:right-6 sm:bottom-6">
            // network.scan(active)
          </span>
        </div>
      </div>

      {/* Ticker marquee at the bottom */}
      <div className="w-full mt-12 py-8 overflow-hidden">
        <div className="whitespace-nowrap flex items-center gap-16 animate-marquee">
          {Array.from({ length: 3 }).map((_, repeatIndex) => (
            <span key={repeatIndex} className="flex items-center gap-16">
              {LOGOS.map((logo) => (
                <div key={`${repeatIndex}-${logo.name}`} className="inline-flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-help w-36" title={logo.name}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-10 sm:h-20 sm:w-20 object-contain"
                  />
                </div>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
