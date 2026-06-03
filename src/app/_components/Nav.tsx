"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

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
    // Initial check
    handleScroll();

    // Check again after a short delay to ensure elements are mounted
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDarkSection =
    active === "projects" ||
    active === "contact" ||
    active === "experience";

  return (
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
            isDarkSection ? "text-white" : "text-black"
          }`}
        >
          <span className="text-[#e04e00] font-bold">{`>_`}</span>
          <span className="font-extrabold tracking-tight">kfa</span>
          <span className="text-slate-400 font-medium">.dev</span>
          <span className={`animate-pulse text-[#e04e00] ${isDarkSection ? "group-hover:text-white" : "group-hover:text-black"}`}>_</span>
        </button>

        {/* Capsule Navigation Links */}
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

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => handleNav("#contact")}
            className={`font-geist font-semibold text-xs border transition-all duration-200 rounded-full px-5 py-2.5 cursor-pointer shadow-sm ${
              isDarkSection
                ? "border-white/15 bg-[#111111] text-white hover:bg-white hover:text-black"
                : "border-black/15 bg-white hover:bg-black hover:text-white"
            }`}
          >
            Discover more
          </button> */}
          
          <button 
            onClick={() => handleNav("#about")}
            className={`size-9 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-sm ${
              isDarkSection
                ? "bg-[#111111] border-white/10 text-white hover:bg-white hover:text-black"
                : "bg-[#eeeeee] border-black/5 text-black hover:bg-black hover:text-white"
            }`}
            aria-label="View about section profile"
          >
            <User className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
