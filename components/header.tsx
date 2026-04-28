"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "MT-C24",
    href: "/products/mt-c24",
    badge: "Wi-Fi 7",
    description:
      "High-performance Wi-Fi 7 Client Emulator with 24 individual radios for scalable testing across all three frequency bands.",
    image: "/inst3.png",
    specs: [
      { label: "Radios", value: "24 Individual" },
      { label: "Bands", value: "2.4 / 5 / 6GHz" },
    ],
  },
  {
    title: "MT-Wave",
    href: "/products/mt-wave",
    badge: "Interference Gen",
    description:
      "Advanced Wi-Fi Interference Generator with precise dynamic power range control and realistic traffic generation.",
    image: "/Igen-1.jpg",
    specs: [
      { label: "Power Range", value: "+20 to −30dBm" },
      { label: "Accuracy", value: "±0.5dB" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-6">
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="relative h-9 w-auto">
                <Image
                  src="/logo.png"
                  alt="Wavemetrik Logo"
                  width={140}
                  height={36}
                  className="h-9 w-auto object-contain brightness-150 transition-all"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-all duration-200 font-medium rounded-full hover:bg-white/5"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  productsOpen
                    ? "text-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    : "text-neutral-400 hover:text-white hover:bg-white/5",
                )}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-300 ease-out text-neutral-500",
                    productsOpen && "rotate-180 text-white",
                  )}
                />
              </button>
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-all duration-200 font-medium rounded-full hover:bg-white/5"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-all duration-200 font-medium rounded-full hover:bg-white/5"
            >
              About
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact us
              </Link>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Background Overlay/Blur ────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500 z-30",
          productsOpen || mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => {
          setProductsOpen(false);
          setMobileOpen(false);
        }}
      />

      {/* ── Full-width Mega Menu ─────────────────────────────── */}
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
        {/* Background that covers the header area too */}
        <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Section: Context & Branding */}
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

            {/* Right Section: Product Grid */}
            <div className="col-span-9 grid grid-cols-2 gap-6">
              {products.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#0066FF]/30 transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Product Image Container: Vertical Layout for Maximum Size */}
                  <div className="relative w-full h-64 bg-white/[0.01] border-b border-white/5 overflow-hidden flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain transition-all duration-700 p-6"
                    />
                  </div>

                  {/* Product Content */}
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

                    <div className="grid grid-cols-2 gap-4 mt-auto">
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

      {/* ── Mobile Menu ─────────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden absolute top-0 left-0 w-full bg-[#050505]/98 backdrop-blur-3xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out origin-top z-40",
          mobileOpen
            ? "opacity-100 max-h-[100vh] pt-28 pb-8"
            : "opacity-0 max-h-0 py-0",
        )}
      >
        <div className="px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] px-2">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                className="flex items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em]">
                Our Products
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
            </div>
            <div className="flex flex-col gap-4">
              {products.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex flex-col rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#0066FF]/30 transition-all duration-300 overflow-hidden"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="relative w-full h-44 flex-shrink-0 overflow-hidden bg-white/[0.02] border-b border-white/5 flex items-center justify-center p-6">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={200}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-5 flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-bold text-base">
                        {p.title}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#0066FF]">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full py-4 bg-white text-black font-bold rounded-2xl text-center shadow-[0_10px_20px_-10px_rgba(255,255,255,0.2)] active:scale-[0.98] transition-transform"
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
