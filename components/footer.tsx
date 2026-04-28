"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FadeUp, FadeInStagger, FadeInItem } from "@/components/motion";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const solutions = [
  { label: "Wifi Test Systems", tag: "Wi-Fi 7", href: "/products/mt-c24" },
  { label: "MT-Wave", tag: "Interference Gen", href: "/products/mt-wave" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] overflow-hidden">
      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.07),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Statement section ───────────────────────── */}
        <FadeUp>
          <div className="pt-20 sm:pt-24 pb-14 sm:pb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 border-b border-white/[0.05]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.25em]">
                  Wavemetrik Technologies
                </span>
              </div>
              <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] font-medium tracking-tighter text-white leading-[1.05]">
                Precision at every{" "}
                <span className="gradient-text-brand italic">frequency.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end lg:shrink-0">
              <p className="text-neutral-500 text-sm leading-relaxed max-w-[260px] lg:text-right">
                Advanced wireless testing for the next generation of Wi-Fi
                technology.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-neutral-200 hover:-translate-y-0.5 active:translate-y-0 transition-all group w-fit"
              >
                Get in touch
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* ── Link grid ──────────────────────────────── */}
        <div className="py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/[0.05]">
          {/* Brand + contact */}
          <FadeUp delay={0.05} className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/footer.png"
                alt="Wavemetrik"
                width={140}
                height={32}
                className="h-8 w-auto object-contain brightness-125 group-hover:brightness-150 transition-all"
              />
            </Link>
            <div className="space-y-4">
              <a
                href="mailto:sales@wavemetrik.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all">
                  <Mail
                    size={13}
                    className="text-neutral-500 group-hover:text-blue-400 transition-colors"
                  />
                </div>
                <span className="text-[13px] text-neutral-500 group-hover:text-white transition-colors leading-snug">
                  sales@wavemetrik.com
                </span>
              </a>
              <a
                href="tel:+917899669501"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all">
                  <Phone
                    size={13}
                    className="text-neutral-500 group-hover:text-blue-400 transition-colors"
                  />
                </div>
                <span className="text-[13px] text-neutral-500 group-hover:text-white transition-colors">
                  +91 78996 69501
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-neutral-600" />
                </div>
                <span className="text-[13px] text-neutral-600 leading-snug">
                  Northstar, Galleria Ambedkar Colony
                  <br />
                  Yelahanka, Bangalore 560064
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Solutions (product cards) */}
          <FadeUp delay={0.1} className="space-y-5">
            <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.22em]">
              Solutions
            </h4>
            <div className="space-y-3">
              {solutions.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-[#0066FF]/25 hover:bg-white/[0.05] transition-all group"
                >
                  <div>
                    <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors block">
                      {p.label}
                    </span>
                    <span className="text-[10px] text-[#0066FF] uppercase tracking-widest font-bold mt-0.5 block">
                      {p.tag}
                    </span>
                  </div>
                  <ArrowRight
                    size={13}
                    className="text-neutral-700 group-hover:text-neutral-400 group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>
          </FadeUp>

          {/* Company */}
          <FadeUp delay={0.15} className="space-y-5">
            <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.22em]">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-neutral-500 hover:text-white transition-colors duration-200"
                  >
                    <span className="block w-0 group-hover:w-3 h-px bg-[#0066FF] transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Newsletter / status card */}
          <FadeUp delay={0.2} className="space-y-5">
            <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.22em]">
              Stay Updated
            </h4>
            <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] space-y-4">
              <p className="text-[13px] text-neutral-500 leading-relaxed">
                Receive the latest insights on Wi-Fi testing and RF engineering.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-2.5"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 text-white font-semibold text-xs rounded-xl transition-all uppercase tracking-widest"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeUp>
        </div>

        {/* ── Bottom bar ─────────────────────────────── */}
        <div className="py-7 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-neutral-700 text-xs tracking-wide">
            © 2024 Wavemetrik Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <Link
              href="/privacy"
              className="text-[11px] text-neutral-700 hover:text-neutral-400 uppercase tracking-widest transition-colors"
            >
              Privacy
            </Link>
            <div className="w-px h-3 bg-white/10" />
            <Link
              href="/terms"
              className="text-[11px] text-neutral-700 hover:text-neutral-400 uppercase tracking-widest transition-colors"
            >
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {[
              { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
              { label: "X / Twitter", Icon: XIcon, href: "#" },
            ].map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-white/[0.07] flex items-center justify-center text-neutral-600 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant faint watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        aria-hidden
      >
        <p className="text-[clamp(5rem,16vw,14rem)] font-bold tracking-[-0.04em] text-white/[0.018] uppercase text-center leading-none translate-y-[40%]">
          WAVEMETRIK
        </p>
      </div>
    </footer>
  );
}
