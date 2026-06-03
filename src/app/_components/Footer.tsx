"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative bg-black text-white pt-28 pb-18 overflow-hidden px-6 sm:px-12">
      {/* Background digital matrix Creation of Adam hands */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30 z-0" 
        style={{
          backgroundImage: "url('/hands.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          mixBlendMode: "screen"
        }}
      />

      <div className="max-w-[1240px] mx-auto w-full relative z-10">
        
        {/* Top Monospaced Metadata links grid (Mockup style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left items-start font-mono text-xs tracking-widest font-bold">
          
          {/* Column 1: Mail and Copyright */}
          <div className="flex flex-col gap-3">
            <a 
              href="mailto:fashi449623@gmail.com" 
              className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5"
            >
              fashi449623@gmail.com <ArrowUpRight className="size-3 text-[#e04e00]" />
            </a>
            <span className="text-slate-600">© 2026</span>
          </div>

          {/* Column 2: Social Media Link list */}
          <div className="flex flex-col gap-3 md:items-center">
            <div className="flex flex-col gap-3 items-start">
              <a 
                href="https://github.com/KhawajaFashi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5"
              >
                GitHub <ArrowUpRight className="size-3 text-[#e04e00]" />
              </a>
              <a 
                href="https://linkedin.com/in/KhawajaFashi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5"
              >
                LinkedIn <ArrowUpRight className="size-3 text-[#e04e00]" />
              </a>
              <a 
                href="https://x.com/KhawajaFashi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5"
              >
                X.com <ArrowUpRight className="size-3 text-[#e04e00]" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex flex-col gap-3 items-start md:items-end">
              <button 
                onClick={() => handleNav("#projects")} 
                className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
              >
                Work <ArrowUpRight className="size-3 text-[#e04e00]" />
              </button>
              <button 
                onClick={() => handleNav("#experience")} 
                className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
              >
                Experience <ArrowUpRight className="size-3 text-[#e04e00]" />
              </button>
              <button 
                onClick={() => handleNav("#about")} 
                className="text-slate-400 hover:text-white transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
              >
                Info <ArrowUpRight className="size-3 text-[#e04e00]" />
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Copyright Banner or large title display */}
        <div className="mt-28 select-none">
          <h2 className="font-serif font-black text-[10vw] sm:text-[11vw] leading-none uppercase tracking-tighter text-center flex items-baseline justify-center flex-wrap gap-x-2">
            <span className="text-white">Khawaja</span>
            <span className="italic font-normal text-slate-400">Fashi</span>
            <span className="text-[#e04e00] font-black select-none">.</span>
          </h2>
        </div>

        {/* Dynamic Back to top link */}
        {/* <div className="mt-12 border-t border-white/10 pt-6 flex justify-between items-center text-slate-500 font-mono text-[9px] uppercase tracking-wider font-bold">
          <span>Built with Next.js & Tailwind CSS v4</span>
          <button 
            onClick={handleScrollToTop} 
            className="text-slate-400 hover:text-white transition-colors cursor-pointer uppercase font-bold"
          >
            Back to Top ↑
          </button>
        </div> */}

      </div>
    </footer>
  );
}
