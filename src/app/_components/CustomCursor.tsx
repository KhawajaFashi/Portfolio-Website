"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Point {
  x: number;
  y: number;
  age: number; // 1.0 = fresh, 0.0 = expired
}

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.7 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // No custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    /* ── Canvas sizing ─────────────────────────────────────────── */
    const updateCanvasSize = () => {
      const c = canvasRef.current;
      if (!c) return;
      const dpr = window.devicePixelRatio || 1;
      // Physical pixel buffer
      c.width = window.innerWidth * dpr;
      c.height = window.innerHeight * dpr;
      // CSS size locked to logical pixels so clientX/Y coords line up
      c.style.width = `${window.innerWidth}px`;
      c.style.height = `${window.innerHeight}px`;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    /* ── Mouse tracking ────────────────────────────────────────── */
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      // Push EVERY position — dense sampling is required for a smooth ribbon.
      // (sparse points → segments too long → visible joints/dots)
      const pts = pointsRef.current;
      pts.push({ x: e.clientX, y: e.clientY, age: 1.0 });
      if (pts.length > 55) pts.shift(); // hard cap: keeps trail short
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const clickable =
        t.tagName === "BUTTON" ||
        t.tagName === "A" ||
        !!t.closest("button") ||
        !!t.closest("a") ||
        t.classList.contains("cursor-pointer") ||
        window.getComputedStyle(t).cursor === "pointer";
      setHovered(clickable);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    /* ── Draw helpers ──────────────────────────────────────────── */
    /**
     * Build a single continuous quadratic B-spline through the midpoints
     * of consecutive points. Passing through midpoints ensures C1 continuity
     * (tangent-smooth joints) — zero visible seams.
     */
    function buildSplinePath(
      ctx: CanvasRenderingContext2D,
      pts: Point[]
    ) {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i].x + pts[i + 1].x) / 2;
        const my = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
      }
      // Reach exactly the latest cursor position
      const last = pts[pts.length - 1];
      ctx.lineTo(last.x, last.y);
    }

    /* ── Animation loop ────────────────────────────────────────── */
    let animFrameId: number;

    const tick = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const dpr = window.devicePixelRatio || 1;

          // Clear full physical buffer each frame
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.scale(dpr, dpr); // draw in logical CSS-pixel space

          const pts = pointsRef.current;

          if (pts.length >= 2) {
            const tail = pts[0];
            const head = pts[pts.length - 1];

            // Safe gradient direction (avoid zero-length when cursor barely moves)
            const dx = head.x - tail.x;
            const dy = head.y - tail.y;
            const len = Math.hypot(dx, dy);

            // Gradient: fully transparent at the oldest point → solid at cursor
            const makeGradient = (alpha: number) => {
              if (len < 1) {
                return `rgba(224, 78, 0, ${alpha})`;
              }
              const g = ctx.createLinearGradient(
                tail.x, tail.y,
                head.x, head.y
              );
              g.addColorStop(0,   "rgba(224, 78, 0, 0)");
              g.addColorStop(0.5, `rgba(224, 78, 0, ${alpha * 0.35})`);
              g.addColorStop(1,   `rgba(224, 78, 0, ${alpha})`);
              return g;
            };

            ctx.lineCap  = "round";
            ctx.lineJoin = "round";

            /* Pass 1 – soft glow halo
               Wide, low-opacity stroke with blur → hides any micro-artifacts
               and gives the ribbon an organic glow. */
            ctx.save();
            ctx.shadowColor = "rgba(224, 78, 0, 0.45)";
            ctx.shadowBlur  = 8;
            buildSplinePath(ctx, pts);
            ctx.strokeStyle = makeGradient(0.55);
            ctx.lineWidth   = 6;
            ctx.stroke();
            ctx.restore();

            /* Pass 2 – sharp bright core
               Thin, high-opacity stroke on top → crisp luminous center line. */
            buildSplinePath(ctx, pts);
            ctx.strokeStyle = makeGradient(0.92);
            ctx.lineWidth   = 1.8;
            ctx.stroke();
          }

          // Age every point; remove expired ones
          pts.forEach((p) => (p.age -= 0.038));
          pointsRef.current = pts.filter((p) => p.age > 0);
        }
      }
      animFrameId = requestAnimationFrame(tick);
    };
    animFrameId = requestAnimationFrame(tick);

    /* ── Cleanup ───────────────────────────────────────────────── */
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Canvas — always in DOM, sized on mount */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed z-[9999]"
        style={{ top: 0, left: 0 }}
      />

      {/* Outer ring — springs toward cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width:  hovered ? 46 : 26,
          height: hovered ? 46 : 26,
          borderColor:     hovered ? "rgba(224, 78, 0, 0.85)" : "rgba(224, 78, 0, 0.45)",
          backgroundColor: hovered ? "rgba(224, 78, 0, 0.1)"  : "rgba(224, 78, 0, 0.02)",
          boxShadow: hovered
            ? "0 0 16px rgba(224, 78, 0, 0.25), inset 0 0 8px rgba(224, 78, 0, 0.15)"
            : "none",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Precise inner dot — tracks cursor exactly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          width:           hovered ? 4 : 8,
          height:          hovered ? 6 : 8,
          backgroundColor: "#e04e00",
          boxShadow:       hovered ? "0 0 10px #e04e00" : "0 0 6px #e04e00",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
