"use client";

export default function About() {
  return (
    <section id="about" className="relative bg-[#f9f9f9] text-black py-28 overflow-hidden px-6 sm:px-12 border-t border-black/5">
      {/* Decorative vertical columns overlay */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-[1240px] mx-auto w-full px-6 sm:px-12">
        <div className="w-px h-full bg-black/[0.03]" />
        <div className="w-px h-full bg-black/[0.03]" />
        <div className="w-px h-full bg-black/[0.03]" />
        <div className="w-px h-full bg-black/[0.03]" />
      </div>

      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-baseline gap-3 mb-12">
          <span className="font-mono text-slate-500 text-xs font-bold">// 01</span>
          <span className="font-mono text-[#e04e00] text-xs uppercase tracking-widest font-extrabold">About</span>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
          
          {/* Left Column: Portrait Photo */}
          <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-white p-3 shadow-md">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/avatar_optimized.jpg"
                alt="Khawaja Fashi"
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4]"
              />
              <div className="absolute bottom-4 left-4 bg-[#e04e00] text-white font-mono text-[9px] tracking-[2.5px] uppercase font-bold py-2 px-4.5 rounded shadow-lg">
                BACKEND ENGINEER — 2026
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="flex flex-col gap-6">
            <h2 className="font-serif font-extrabold text-black text-3xl sm:text-5xl leading-tight tracking-tight">
              2+ years building robust backend architectures.
            </h2>
            
            <p className="leading-relaxed font-geist text-slate-600 text-sm sm:text-base md:text-lg font-medium">
              Operating with full autonomy across remote and asynchronous environments, I specialize in building high-performance systems in Node.js, Python, and PostgreSQL.
            </p>

            {/* Light gray highlight block */}
            <div className="bg-[#eeeeee] border-l-4 border-[#e04e00] p-5 rounded-r-xl">
              <p className="font-serif italic text-[#e04e00] text-sm sm:text-base md:text-[17px] leading-relaxed">
                "Slashed backend API response time from ~450ms to under 120ms by rewriting legacy N+1 queries."
              </p>
            </div>

            {/* Core Philosophy */}
            <div className="bg-[#eeeeee] border border-black/5 rounded-2xl p-6 shadow-sm">
              <span className="font-mono text-slate-400 text-[9px] tracking-widest uppercase font-bold block mb-2">
                // Core Philosophy
              </span>
              <p className="font-geist text-xs sm:text-sm leading-relaxed text-slate-700 font-bold uppercase tracking-wide">
                Expert in structured written documentation and cross-timezone collaboration. CLEAN CODE + EXPLICIT COMMUNICATION.
              </p>
            </div>

            {/* Location Status */}
            <div className="flex items-center gap-2.5 mt-2">
              <span className="relative flex w-2 h-2">
                <span className="inline-flex animate-ping opacity-75 rounded-full bg-[#e04e00] absolute w-full h-full" />
                <span className="relative inline-flex rounded-full bg-[#e04e00] w-2 h-2" />
              </span>
              <span className="font-mono text-slate-500 text-[10px] tracking-[2.5px] uppercase font-bold">
                CURRENTLY BASED IN ISLAMABAD, PAKISTAN
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
