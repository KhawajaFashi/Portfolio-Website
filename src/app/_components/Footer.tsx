"use client";

import { useState } from "react";
import { Copy, Check, Mail, Terminal, ArrowUpRight, Loader2, XCircle } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("fashi449623@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to transmit message");
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error("Form transmission error:", err);
      setError(err.message || "TRANSMISSION_FAILURE");
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="relative bg-[#080B12] text-slate-100 py-24 overflow-hidden px-6 sm:px-12">
      <div className="absolute inset-0 bg-indigo-500/4 pointer-events-none" />
      <div className="absolute inset-0 bg-indigo-500/6 pointer-events-none opacity-40" />

      {/* Floating absolute markers */}
      <div className="text-[oklch(0.7_0.18_280)]/20 select-none text-xl absolute left-[45%] top-24 pointer-events-none">
        +
      </div>
      <div className="text-[oklch(0.7_0.18_280)]/20 select-none text-xl absolute left-12 bottom-48 pointer-events-none">
        +
      </div>
      <div className="leading-none select-none rotate-90 origin-center font-mono text-indigo-500/10 text-[100px] absolute right-16 top-48 hidden lg:block pointer-events-none">
        01001
      </div>
      <div className="select-none font-mono text-indigo-500/15 text-[10px] sm:text-[11px] tracking-widest absolute left-16 bottom-16 hidden md:block">
        0x4F2A · 0x91BC · 0xDE03 · 0x7A11
      </div>

      <div className="max-w-[820px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="relative flex flex-col mb-12">
          <div className="items-baseline flex mb-2 gap-3">
            <span className="font-mono text-slate-500 text-xs tracking-[3.2px]">
              // 04
            </span>
            <span className="font-mono text-[#22D3A5] text-xs tracking-[3.2px]">
              contact
            </span>
          </div>
          <div className="relative mb-6">
            <span className="font-sans leading-none select-none pointer-events-none font-bold text-slate-100/10 text-6xl sm:text-8xl lg:text-[130px] tracking-tighter absolute -left-1 -top-8 sm:-top-16">
              contact
            </span>
            <h3 className="relative font-sans font-bold text-slate-100 text-3xl sm:text-[52px] sm:leading-[55px] tracking-tight mt-6">
              Let&apos;s build something that doesn&apos;t break.
            </h3>
            <p className="relative leading-relaxed text-slate-500 text-sm sm:text-base mt-4">
              Open to backend internships, cybersecurity research collaborations, and latency-critical systems engineering problems.
            </p>
          </div>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Card 1: Email */}
          <div className="group relative rounded-xl bg-[#0D1117]/80 border border-indigo-500/15 p-5 overflow-hidden transition-all duration-300">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            <div className="flex items-center gap-3.5">
              <div className="size-9 rounded-lg bg-[#080B12] border border-indigo-500/20 flex justify-center items-center shrink-0">
                <Mail className="size-4 text-indigo-400" />
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="font-mono uppercase text-slate-500 text-[9px] tracking-wider">
                  email
                </span>
                <span className="truncate font-mono text-slate-200 text-xs font-semibold">
                  fashi449623@gmail.com
                </span>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="font-mono rounded-lg bg-[#080B12] border border-indigo-500/20 hover:border-indigo-500/40 text-slate-300 hover:text-slate-100 text-[10px] py-1.5 mt-4 flex items-center justify-center gap-1.5 w-full transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-[#22D3A5]" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  Copy Address
                </>
              )}
            </button>
          </div>

          {/* Card 2: Github */}
          <div className="group relative rounded-xl bg-[#0D1117]/80 border border-indigo-500/15 p-5 overflow-hidden transition-all duration-300">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            <div className="flex items-center gap-3.5">
              <div className="size-9 rounded-lg bg-[#080B12] border border-indigo-500/20 flex justify-center items-center shrink-0">
                {/* Inline SVG GitHub Icon */}
                <svg className="size-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="font-mono uppercase text-slate-500 text-[9px] tracking-wider">
                  github
                </span>
                <span className="truncate font-mono text-slate-200 text-xs font-semibold">
                  github.com/KhawajaFashi
                </span>
              </div>
            </div>
            <a
              href="https://github.com/KhawajaFashi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono rounded-lg bg-[#080B12] border border-indigo-500/20 hover:border-indigo-500/40 text-slate-300 hover:text-slate-100 text-[10px] py-1.5 mt-4 flex items-center justify-center gap-1 w-full transition-all cursor-pointer"
            >
              Visit
              <ArrowUpRight className="size-3 text-indigo-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Card 3: Linkedin */}
          <div className="group relative rounded-xl bg-[#0D1117]/80 border border-indigo-500/15 p-5 overflow-hidden transition-all duration-300">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            <div className="flex items-center gap-3.5">
              <div className="size-9 rounded-lg bg-[#080B12] border border-indigo-500/20 flex justify-center items-center shrink-0">
                {/* Inline SVG LinkedIn Icon */}
                <svg className="size-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="font-mono uppercase text-slate-500 text-[9px] tracking-wider">
                  linkedin
                </span>
                <span className="truncate font-mono text-slate-200 text-xs font-semibold">
                  linkedin.com/in/KhawajaFashi
                </span>
              </div>
            </div>
            <a
              href="https://linkedin.com/in/KhawajaFashi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono rounded-lg bg-[#080B12] border border-indigo-500/20 hover:border-indigo-500/40 text-slate-300 hover:text-slate-100 text-[10px] py-1.5 mt-4 flex items-center justify-center gap-1 w-full transition-all cursor-pointer"
            >
              Visit
              <ArrowUpRight className="size-3 text-indigo-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Card 4: X (Twitter) */}
          <div className="group relative rounded-xl bg-[#0D1117]/80 border border-indigo-500/15 p-5 overflow-hidden transition-all duration-300">
            <div className="bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent absolute inset-x-0 top-0 h-px" />
            <div className="flex items-center gap-3.5">
              <div className="size-9 rounded-lg bg-[#080B12] border border-indigo-500/20 flex justify-center items-center shrink-0">
                <svg className="size-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="font-mono uppercase text-slate-500 text-[9px] tracking-wider">
                  x / twitter
                </span>
                <span className="truncate font-mono text-slate-200 text-xs font-semibold">
                  x.com/KhawajaFashi
                </span>
              </div>
            </div>
            <a
              href="https://x.com/KhawajaFashi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono rounded-lg bg-[#080B12] border border-indigo-500/20 hover:border-indigo-500/40 text-slate-300 hover:text-slate-100 text-[10px] py-1.5 mt-4 flex items-center justify-center gap-1 w-full transition-all cursor-pointer"
            >
              Visit
              <ArrowUpRight className="size-3 text-indigo-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

        </div>

        {/* Secure Channel Contact Form */}
        <div className="relative rounded-2xl bg-[#0D1117]/80 backdrop-blur-md border border-indigo-500/15 p-6 sm:p-8 overflow-hidden">
          <div className="bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent absolute inset-x-0 top-0 h-px" />
          <div className="bg-gradient-to-b from-[#6366F1]/[0.04] to-transparent pointer-events-none absolute inset-x-0 top-0 h-16" />
          
          <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-slate-500 text-[10px] tracking-wider">
                  name<span className="text-indigo-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-transparent text-slate-200 placeholder:text-slate-700 text-sm py-2 border-b border-slate-800 focus:border-indigo-500 focus:outline-none transition-colors w-full"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-slate-500 text-[10px] tracking-wider">
                  email<span className="text-indigo-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-transparent text-slate-200 placeholder:text-slate-700 text-sm py-2 border-b border-slate-800 focus:border-indigo-500 focus:outline-none transition-colors w-full"
                />
              </div>

            </div>

            {/* Message field */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-slate-500 text-[10px] tracking-wider">
                message<span className="text-indigo-400">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell me about the problem you're solving..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="bg-transparent text-slate-200 placeholder:text-slate-700 text-sm py-2 border-b border-slate-800 focus:border-indigo-500 focus:outline-none transition-colors w-full resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading || submitted}
              className={`group relative transition-all duration-300 font-mono font-bold text-slate-100 text-xs uppercase tracking-widest w-full h-12 overflow-hidden rounded-lg border cursor-pointer ${
                error 
                  ? "bg-red-950/80 border-red-500/30 hover:bg-red-900/80 text-red-200" 
                  : submitted 
                  ? "bg-[#0F172A] border-[#22D3A5]/30 text-[#22D3A5]" 
                  : "bg-indigo-600 hover:bg-indigo-500 border-indigo-500/25 disabled:opacity-40 disabled:pointer-events-none"
              }`}
            >
              <span className="-translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 absolute inset-0 group-hover:translate-x-full" />
              <span className="relative flex justify-center items-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-indigo-400" />
                    TRANSMITTING()
                  </>
                ) : submitted ? (
                  <>
                    <Check className="size-4 text-[#22D3A5] animate-bounce" />
                    TRANSMISSION_SUCCESS()
                  </>
                ) : error ? (
                  <>
                    <XCircle className="size-4 text-red-500 animate-pulse" />
                    TRANSMISSION_FAILED()
                  </>
                ) : (
                  <>
                    <Terminal className="size-4" />
                    SEND_MESSAGE()
                  </>
                )}
              </span>
            </button>
          </form>
        </div>

        {/* Bottom banner */}
        <div className="flex flex-col sm:flex-row mt-12 items-center justify-between gap-4 font-mono text-[10px] text-slate-500 border-t border-indigo-500/10 pt-6">
          <span>© 2026 · kfa.dev</span>
          <span>Built with Next.js & Tailwind CSS v4</span>
        </div>

      </div>
    </footer>
  );
}
