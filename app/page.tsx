"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Radio,
  Wifi,
  Shield,
  Zap,
  ArrowRight,
  Server,
  Layers,
  CheckCircle2,
  Activity,
  Cpu,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero Section ────────────────────────────────────────── */}
        <section className="relative overflow-hidden flex flex-col min-h-[90vh] pt-40 pb-16">
          {/* Spotlight & Grid Background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[800px] gradient-glow-brand blur-[140px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse-slow" />

          {/* Center Title */}
          <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 w-full">
            <h1 className="text-6xl sm:text-[80px] md:text-[110px] font-medium tracking-tighter leading-[0.9] text-white">
              Precise wireless testing, <br />
              <span className="gradient-text-brand italic px-2">
                made seamless
              </span>
            </h1>
          </div>

          {/* Bottom Content Area */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-12 pt-10">
              {/* Bottom Left: Subtitle & Pills */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="text-xl md:text-2xl text-white font-medium mb-6">
                  Advanced Wireless Testing. <br /> Trusted Performance.
                </h2>
                <div className="flex flex-wrap gap-4">
                  {["Wifi Testing", "Wifi Automation", "Test as a Service"].map(
                    (pill, i) => (
                      <div key={pill} className="flex items-center gap-4">
                        <span className="text-[11px] font-medium tracking-widest text-neutral-400 uppercase">
                          {pill}
                        </span>
                        {i < 2 && (
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Bottom Right: Description & CTA */}
              <div className="w-full lg:w-1/2 flex flex-col lg:items-end lg:text-right">
                <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
                  At the forefront of innovation, we provide advanced Wi-Fi
                  testing solutions for technologies like Wi-Fi 6/6E and Wi-Fi
                  7. Our platforms support scalable client emulation, MLO,
                  precise throughput measurements, interference simulation, and
                  automation integration.
                </p>
                <div className="flex items-center gap-4 justify-start lg:justify-end">
                  <Link
                    href="/products/mt-c24"
                    className="inline-flex h-12 items-center justify-center px-8 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors text-sm gap-2"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MT-C24 Section ────────────────────────────────────── */}
        <section className="py-32 border-t border-white/5 relative bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-300 uppercase border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Wi-Fi 7 Technology
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                  MT-C Series <br /> Wi-Fi 7 Client Emulator
                </h2>
                <div className="space-y-4 text-neutral-400 text-lg leading-relaxed mb-8">
                  <p>
                    The MT-C24 is a up to WiFi-7 Client Emulator designed for
                    testing and validating next-generation up to Wi-Fi 7
                    (802.11be) devices. It operates across all three Wi-Fi 7
                    frequency bands and supports up to 320MHz channel bandwidth.
                  </p>
                  <p>
                    With 24 individual radios, this emulator provides
                    comprehensive and scalable testing for Wi-Fi 7 networks,
                    including Multi-Link Operation (MLO) and Extremely High
                    Throughput (EHT).
                  </p>
                </div>

                <div className="mb-10 space-y-4">
                  <h3 className="text-white font-medium text-lg">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Supports up to Wi-Fi 7, Backward Compatible",
                      "Triband capability operates across all 3 bands 2.4, 5 and 6GHz",
                      "Complete shielded from outside interference",
                      "Supports the maximum channel bandwidth of 320MHz",
                      "Multi-link operation",
                      "Emulate real world Wi-Fi environments",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 transition-colors shrink-0 mt-0.5" />
                        <span className="text-neutral-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <h3 className="text-white font-medium text-lg mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050505] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Frequency Bands
                      </p>
                      <p className="text-white font-medium">
                        2.4GHz, 5GHz, 6GHz
                      </p>
                    </div>
                    <div className="bg-[#050505] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Max Bandwidth
                      </p>
                      <p className="text-white font-medium">320MHz</p>
                    </div>
                    <div className="bg-[#050505] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Radio Count
                      </p>
                      <p className="text-white font-medium">
                        24 Individual Radios
                      </p>
                    </div>
                    <div className="bg-[#050505] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Standards
                      </p>
                      <p className="text-white font-medium">
                        802.11be (Wi-Fi 7)
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/products/mt-c24"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.02] border border-white/10 text-white font-semibold rounded-full hover:bg-white/[0.05] transition-colors text-[15px] gap-2 group"
                >
                  Explore Client Emulator Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Right Content - Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />
                <div className="relative aspect-[4/5] rounded-none flex flex-col items-center justify-center text-center group overflow-hidden mb-6">
                  <Image
                    src="/inst3.png"
                    alt="MT-C24 Wi-Fi 7 Client Emulator"
                    fill
                    className="object-contain transition-opacity duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MT-Wave Section ────────────────────────────────────── */}
        <section className="py-32 border-t border-white/5 relative bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Content - Visual */}
              <div className="relative order-2 lg:order-1 group">
                <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />
                <div className="relative aspect-[4/5] rounded-none flex flex-col items-center justify-center text-center overflow-hidden mb-6">
                  <Image
                    src="/Igen-1.jpg"
                    alt="MT-Wave Wi-Fi Interference Generator"
                    fill
                    className="object-contain transition-opacity duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-300 uppercase border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Interference Testing
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                  MT-Wave Wi-Fi <br /> Interference Generator
                </h2>
                <div className="space-y-4 text-neutral-400 text-lg leading-relaxed mb-8">
                  <p>
                    Maximize the performance of your Wi-Fi network by tackling
                    interference head-on. Next-gen solutions like Wavemetrik
                    Technologies MT-Wave are designed to minimize Co-Channel and
                    Adjacent Channel Interference while replicating real-world
                    conditions.
                  </p>
                  <p>
                    Ensuring seamless and reliable connectivity through
                    comprehensive testing capabilities.
                  </p>
                </div>

                <div className="mb-10 space-y-4">
                  <h3 className="text-white font-medium text-lg">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Supports 2.4GHz, 5GHz, and 6GHz (All 3 bands); Most Wi-Fi channels supported",
                      "Co-channel and Adjacent Channel interference with accurate power level control",
                      "Output Power Range: +20dBm to -30dBm",
                      "Supports IEEE802.11ax/ac/n/legacy standards, including Wi-Fi 6E",
                      "Supports bandwidths: 80 MHz, 40 MHz, 20 MHz",
                      "WMM Priorities supported: Voice, Video, Best Effort, Background",
                      "Configurable: Standard, Channel, Bandwidth, MCS rate, WMM priority, IFS, Power level, Payload",
                      "Emulates realistic traffic for Wi-Fi testing and Multi-Link Operation (MLO)",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 transition-colors shrink-0 mt-0.5" />
                        <span className="text-neutral-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <h3 className="text-white font-medium text-lg mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Frequency Bands
                      </p>
                      <p className="text-white font-medium">2.4/5/6 GHz</p>
                    </div>
                    <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Power Range
                      </p>
                      <p className="text-white font-medium">+20dBm to -30dBm</p>
                    </div>
                    <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Bandwidth Support
                      </p>
                      <p className="text-white font-medium">20/40/80 MHz</p>
                    </div>
                    <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">
                        Standards
                      </p>
                      <p className="text-white font-medium">
                        802.11ax/ac/n/legacy
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/products/mt-wave"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.02] border border-white/10 text-white font-semibold rounded-full hover:bg-white/[0.05] transition-colors text-[15px] gap-2 group"
                >
                  Explore Interference Generator Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Expertise & Values ────────────────────────────────── */}
        <section className="py-32 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-300 uppercase border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Our Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
                  Driven by innovation <br /> & precision.
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  We embrace the latest advancements to deliver state-of-the-art
                  wireless test and measurement solutions for an increasingly
                  connected world.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-white font-medium hover:gap-3 transition-all gap-2 group"
                >
                  Learn more about our story
                  <ArrowRight
                    size={20}
                    className="text-neutral-500 group-hover:text-white transition-colors"
                  />
                </Link>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    Icon: Activity,
                    title: "RF Signal Analysis",
                    description:
                      "Precise measurement of radio frequency signals across a wide spectrum for thorough device validation.",
                    color: "text-blue-600",
                  },
                  {
                    Icon: Globe,
                    title: "Network Performance",
                    description:
                      "End-to-end testing of wireless communication networks to ensure optimal throughput and reliability.",
                    color: "text-blue-600",
                  },
                  {
                    Icon: Shield,
                    title: "Compliance & Certification",
                    description:
                      "Helping products meet regulatory standards and achieve certification across global markets.",
                    color: "text-blue-600",
                  },
                  {
                    Icon: Zap,
                    title: "Technology & Innovation",
                    description:
                      "Embracing latest advancements to deliver state-of-the-art wireless measurement solutions.",
                    color: "text-blue-600",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group"
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-colors",
                        item.color,
                      )}
                    >
                      <item.Icon size={24} />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section
          className="py-32 relative text-center overflow-hidden"
          style={{ backgroundColor: "#03050A" }}
        >
          {/* Broad vertical column glows — "stage spotlight" effect */}
          <div className="absolute inset-0 flex pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-full"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,50,160,0.05) 15%, rgba(0,80,210,0.09) 50%, rgba(0,50,160,0.05) 85%, transparent 100%)",
                  borderRight:
                    i < 7 ? "1px solid rgba(255,255,255,0.025)" : "none",
                }}
              />
            ))}
          </div>
          {/* Subtle center radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(0,40,130,0.08),transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Feel free to explore our offerings or contact us to learn more
              about how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors text-[15px] shadow-[0_0_30px_rgba(255,255,255,0.1)] gap-2 group"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
