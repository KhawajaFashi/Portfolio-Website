"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "experience", "experience-light", "projects", "contact"];
      let currentActive = "hero";
      const viewportCenter = window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    const timer = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const isDarkSection =
    active === "projects" ||
    active === "contact" ||
    active === "experience";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDarkSection
              ? "bg-black/85 backdrop-blur-md border-b border-white/10 py-3"
              : "bg-[#f9f9f9]/85 backdrop-blur-md border-b border-black/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className={`font-mono text-sm leading-5 flex items-center gap-1 group cursor-pointer transition-colors duration-300 ${
              isDarkSection || menuOpen ? "text-white" : "text-black"
            }`}
          >
            <span className="text-[#e04e00] font-bold">{`>_`}</span>
            <span className="font-extrabold tracking-tight">kfa</span>
            <span className="text-slate-400 font-medium">.dev</span>
            <span className="animate-pulse text-[#e04e00]">_</span>
          </button>

          {/* Desktop capsule nav */}
          <nav className={`hidden md:flex items-center border rounded-full p-1 shadow-sm transition-colors duration-300 ${
            isDarkSection
              ? "bg-[#111111] border-white/10"
              : "bg-[#eeeeee] border-black/5"
          }`}>
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive =
                active === href.slice(1) ||
                (href === "#experience" && active === "experience-light");
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`font-geist font-medium text-xs rounded-full px-5 py-2.5 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isDarkSection
                        ? "bg-white text-black shadow-sm"
                        : "bg-black text-white shadow-sm"
                      : isDarkSection
                      ? "text-slate-400 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop: profile icon */}
            <button
              onClick={() => handleNav("#about")}
              className={`hidden md:flex size-9 rounded-full border items-center justify-center transition-all cursor-pointer shadow-sm ${
                isDarkSection
                  ? "bg-[#111111] border-white/10 text-white hover:bg-white hover:text-black"
                  : "bg-[#eeeeee] border-black/5 text-black hover:bg-black hover:text-white"
              }`}
              aria-label="View about section"
            >
              <User className="size-4" />
            </button>

            {/* Mobile: burger / close */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden size-9 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-sm ${
                menuOpen
                  ? "bg-[#e04e00] border-[#e04e00] text-white"
                  : isDarkSection
                  ? "bg-[#111111] border-white/10 text-white"
                  : "bg-[#eeeeee] border-black/5 text-black"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-2 md:hidden"
          >
            {/* Accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#e04e00] to-transparent" />
            {/* Decorative circle */}
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border border-[#e04e00]/15 pointer-events-none translate-x-1/2 translate-y-1/2" />

            {/* Nav links */}
            <nav className="flex flex-col items-center gap-1 w-full px-8">
              {NAV_ITEMS.map(({ label, href }, i) => {
                const isActive =
                  active === href.slice(1) ||
                  (href === "#experience" && active === "experience-light");
                return (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    onClick={() => handleNav(href)}
                    className={`w-full text-center font-geist font-black text-4xl py-4 uppercase tracking-tight transition-colors duration-200 cursor-pointer border-b border-white/5 last:border-0 ${
                      isActive ? "text-[#e04e00]" : "text-white hover:text-[#e04e00]"
                    }`}
                  >
                    {label}
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom: CV link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="font-geist font-bold text-xs uppercase tracking-widest border border-white/20 text-white px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-all"
              >
                View CV
              </a>
              <span className="font-mono text-slate-600 text-[10px] tracking-widest uppercase">
                khfa.dev
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
