"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, ArrowRight, X, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const products = [
  {
    title: "Wifi Test Systems",
    href: "/products/mt-c24",
    badge: "Wi-Fi 7",
    description:
      "High-performance Wi-Fi 7 Client Emulator with 24 individual radios for scalable testing across all three frequency bands.",
    image: "/p3.png",
    specs: [
      { label: "Radios", value: "24 Individual" },
      { label: "Bands", value: "2.4 / 5 / 6GHz" },
    ],
  },
  {
    title: "MT-Wave Interference Gen",
    href: "/products/mt-wave",
    badge: "Interference Gen",
    description:
      "Advanced Wi-Fi Interference Generator with precise dynamic power range control and realistic traffic generation.",
    image: "/mt-wave.png",
    specs: [
      { label: "Power Range", value: "+20 to −30dBm" },
      { label: "Accuracy", value: "±0.5dB" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (y > lastScrollY.current + 5 && y > 80) {
        setHidden(true);
      } else if (y < lastScrollY.current - 5 || y < 30) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "pt-3",
      )}
    >
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image
                src="/logo.png"
                alt="Wavemetrik"
                width={140}
                height={36}
                className="lg:h-9 h-7 w-auto object-contain brightness-150"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-medium rounded-full hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  productsOpen
                    ? "text-white bg-white/10"
                    : "text-neutral-400 hover:text-white hover:bg-white/5",
                )}
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-300 text-neutral-500",
                    productsOpen && "rotate-180 text-white",
                  )}
                />
              </button>
            </div>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-6 py-2.5 bg-white text-black font-bold text-sm rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact us
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
              aria-label="Open navigation"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop Mega Menu ──────────────────────────────────────── */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out origin-top",
          productsOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
        onMouseEnter={() => setProductsOpen(true)}
        onMouseLeave={() => setProductsOpen(false)}
      >
        <div className="absolute inset-0 bg-[#050505]/98 backdrop-blur-3xl border-b border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-3 flex flex-col justify-between py-2">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                    Testing Hardware
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4 leading-tight">
                  Precision at every <br />
                  <span className="text-[#0066FF]">frequency.</span>
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-[200px]">
                  Professional-grade wireless testing solutions designed for
                  rigorous engineering demands.
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/5">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  Request a demo
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform text-[#0066FF]"
                  />
                </Link>
              </div>
            </div>
            <div className="col-span-9 grid grid-cols-2 gap-6">
              {products.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#0066FF]/30 transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-64 bg-white/[0.01] border-b border-white/5 overflow-hidden flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain transition-all duration-700 p-6"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-[#0066FF] uppercase tracking-widest">
                          {p.badge}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                          <ArrowRight size={16} className="text-white" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#0066FF] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        {p.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {p.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex flex-col gap-1 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                        >
                          <span className="text-[9px] font-medium text-neutral-600 uppercase tracking-wider">
                            {spec.label}
                          </span>
                          <span className="text-xs font-semibold text-neutral-300">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 z-30",
          productsOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setProductsOpen(false)}
      />

      {/* ── Mobile Sheet ────────────────────────────────────────── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-[320px] sm:w-[360px] bg-[#070707] border-l border-white/[0.06] p-0 flex flex-col"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          {/* Sheet top bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo.png"
                alt="Wavemetrik"
                width={120}
                height={30}
                className="h-5 w-auto object-contain brightness-150"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Close menu"
            >
              <X size={15} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07, ease }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all group"
                >
                  {link.label}
                  <ArrowRight
                    size={15}
                    className="text-neutral-700 group-hover:text-neutral-400 group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              </motion.div>
            ))}

            {/* Products accordion */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: navLinks.length * 0.07,
                ease,
              }}
            >
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium text-neutral-300 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                Products
                <ChevronDown
                  size={15}
                  className={cn(
                    "text-neutral-600 transition-transform duration-300",
                    mobileProductsOpen && "rotate-180 text-neutral-300",
                  )}
                />
              </button>

              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.32, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-1 pl-2 space-y-2">
                      {products.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0066FF]/25 hover:bg-white/[0.05] transition-all"
                        >
                          <div className="relative w-11 h-11 shrink-0 rounded-xl bg-[#0A0A0A] border border-white/5 overflow-hidden">
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm leading-tight">
                              {p.title}
                            </div>
                            <div className="text-[#0066FF] text-[10px] font-bold uppercase tracking-widest mt-0.5">
                              {p.badge}
                            </div>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-neutral-700 group-hover:text-neutral-400 shrink-0 transition-colors"
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Sheet footer */}
          <div className="shrink-0 border-t border-white/[0.06] px-4 py-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.38, ease }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-100 transition-colors shadow-[0_8px_20px_-8px_rgba(255,255,255,0.3)]"
              >
                Contact us
                <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.46, ease }}
              className="flex flex-col gap-2 px-1"
            >
              <div className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-300 transition-colors">
                <Mail size={13} />
                <span className="text-xs">sales@wavemetrik.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-300 transition-colors">
                <Phone size={13} />
                <span className="text-xs">+91 78996 69501</span>
              </div>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
