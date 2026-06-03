"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Point {
  x: number;
  y: number;
  age: number;
}

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.7 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);

      pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 1.0 });
      if (pointsRef.current.length > 50) {
        pointsRef.current.shift();
      }
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

    // Canvas animation loop
    let animFrameId: number;
    const tick = () => {
      const currentCanvas = canvasRef.current;
      if (currentCanvas) {
        const ctx = currentCanvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
          const points = pointsRef.current;

          if (points.length === 2) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            ctx.lineTo(points[1].x, points[1].y);
            ctx.strokeStyle = `rgba(224, 78, 0, ${0.5 * points[1].age})`;
            ctx.lineWidth = 2.0;
            ctx.stroke();
          } else if (points.length > 2) {
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Draw line using B-Spline quadratic curves connecting midpoints
            for (let i = 1; i < points.length; i++) {
              const ratio = i / points.length;
              ctx.beginPath();

              if (i === 1) {
                // First segment: straight line to first midpoint
                ctx.moveTo(points[0].x, points[0].y);
                ctx.lineTo((points[0].x + points[1].x) / 2, (points[0].y + points[1].y) / 2);
              } else if (i === points.length - 1) {
                // Last segment: curve to last point controlled by N-2
                const pPrevPrev = points[i - 2];
                const pPrev = points[i - 1];
                const pCurr = points[i];
                ctx.moveTo((pPrevPrev.x + pPrev.x) / 2, (pPrevPrev.y + pPrev.y) / 2);
                ctx.quadraticCurveTo(pPrev.x, pPrev.y, pCurr.x, pCurr.y);
              } else {
                // Middle segments: curve from mid(i-2, i-1) to mid(i-1, i) controlled by i-1
                const pPrevPrev = points[i - 2];
                const pPrev = points[i - 1];
                const pCurr = points[i];

                const startX = (pPrevPrev.x + pPrev.x) / 2;
                const startY = (pPrevPrev.y + pPrev.y) / 2;
                const endX = (pPrev.x + pCurr.x) / 2;
                const endY = (pPrev.y + pCurr.y) / 2;

                ctx.moveTo(startX, startY);
                ctx.quadraticCurveTo(pPrev.x, pPrev.y, endX, endY);
              }

              // Calligraphic tapering (thicker at cursor, thinner at tail) and decay opacity
              ctx.strokeStyle = `rgba(224, 78, 0, ${ratio * 0.95 * points[i].age})`;
              ctx.lineWidth = ratio * 5.0 + 0.5;
              ctx.stroke();
            }
          }

          // Age and filter points (slower decay rate 0.025 for a more graceful trail)
          points.forEach((p) => {
            p.age -= 0.025;
          });
          pointsRef.current = points.filter((p) => p.age > 0);
        }
      }
      animFrameId = requestAnimationFrame(tick);
    };
    animFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Trailing canvas line cursor effect */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
      />

      {/* Outer animated trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: hovered ? 46 : 26,
          height: hovered ? 46 : 26,
          borderColor: hovered ? "rgba(224, 78, 0, 0.85)" : "rgba(224, 78, 0, 0.45)",
          backgroundColor: hovered ? "rgba(224, 78, 0, 0.1)" : "rgba(224, 78, 0, 0.02)",
          boxShadow: hovered 
            ? "0 0 16px rgba(224, 78, 0, 0.25), inset 0 0 8px rgba(224, 78, 0, 0.15)"
            : "none"
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          width: hovered ? 6 : 8,
          height: hovered ? 6 : 8,
          backgroundColor: hovered ? "#e04e00" : "#e04e00",
          boxShadow: hovered ? "0 0 10px #e04e00" : "0 0 6px #e04e00",
        }}
      />
    </>
  );
}
