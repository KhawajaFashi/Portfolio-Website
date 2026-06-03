"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
}

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
  metrics: MetricItem[];
  highlights: string[];
  github: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 0,
    title: "IoT Rogue Traffic Simulator",
    category: "Cloud-Native Architectures",
    tech: ["Python", "MQTT", "Scikit-learn", "Streamlit"],
    description: "A real-time anomaly detection pipeline that flags rogue traffic patterns using a trained Random Forest classifier.",
    metrics: [
      { value: "95%+", label: "Anomaly Accuracy" },
      { value: "<300ms", label: "Model Latency" },
      { value: "350K+", label: "Trained Entries" }
    ],
    highlights: [
      "Built an end-to-end MQTT telemetry ingestion pipeline using Python to parse data across 20+ simulated IoT points.",
      "Trained a Random Forest model on 350K+ entries, optimizing classification overhead to keep processing speed under 300ms.",
      "Reduced mean detection-to-alert latency from 5 minutes to 15 seconds using live database-driven dashboards."
    ],
    github: "https://github.com/KhawajaFashi"
  },
  {
    id: 1,
    title: "HypeWait Queue Drops",
    category: "Microservices Migration",
    tech: ["Node.js", "Redis", "WebSocket", "JWT"],
    description: "Hash-based Proof-of-Work virtual queue system designed to handle heavy traffic spikes during high-demand product drops.",
    metrics: [
      { value: "Client PoW", label: "Admission Rule" },
      { value: "Stateless", label: "Redis Caching" },
      { value: "Real-time", label: "WebSocket Sync" }
    ],
    highlights: [
      "Secured queues against bot flooding by shifting computational validation costs to the client via cryptographic PoW nonces.",
      "Maintained stateless queue counts in Redis memory caches, preventing primary database locks during admission drops.",
      "Streamed live queue status numbers and entry tokens dynamically to active users over raw WebSocket tunnels."
    ],
    github: "https://github.com/KhawajaFashi"
  },
  {
    id: 2,
    title: "LiveTeamGames Grid",
    category: "Scalable Systems Design",
    tech: ["Node.js", "PostgreSQL", "WebSocket", "REST API"],
    description: "Real-time coordination platform with server-side coordinate tracking and dynamic state matching features.",
    metrics: [
      { value: "PostgreSQL", label: "State Store" },
      { value: "<50ms", label: "State Updates" },
      { value: "Match Map", label: "Grid Interface" }
    ],
    highlights: [
      "Architected server-side coordinate tracking pipelines, managing team state mutations across dynamic match coordinates.",
      "Handled high-frequency updates by optimizing PostgreSQL write queries and query parallelization routines.",
      "Designed a real-time event grid visualizer mapping dynamic coordinates directly on client browsers."
    ],
    github: "https://github.com/KhawajaFashi"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolledOffset = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolledOffset / totalScrollable));

      let index = 0;
      if (progress > 0.33 && progress <= 0.66) {
        index = 1;
      } else if (progress > 0.66) {
        index = 2;
      }

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div ref={containerRef} id="projects" className="relative bg-black text-white min-h-[300vh] w-full">
      {/* Sticky viewport wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Large visual overlapping orange circle from Stitch mockup */}
        <div 
          className="absolute -right-24 -top-24 w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] rounded-full border-[2.5px] border-[#e04e00]/30 pointer-events-none z-0" 
          style={{
            transform: "rotate(15deg)",
            background: "radial-gradient(circle, transparent 70%, rgba(224, 78, 0, 0.02) 100%)"
          }}
        />

        {/* Dynamic Desktop Grid Layout */}
        <div className="max-w-[1240px] mx-auto w-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 sm:gap-16 relative z-10 items-center">
          
          {/* Left Column: Sticky Title list */}
          <div className="flex flex-col gap-8 select-none">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-slate-500 text-xs font-bold">// 03</span>
              <span className="font-mono text-[#e04e00] text-xs uppercase tracking-widest font-extrabold">Active Projects</span>
            </div>

            {/* List of titles */}
            <div className="flex flex-col gap-6">
              {PROJECTS.map((proj, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={proj.id}
                    className={`flex flex-col gap-1 transition-all duration-500 text-left`}
                    style={{ opacity: isActive ? 1.0 : 0.2 }}
                  >
                    <span className="font-mono text-[#e04e00] text-[10px] tracking-wider uppercase font-bold">
                      {proj.category}
                    </span>
                    <h3 className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-[46px] leading-tight tracking-tight uppercase">
                      {proj.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Project Window inside mockup frame */}
          <div className="relative bg-[#111111] border border-white/10 p-6 sm:p-8 rounded-none shadow-2xl min-h-[520px] flex flex-col justify-between">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#e04e00] to-transparent" />
            
            {/* AnimatePresence swaps the contents seamlessly */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between gap-4"
              >
                <div>
                  {/* Title & Tech stack */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="font-mono text-[#e04e00] text-[10px] tracking-widest uppercase font-bold">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <p className="font-geist text-slate-400 text-sm leading-relaxed font-semibold mb-6">
                    {activeProject.description}
                  </p>

                  {/* Dynamic Metrics Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {activeProject.metrics.map((m, idx) => (
                      <div key={idx} className="border border-white/10 p-4 bg-white/[0.02] text-left">
                        <span className="font-serif font-extrabold text-white text-lg sm:text-xl block leading-tight">
                          {m.value}
                        </span>
                        <span className="font-mono uppercase text-slate-500 text-[8px] tracking-widest mt-1.5 block font-bold">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Bullet highlights */}
                  <div className="flex flex-col gap-3.5 border-t border-white/10 pt-6">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-left">
                        <span className="font-mono text-[#e04e00] text-xs font-bold mt-0.5 select-none">→</span>
                        <p className="font-geist text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="flex justify-between items-center border-t border-white/15 pt-6 mt-6">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-bold text-slate-300 hover:text-white"
                  >
                    <svg className="size-4 text-[#e04e00]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Source Repository
                    <ArrowUpRight className="size-3 text-[#e04e00]" />
                  </a>
                  <span className="font-mono text-slate-600 text-[10px] font-bold">
                    0{activeIndex + 1} / 03
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
