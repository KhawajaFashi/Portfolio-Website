"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.7 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices (where pointer: coarse matches)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Outer animated trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border mix-blend-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: hovered ? 46 : 26,
          height: hovered ? 46 : 26,
          borderColor: hovered ? "rgba(34, 211, 165, 0.85)" : "rgba(99, 102, 241, 0.45)",
          backgroundColor: hovered ? "rgba(34, 211, 165, 0.1)" : "rgba(99, 102, 241, 0.02)",
          boxShadow: hovered 
            ? "0 0 16px rgba(34, 211, 165, 0.25), inset 0 0 8px rgba(34, 211, 165, 0.15)"
            : "none"
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          width: hovered ? 6 : 8,
          height: hovered ? 6 : 8,
          backgroundColor: hovered ? "#22D3A5" : "#6366F1",
          boxShadow: hovered ? "0 0 10px #22D3A5" : "0 0 6px #6366F1",
        }}
      />
    </>
  );
}
