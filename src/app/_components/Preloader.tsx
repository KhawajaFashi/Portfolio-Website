"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Prevent browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    let exitTimeoutId: NodeJS.Timeout;
    let scrollTimeoutId: NodeJS.Timeout;

    // Ticks up to 100% in approx 1.8 - 2.2 seconds
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 12) + 6; // random steps
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        
        // Pause at 100% for 500ms
        exitTimeoutId = setTimeout(() => {
          setIsComplete(true);
          
          // Wait 850ms for slide-up exit animation to finish before unlocking scroll
          scrollTimeoutId = setTimeout(() => {
            document.body.style.overflow = "";
          }, 850);
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimeoutId);
      clearTimeout(scrollTimeoutId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-center items-center bg-[#080B12] select-none pointer-events-auto"
        >
          {/* Main Visual Content */}
          <div className="flex flex-col items-center max-w-md w-full px-6">
            
            {/* Monospaced system indicator subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#e04e00] mb-4 text-center select-none"
            >
              // INITIALIZING SYSTEMS
            </motion.div>

            {/* Premium Big Typography Name */}
            <div className="text-center mb-10 select-none">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none font-sans"
              >
                Khawaja
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none mt-2 font-sans"
              >
                Fashi<span className="text-[#e04e00] inline-block animate-pulse">.</span>
              </motion.h1>
            </div>

            {/* Custom Calligraphic Progress Line */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-48 flex flex-col items-center"
            >
              {/* Progress Track */}
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-[#e04e00] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ type: "tween", ease: "easeOut" }}
                />
              </div>

              {/* Progress Count */}
              <div className="text-[11px] font-mono text-slate-400 mt-3 tracking-[0.15em] tabular-nums select-none">
                {String(progress).padStart(3, "0")}%
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
