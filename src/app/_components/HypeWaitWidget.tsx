"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const QUEUE_SIZE = 50;

export default function HypeWaitWidget() {
  const [position, setPosition] = useState(38);
  const [hashing, setHashing] = useState(false);
  const [hashDisplay, setHashDisplay] = useState("00000000");
  const [step, setStep] = useState(0);

  const triggerPoW = () => {
    if (position <= 1 || hashing) return;
    setHashing(true);
    setStep(0);
    
    let currentStep = 0;
    const compute = setInterval(() => {
      currentStep++;
      setStep(currentStep);
      setHashDisplay(Math.random().toString(16).substring(2, 10).toUpperCase());
      
      if (currentStep > 12) {
        clearInterval(compute);
        setHashing(false);
        setPosition(p => Math.max(1, p - 1));
      }
    }, 100);
  };

  const pct = 100 - ((position - 1) / QUEUE_SIZE) * 100;

  return (
    <div className="w-full flex flex-col font-mono text-left">
      {/* Header bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="size-3.5 text-[#22D3A5]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          <span className="text-xs text-slate-400 font-bold uppercase">Queue status</span>
        </div>
        <span className="text-[10px] rounded px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-[#22D3A5] font-bold">
          LIVE
        </span>
      </div>

      {/* Metrics indicator */}
      <div className="flex flex-col mb-4">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Your Position</span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-3xl font-extrabold text-slate-100">{position}</span>
          <span className="text-xs text-slate-500">/ {QUEUE_SIZE}</span>
        </div>
      </div>

      {/* Queue progress fill bar */}
      <div className="relative w-full h-1.5 bg-[#080B12] border border-indigo-500/10 rounded-full mb-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-[#22D3A5] transition-all duration-500" 
          style={{ width: `${pct}%` }} 
        />
      </div>

      {/* Grid of queue slots */}
      <div className="grid grid-cols-10 gap-1 mb-5">
        {Array.from({ length: QUEUE_SIZE }, (_, i) => {
          const slotPos = i + 1;
          const cleared = slotPos < QUEUE_SIZE - position + 1;
          const isYou = slotPos === QUEUE_SIZE - position + 1;
          return (
            <div
              key={i}
              className={`h-2.5 rounded-sm transition-all duration-300 ${
                isYou
                  ? "bg-[#22D3A5] shadow-[0_0_8px_#22D3A5] animate-pulse"
                  : cleared
                  ? "bg-indigo-500/10 border border-indigo-500/15"
                  : "bg-slate-800/40 border border-transparent"
              }`}
            />
          );
        })}
      </div>

      {/* Cryptographic hash display */}
      <div className="h-10 flex items-center justify-between px-3 py-2 rounded-lg border border-indigo-500/10 bg-[#080B12] mb-4 text-[10px] xs:text-xs">
        {hashing ? (
          <>
            <span className="text-[#22D3A5] font-semibold flex items-center gap-1.5">
              <span className="size-1.5 bg-[#22D3A5] rounded-full animate-ping" />
              COMPUTING_NONCE
            </span>
            <span className="text-slate-100 font-mono">0x{hashDisplay}</span>
            <span className="text-slate-500">iter {step}</span>
          </>
        ) : (
          <span className="text-slate-500 w-full text-center">
            {position <= 1 ? "Queue cleared! Drop accessed." : "Click below to execute client PoW..."}
          </span>
        )}
      </div>

      {/* ADVANCE CTA */}
      <button
        onClick={triggerPoW}
        disabled={hashing || position <= 1}
        className="w-full font-mono font-bold text-xs py-3 rounded-lg border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 text-slate-200 hover:text-slate-100 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
      >
        {hashing ? "COMPUTING HASH..." : position <= 1 ? "ACCESS GRANTED" : "ADVANCE IN QUEUE (PoW)"}
      </button>
    </div>
  );
}
