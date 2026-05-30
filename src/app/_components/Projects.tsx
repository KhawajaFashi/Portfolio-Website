"use client";

import { ArrowRight, ArrowUpRight, Plus, Terminal, Activity } from "lucide-react";
import IoTWidget from "./IoTWidget";
import HypeWaitWidget from "./HypeWaitWidget";
import LiveTeamGamesWidget from "./LiveTeamGamesWidget";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#080B12] text-slate-100 py-24 overflow-hidden px-6 sm:px-12">
      {/* Background visual helpers */}
      <div className="absolute inset-0 bg-indigo-500/4 pointer-events-none" />
      <div className="absolute inset-0 bg-indigo-500/6 pointer-events-none" />
      
      {/* Absolute floating decorations */}
      <div className="leading-tight select-none font-mono text-indigo-500/10 text-[10px] absolute right-16 top-16 hidden md:block text-right">
        01001001 01101111 01010100
        <br />
        0x4D515454 0x53494D
        <br />
        11010010 01100000 10110101
      </div>

      <div className="text-indigo-500/30 absolute left-8 top-12">
        <Plus className="size-4" />
      </div>
      <div className="text-indigo-500/30 absolute right-12 top-12">
        <Plus className="size-4" />
      </div>
      <div className="text-indigo-500/30 absolute left-8 bottom-12">
        <Plus className="size-4" />
      </div>
      <div className="text-indigo-500/30 absolute right-12 bottom-12">
        <Plus className="size-4" />
      </div>

      <div className="max-w-[1140px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="relative z-10 flex flex-col mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-500 text-sm leading-5 tracking-widest">
              // 03
            </span>
            <div className="bg-indigo-500/20 w-16 h-px" />
            <span className="font-mono uppercase text-indigo-400 text-xs tracking-[4.8px]">
              projects.db
            </span>
          </div>
          <div className="relative mt-2">
            <h2 className="leading-none select-none font-sans font-extrabold text-slate-100 text-6xl sm:text-8xl lg:text-[100px] tracking-tighter">
              projects
            </h2>
          </div>
        </div>

        {/* Featured Project: IoT Rogue Traffic Simulator */}
        <div className="relative z-10 mt-12 mb-16">
          <div className="relative shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/20 overflow-hidden">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent absolute inset-x-0 top-0 h-px" />
            
            {/* Grid structure: 55% Details, 45% Live Interactive Graph */}
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
              
              {/* Left detail card content */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold uppercase text-[#22D3A5] text-xs tracking-[4px]">
                    Featured Project
                  </span>
                  <div className="bg-indigo-500/15 flex-1 h-px" />
                  <span className="font-mono text-slate-500 text-xs">
                    Nov 2025
                  </span>
                </div>

                <h3 className="font-sans font-bold text-slate-100 text-3xl sm:text-5xl leading-[1.1] tracking-tight mt-6">
                  IoT Rogue Traffic
                  <br />
                  Detection Simulator
                </h3>

                <p className="font-mono text-xs sm:text-sm tracking-wide mt-4 text-[#22D3A5] flex flex-wrap gap-x-2 gap-y-1">
                  <span>Python</span> <span className="text-slate-700">/</span>
                  <span>MQTT</span> <span className="text-slate-700">/</span>
                  <span>Scikit-learn</span> <span className="text-slate-700">/</span>
                  <span>Streamlit</span>
                </p>

                <p className="max-w-[560px] leading-relaxed text-slate-400 text-sm sm:text-[15px] mt-6">
                  A real-time anomaly detection pipeline that ingests simulated IoT telemetry over MQTT and flags rogue traffic patterns using a trained Random Forest classifier. Surcovers threats in seconds, not minutes — with a live simulation and network categorization tool.
                </p>

                {/* Accuracy/Latency metrics list */}
                <div className="flex flex-wrap mt-8 gap-x-6 gap-y-4">
                  <div className="flex flex-col pr-4 border-r border-indigo-500/10">
                    <span className="leading-none font-sans font-extrabold text-slate-100 text-2xl sm:text-3xl">
                      95%<span className="text-[#22D3A5]">+</span>
                    </span>
                    <span className="font-mono uppercase text-slate-500 text-[10px] tracking-widest mt-1.5">
                      Accuracy
                    </span>
                  </div>
                  <div className="flex flex-col pr-4 border-r border-indigo-500/10">
                    <span className="leading-none font-sans font-extrabold text-slate-100 text-2xl sm:text-3xl">
                      &lt;300ms
                    </span>
                    <span className="font-mono uppercase text-slate-500 text-[10px] tracking-widest mt-1.5">
                      Latency
                    </span>
                  </div>
                  <div className="flex flex-col pr-4 border-r border-indigo-500/10">
                    <span className="leading-none font-sans font-extrabold text-slate-100 text-2xl sm:text-3xl">
                      350K+
                    </span>
                    <span className="font-mono uppercase text-slate-500 text-[10px] tracking-widest mt-1.5">
                      Records
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="leading-none font-sans font-extrabold text-slate-100 text-2xl sm:text-3xl text-[#22D3A5]">
                      15s
                    </span>
                    <span className="font-mono uppercase text-slate-500 text-[10px] tracking-widest mt-1.5">
                      Alert Time
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap mt-10 items-center gap-6">
                  <a
                    href="https://github.com/KhawajaFashi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex transition-colors font-mono text-slate-400 hover:text-slate-200 text-sm items-center gap-2"
                  >
                    View on GitHub
                    <ArrowUpRight className="size-4 text-indigo-500" />
                  </a>
                </div>
              </div>

              {/* Right Columns: Interactive Network Simulator Widget */}
              <div className="relative bg-gray-900/40 border-t lg:border-t-0 lg:border-l border-indigo-500/20 p-6 sm:p-10 flex flex-col justify-between">
                <IoTWidget />
              </div>

            </div>
          </div>
        </div>

        {/* Selected selected works grid - Two column for HypeWait & LiveTeamGames */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: HypeWait PoW Queue */}
          <div className="relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/20 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            
            <div className="flex flex-col mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold uppercase text-[#22D3A5] text-[10px] tracking-[3px]">
                  Virtual Queue Drops
                </span>
                <div className="bg-indigo-500/10 flex-1 h-px" />
                <span className="font-mono text-slate-500 text-[10px]">
                  2025
                </span>
              </div>

              <h4 className="font-sans font-bold text-slate-100 text-2xl sm:text-3xl mt-4">
                HypeWait Queue Drops
              </h4>

              <p className="font-mono text-xs tracking-wide mt-2 text-[#22D3A5] flex gap-2">
                <span>Node.js</span> <span>·</span>
                <span>Redis</span> <span>·</span>
                <span>WebSocket</span> <span>·</span>
                <span>JWT</span>
              </p>

              <p className="leading-relaxed text-slate-400 text-sm mt-4">
                Hash-based Proof-of-Work virtual queue system for high-demand product drops. Admission controlled by client-side PoW computation, preventing bot flooding without CAPTCHAs.
              </p>
            </div>

            {/* Embed Queue Widget */}
            <div className="bg-gray-900/30 rounded-xl border border-indigo-500/10 p-5 mt-auto">
              <HypeWaitWidget />
            </div>
          </div>

          {/* Card 2: LiveTeamGames Coordinates */}
          <div className="relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/20 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            
            <div className="flex flex-col mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold uppercase text-[#22D3A5] text-[10px] tracking-[3px]">
                  Multiplayer Coordination
                </span>
                <div className="bg-indigo-500/10 flex-1 h-px" />
                <span className="font-mono text-slate-500 text-[10px]">
                  2025
                </span>
              </div>

              <h4 className="font-sans font-bold text-slate-100 text-2xl sm:text-3xl mt-4">
                LiveTeamGames Grid
              </h4>

              <p className="font-mono text-xs tracking-wide mt-2 text-[#22D3A5] flex gap-2">
                <span>Node.js</span> <span>·</span>
                <span>PostgreSQL</span> <span>·</span>
                <span>WebSocket</span> <span>·</span>
                <span>REST API</span>
              </p>

              <p className="leading-relaxed text-slate-400 text-sm mt-4">
                Real-time coordination platform with server-side coordinate tracking, team state management, and a live map-grid interface for match event visualization.
              </p>
            </div>

            {/* Embed Grid Widget */}
            <div className="bg-gray-900/30 rounded-xl border border-indigo-500/10 p-5 mt-auto">
              <LiveTeamGamesWidget />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
