"use client";

import { ArrowUpRight, Copy } from "lucide-react";

const LOGOS = [
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Slack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" },
  { name: "Jira", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "Notion", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative bg-[#f9f9f9] bg-grid-lines text-black min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-0"
    >
      {/* Decorative vertical columns overlay */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1240px] mx-auto w-full px-6 sm:px-12">
        <div className="w-px h-full bg-black/[0.03]" />
        <div className="w-px h-full bg-black/[0.03]" />
        <div className="w-px h-full bg-black/[0.03]" />
        <div className="w-px h-full bg-black/[0.03]" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-12">
        {/* Main Header Display */}
        <h1 className="font-geist font-black text-black text-5xl sm:text-7xl md:text-8xl lg:text-[105px] leading-[0.95] tracking-tighter uppercase select-none">
          Khawaja
          <br />
          Fashi
        </h1>

        {/* Dynamic Minimal Sub-Badge */}
        <div className="my-8 py-2.5 border-y border-black/10 w-full max-w-[340px] flex items-center justify-center">
          <span className="font-mono text-slate-500 text-[10px] tracking-[4px] uppercase font-bold">
            Independent Backend Architect
          </span>
        </div>

        {/* Precise Bio Statement */}
        <p className="max-w-xl leading-relaxed text-slate-600 text-sm sm:text-base font-geist font-medium">
          Architected Redis-based caching layers independently, reducing database read load by 45%.
          Focused on high-performance Node.js, Python, and PostgreSQL systems with zero micro-management.
        </p>

        {/* Pill Actions */}
        <div className="flex flex-wrap justify-center mt-10 gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollToSection("projects")}
            className="font-geist font-bold bg-[#e04e00] hover:bg-black text-white text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all cursor-pointer shadow-md"
          >
            View My Work
          </button>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-geist font-bold text-black text-xs uppercase tracking-widest border border-black/15 bg-white hover:bg-black hover:text-white px-8 py-4 rounded-full transition-all cursor-pointer shadow-sm"
          >
            View My CV
          </a>
        </div>
      </div>

      {/* Left Side Contact Links */}
      <div className="hidden lg:flex absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 flex-col gap-5 items-start z-20 select-none">
        <span className="font-mono text-[8px] uppercase tracking-widest text-slate-400 font-bold">// Link Gateway</span>
        
        {/* Email Link */}
        <div className="relative group flex items-center">
          <a
            href="mailto:fashi449623@gmail.com"
            title="Click to copy to clipboard"
            onClick={() => {
              navigator.clipboard.writeText("fashi449623@gmail.com");
            }}
            className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate-600 hover:text-[#e04e00] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Email <Copy  className="size-3 text-[#e04e00]" />
          </a>
          <span className="absolute left-full ml-4 opacity-0 scale-95 translate-x-[-8px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-black border border-white/10 text-white text-[9px] font-mono tracking-widest py-1.5 px-3 shadow-lg z-30">
            fashi449623@gmail.com
          </span>
        </div>

        {/* LinkedIn Link */}
        <div className="relative group flex items-center">
          <a
            href="https://www.linkedin.com/in/khawaja-fashi-ud-din-abdullah-859b7a23b/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate-600 hover:text-[#e04e00] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            LinkedIn <ArrowUpRight className="size-3 text-[#e04e00]" />
          </a>
          <span className="absolute left-full ml-4 opacity-0 scale-95 translate-x-[-8px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-black border border-white/10 text-white text-[9px] font-mono tracking-widest py-1.5 px-3 shadow-lg z-30">
            in/khawaja-fashi-ud-din-abdullah
          </span>
        </div>

        {/* X.com Link */}
        <div className="relative group flex items-center">
          <a
            href="https://x.com/KhawajaFashi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase font-bold text-slate-600 hover:text-[#e04e00] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            X.com <ArrowUpRight className="size-3 text-[#e04e00]" />
          </a>
          <span className="absolute left-full ml-4 opacity-0 scale-95 translate-x-[-8px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-black border border-white/10 text-white text-[9px] font-mono tracking-widest py-1.5 px-3 shadow-lg z-30">
            @KhawajaFashi
          </span>
        </div>
      </div>

      {/* Marquee Ticker strip at the bottom */}
      <div className="w-full py-5 border-t border-black/10 overflow-hidden bg-[#eeeeee] relative z-10">
        <div className="whitespace-nowrap flex items-center gap-16 animate-marquee">
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            <span key={repeatIndex} className="flex items-center gap-16 font-mono text-xs tracking-[3px] uppercase font-bold text-slate-600">
              {LOGOS.map((logo) => (
                <div key={`${repeatIndex}-${logo.name}`} className="inline-flex items-center gap-3">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-6 w-6 object-contain filter grayscale"
                  />
                  <span>{logo.name}</span>
                </div>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
