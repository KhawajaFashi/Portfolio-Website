"use client";

import { useState, useEffect } from "react";
import { User, Briefcase, Code, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Code },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    const heroEl = document.querySelector("#hero");
    if (heroEl) observer.observe(heroEl);

    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080B12]/80 backdrop-blur-md border-b border-indigo-500/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="font-mono text-slate-100 text-sm leading-5 flex items-center gap-1 group cursor-pointer"
        >
          <span className="text-[#22D3A5]">{`>_`}</span>
          <span className="font-semibold">kfa</span>
          <span className="text-indigo-400">.dev</span>
          <span className="animate-pulse text-[#22D3A5] group-hover:text-indigo-400">_</span>
        </button>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`font-mono transition-all duration-200 rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                  isActive
                    ? "bg-indigo-500/10 text-slate-100 font-medium border border-indigo-500/20"
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-500/5 border border-transparent"
                }`}
              >
                <Icon className={`size-3.5 sm:size-4 ${isActive ? "text-[#22D3A5]" : "text-slate-500"}`} />
                <span className="hidden xs:inline">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
