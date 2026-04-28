"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  FadeUp,
  FadeInStagger,
  FadeInItem,
  ScaleIn,
} from "@/components/motion";
import { motion } from "motion/react";
import {
  Radio,
  Wifi,
  Shield,
  Zap,
  Activity,
  ArrowRight,
  Download,
  Server,
  Layers,
  Cpu,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

// ── MT-C24 Page ───────────────────────────────────────────────────────

function MTC24Product() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#0066FF] selection:text-white font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="pt-36 sm:pt-44 pb-20 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.15)_0%,transparent_65%)]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08)_0%,transparent_60%)] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="inline-flex mb-8 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-400 uppercase border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              Wi-Fi 7 Testing Solution
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium tracking-tight leading-[1.05] mb-8 text-white max-w-5xl mx-auto"
            >
              MT-C24 Wi-Fi 7 <br />
              <span className="text-neutral-500">Client Emulator</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              The MT-C24 is a up to WiFi-7 Client Emulator designed for testing
              and validating next-generation up to Wi-Fi 7 (802.11be) devices.
              With 24 individual radios, this emulator provides comprehensive
              and scalable testing for Wi-Fi 7 networks, including Multi-Link
              Operation (MLO) and Extremely High Throughput (EHT).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold text-[15px] rounded-2xl hover:bg-neutral-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Download size={18} />
                Get Datasheet
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/[0.02] border border-[#1A1A1A] text-white font-semibold text-[15px] rounded-2xl hover:bg-[#111] transition-colors flex items-center justify-center gap-2 group">
                Contact Sales
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="inline-flex items-center gap-4 px-6 py-3 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#0066FF]/15 flex items-center justify-center">
                <Radio className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">24 Individual Radios</p>
                <p className="text-neutral-400 text-sm">
                  Comprehensive Wi-Fi 7 testing across all bands
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Equipment Gallery ──────────────────────────────────── */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { src: "/p1.png", label: "Setup 1" },
              { src: "/p2.png", label: "Setup 2" },
              { src: "/p3.png", label: "Setup 3" },
              { src: "/p4.png", label: "Setup 4" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-[32px] bg-[#0A0A0A] border border-[#1A1A1A] overflow-hidden group hover:border-[#0066FF]/25 hover:bg-[#111] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-contain p-2 opacity-95 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.01] brightness-150"
                />
                <div className="absolute bottom-6 left-6 right-6 flex justify-center">
                  <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs text-neutral-300 font-medium tracking-wide uppercase">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Features ───────────────────────────────────────── */}
        <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Key Features
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Industry-leading specifications for rigorous testing.
              </p>
            </div>
          </FadeUp>
          <FadeInStagger
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
            stagger={0.1}
          >
            {[
              {
                Icon: Wifi,
                title: "Wi-Fi 7 Support",
                desc: "Up to Wi-Fi 7 with full backward compatibility to Wi-Fi 6/6E/5 and legacy standards.",
              },
              {
                Icon: Layers,
                title: "Triband Capability",
                desc: "Operates simultaneously across 2.4GHz, 5GHz, and 6GHz frequency bands.",
              },
              {
                Icon: Shield,
                title: "Complete Shielding",
                desc: "Fully shielded enclosure isolates the device under test from external RF interference.",
              },
              {
                Icon: Zap,
                title: "320MHz Bandwidth",
                desc: "Supports the maximum Wi-Fi 7 channel bandwidth of 320MHz for peak throughput.",
              },
            ].map((feat, i) => (
              <FadeInItem key={i}>
                <div className="p-8 sm:p-10 rounded-[32px] bg-[#0A0A0A] border border-[#1A1A1A] flex gap-5 sm:gap-6 group hover:bg-[#111] hover:border-[#0066FF]/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-all">
                    <feat.Icon className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>

        {/* ── System Configurations ──────────────────────────────── */}
        <section className="py-24 bg-[#0A0A0A] border-y border-[#1A1A1A] relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] blur-[140px] rounded-full pointer-events-none -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                System Configurations
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Scalable test systems tailored to your exact requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: "MT-Sys-1",
                  radios: "24 radios",
                  title: "Performance Test System",
                  features: [
                    "Rate vs Range",
                    "Rate vs Orientation",
                    "Multi-Link Operation",
                    "Co-Channel Interference",
                    "Adjacent Channel Interference",
                    "Preamble Puncturing",
                    "Multi-RU",
                    "OFDMA",
                    "Rx Sensitivity",
                    "Throughput vs Channels",
                    "Multi-Band Throughput",
                    "Sniffing",
                  ],
                },
                {
                  id: "MT-Sys-2",
                  radios: "48 radios",
                  title: "Performance Test System",
                  features: [
                    "All MT-Sys-1 features",
                    "Enhanced scalability",
                    "Higher capacity testing",
                  ],
                },
                {
                  id: "MT-Sys-3",
                  radios: "96 radios",
                  title: "Performance Test System",
                  features: [
                    "All MT-Sys-1 features",
                    "Maximum scalability",
                    "Enterprise-grade testing",
                  ],
                },
                {
                  id: "MT-Sys-4",
                  radios: "24 radios",
                  title: "TR-398, Roaming and Mesh",
                  features: [
                    "802.11kvr",
                    "Band Steering",
                    "Roaming",
                    "Mixed Mode Clients",
                    "Airtime Fairness",
                    "Mesh",
                    "Real Time Traffic",
                  ],
                },
                {
                  id: "MT-Sys-5",
                  radios: "48 radios",
                  title: "Performance, Roaming & Mesh",
                  features: [
                    "All MT-Sys-1 and MT-Sys-4 features",
                    "Comprehensive testing suite",
                  ],
                },
              ].map((sys) => (
                <div
                  key={sys.id}
                  className="relative bg-[#050505] rounded-[32px] border border-[#1A1A1A] p-8 hover:border-[#0066FF]/20 hover:bg-[#080808] transition-colors flex flex-col overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] text-xs font-medium mb-6 self-start">
                      {sys.radios}
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {sys.id}
                    </h3>
                    <p className="text-neutral-500 mb-8 pb-8 border-b border-[#1A1A1A]">
                      {sys.title}
                    </p>
                    <ul className="space-y-4 flex-1">
                      {sys.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0066FF]/60 shrink-0" />
                          <span className="text-neutral-300 text-[15px] leading-snug">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technical Specifications ───────────────────────────── */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-[#0A0A0A] rounded-[32px] border border-[#1A1A1A] overflow-hidden">
            <div className="divide-y divide-[#1A1A1A]">
              {[
                ["Frequency Bands", "2.4GHz, 5GHz, 6GHz"],
                ["Channel Bandwidth", "20, 40, 80, 160 and 320 MHz"],
                ["Radios", "Up to 24 individual radios"],
                [
                  "Wi-Fi Standards",
                  "802.11be (Wi-Fi 7), backward compatibility with Wi-Fi 6/6E/5",
                ],
                ["Multi-Link Operation", "Yes"],
                ["MU-MIMO", "Yes, 2×2 MIMO"],
                ["Spatial Streams", "Up to 2"],
                ["Encryption Support", "WPA3, WPA2"],
                [
                  "Emulation Modes",
                  "Client, sniffing and Mixed client Emulation",
                ],
                ["Traffic Generation", "TCP, UDP and Real Traffic"],
                ["Interface", "Ethernet"],
                ["Power Supply", "100-240V AC"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center p-6 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="sm:w-1/3 text-neutral-500 font-medium text-sm uppercase tracking-wider mb-2 sm:mb-0">
                    {label}
                  </div>
                  <div className="sm:w-2/3 text-white text-[15px]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Performance Analysis ───────────────────────────── */}
        <section className="py-24 border-t border-[#1A1A1A] bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] blur-[140px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Performance Analysis
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Comprehensive validation results demonstrating industry-leading performance across Wi-Fi 7 test scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
              {[
                "/graph1.png",
                "/graph2.png",
                "/graph3.png",
                "/graph4.png",
                "/graph5.png",
                "/graph6.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-video relative group transition-all duration-500"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Performance Analysis ${i + 1}`}
                      fill
                      className="object-contain opacity-100 group-hover:scale-[1.05] transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-[32px] p-10">
                <h3 className="text-2xl font-medium text-white mb-8">
                  Comprehensive Test Cases
                </h3>
                <ul className="space-y-5">
                  {[
                    "Multi-link Operation (MLO-EMLSR)",
                    "Preamble Puncturing",
                    "Mesh Specific Tests",
                    "Throughput vs. Range Analysis",
                    "Latency Distribution",
                  ].map((test, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                      <span className="text-neutral-300 text-[15px] font-medium">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Wi-Fi 7 AP Testing",
                      desc: "Perform comprehensive validation of Wi-Fi 7 devices under various real-world scenarios.",
                    },
                    {
                      title: "MLO Validation",
                      desc: "Ensure seamless MLO across multiple bands, optimizing bandwidth and latency.",
                    },
                    {
                      title: "Throughput Analysis",
                      desc: "Evaluate device performance in terms of data rate and network efficiency.",
                    },
                    {
                      title: "Stress Testing",
                      desc: "Simulate network congestion and device saturation for extreme conditions.",
                    },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-[32px] bg-[#0A0A0A] border border-[#1A1A1A] group hover:bg-[#111] hover:border-[#0066FF]/20 transition-all"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#0066FF]/10 transition-colors">
                        <Cpu className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        {app.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section
          className="py-32 relative text-center overflow-hidden"
          style={{ backgroundColor: "#03050A" }}
        >
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(0,40,130,0.08),transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Ready to Test Wi-Fi 7?
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Get comprehensive Wi-Fi 7 testing capabilities with the MT-C24
              Client Emulator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#0066FF] text-white font-semibold rounded-full hover:bg-[#0052CC] transition-colors text-[15px] shadow-[0_0_30px_rgba(0,102,255,0.3)] gap-2">
                <Download size={18} />
                Download Datasheet
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#0066FF]/10 border border-[#0066FF]/20 text-white font-semibold rounded-full hover:bg-[#0066FF]/15 transition-colors text-[15px] gap-2">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ── MT-Wave Page ──────────────────────────────────────────────────────

function MTWaveProduct() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#0066FF] selection:text-white font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="pt-36 sm:pt-44 pb-20 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.15)_0%,transparent_65%)]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08)_0%,transparent_60%)] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="inline-flex mb-8 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-400 uppercase border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              Interference Testing Solution
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium tracking-tight leading-[1.05] mb-8 text-white max-w-5xl mx-auto"
            >
              MT-Wave Wi-Fi <br />
              <span className="text-neutral-500">Interference Generator</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              The MT-Wave is a Wi-Fi interference generator supporting very good
              accurate dynamic power range of +20dBm to -30dBm irrespective of
              all the MCS rates and bandwidth. It generates maximum realistic
              congestion in the network using Wi-Fi7 test solutions, making it a
              versatile Wi-Fi client emulator as well.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="px-8 py-4 bg-white text-black font-semibold text-[15px] rounded-2xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Download size={18} />
                Get Datasheet
              </button>
              <button className="px-8 py-4 bg-white/[0.02] border border-[#1A1A1A] text-white font-semibold text-[15px] rounded-2xl hover:bg-[#111] transition-colors flex items-center justify-center gap-2 group">
                Contact Sales
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#0066FF]/15 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">16 μSec SIFS</p>
                  <p className="text-neutral-400 text-sm">
                    Ultra-low inter-frame spacing
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#0066FF]/15 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">+20dBm to -30dBm</p>
                  <p className="text-neutral-400 text-sm">
                    Accurate dynamic power range
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Features ───────────────────────────────────────── */}
        <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
          <FadeUp>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Key Features
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Unmatched control for realistic interference generation.
              </p>
            </div>
          </FadeUp>
          <FadeInStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            stagger={0.09}
          >
            {[
              {
                icon: Layers,
                title: "Tri-Band Support",
                desc: "Supports all 3 bands – 2.4GHz, 5GHz and 6GHz with most Wi-Fi channels.",
              },
              {
                icon: Zap,
                title: "Precise Power Control",
                desc: "Dynamic power range +20dBm to -30dBm with ±0.5dB accuracy.",
              },
              {
                icon: Shield,
                title: "Advanced Interference",
                desc: "Co-channel and Adjacent Channel interference generation with accurate control.",
              },
              {
                icon: Activity,
                title: "Low Latency",
                desc: "Inter-frame spacing as low as 16 μSec (equivalent to SIFS).",
              },
              {
                icon: Server,
                title: "Configurable Parameters",
                desc: "Standard, Channel, Bandwidth, MCS rate, WMM priority, IFS, Power level and Payload.",
              },
              {
                icon: Wifi,
                title: "Realistic Traffic",
                desc: "Emulation of realistic controlled traffic generation for Wi-Fi testing.",
              },
            ].map((feat, i) => (
              <FadeInItem key={i}>
                <div className="p-7 sm:p-8 rounded-[32px] bg-[#0A0A0A] border border-[#1A1A1A] group hover:bg-[#111] hover:border-[#0066FF]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-all">
                    <feat.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-[15px]">
                    {feat.desc}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>

        {/* ── Precise Power Control Stats ────────────────────────── */}
        <section className="py-24 bg-[#0A0A0A] border-y border-[#1A1A1A] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,102,255,0.05),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Precise Power Control
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Extremely accurate power adjustments across all bands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  stat: "+20dBm",
                  label: "Maximum Output Power",
                  desc: "High power interference testing",
                },
                {
                  stat: "±0.5dB",
                  label: "Power Accuracy",
                  desc: "Precise control for repeatable tests",
                },
                {
                  stat: "-30dBm",
                  label: "Minimum Output Power",
                  desc: "Low power sensitivity testing",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#050505] rounded-[32px] border border-[#1A1A1A] p-10 text-center hover:border-[#0066FF]/20 hover:bg-[#080808] transition-colors"
                >
                  <h3 className="text-5xl font-medium text-white mb-4 tracking-tight">
                    {item.stat}
                  </h3>
                  <p className="text-lg font-medium text-neutral-300 mb-2">
                    {item.label}
                  </p>
                  <p className="text-neutral-500 text-[15px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Configurations & WMM Priorities ───────────────────── */}
        <section className="py-24 border-b border-[#1A1A1A] bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Configurable Parameters */}
              <div>
                <h2 className="text-3xl font-medium tracking-tight mb-8">
                  Configurable Parameters
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Standard",
                    "Channel",
                    "Bandwidth",
                    "MCS rate",
                    "WMM priority",
                    "IFS (Inter-Frame Spacing)",
                    "Power level",
                    "Payload",
                  ].map((param) => (
                    <div
                      key={param}
                      className="px-5 py-2.5 rounded-full border border-[#1A1A1A] bg-[#0A0A0A] text-neutral-300 text-[15px] hover:border-[#0066FF]/20 hover:text-white transition-colors"
                    >
                      {param}
                    </div>
                  ))}
                </div>
              </div>

              {/* WMM Priorities */}
              <div>
                <h2 className="text-3xl font-medium tracking-tight mb-8">
                  WMM Priorities
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "Voice",
                      desc: "Highest priority for voice traffic",
                    },
                    {
                      num: "2",
                      title: "Video",
                      desc: "High priority for video streaming",
                    },
                    {
                      num: "3",
                      title: "Best Effort",
                      desc: "Standard priority for general data",
                    },
                    {
                      num: "4",
                      title: "Background",
                      desc: "Lowest priority for background tasks",
                    },
                  ].map((p) => (
                    <div
                      key={p.num}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#0066FF]/20 hover:bg-[#111] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF] font-medium shrink-0">
                        {p.num}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">
                          {p.title}
                        </h4>
                        <p className="text-neutral-400 text-[15px]">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Specifications ───────────────────────────── */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-[#0A0A0A] rounded-[32px] border border-[#1A1A1A] overflow-hidden">
            <div className="divide-y divide-[#1A1A1A]">
              {[
                ["Supported Bands", "2.4, 5 and 6GHz"],
                [
                  "Power Range",
                  "+20dBm to -30dBm (External attenuator is required for additional dynamic range)",
                ],
                ["Power Accuracy", "+/- 0.5 dB"],
                ["Bandwidth", "20, 40 and 80 MHz"],
                ["IEEE Standards", "6E/802.11ax/ac/n/legacy"],
                ["WMM Priority", "Voice, Video, Best effort and Background"],
                ["RF Channels", "All the channels are enabled"],
                ["Packet Duration", "Configurable"],
                ["Inter Frame Spacing", "16 uSec to 400 uSec"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center p-6 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="sm:w-1/3 text-neutral-500 font-medium text-sm uppercase tracking-wider mb-2 sm:mb-0">
                    {label}
                  </div>
                  <div className="sm:w-2/3 text-white text-[15px]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Test Results & Validation ────────────────────────── */}
        <section className="py-24 border-t border-[#1A1A1A] bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Test Results & Validation
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Real-world performance data validating MT-Wave's interference generation capabilities across Wi-Fi 6E and Wi-Fi 7.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
              {[
                { src: "/IgenG1.png", label: "Wi-Fi 6E — Model 1" },
                { src: "/IgenG2.png", label: "Wi-Fi 7 — Model 2" },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="aspect-video relative mb-6">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-contain opacity-100 group-hover:scale-[1.05] transition-all duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-[40px] p-10 md:p-12">
                <h3 className="text-2xl font-medium text-white mb-8">
                  MT-Wave Testing with MT-C24
                </h3>
                <div className="space-y-6 text-neutral-300 text-[15px] leading-relaxed">
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                    <p>Comprehensive test results conducted using the MT-Wave interference generator in controlled environments.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                    <p>Model-1 optimized for Wi-Fi 6E, while Model-2 extends validation to next-gen Wi-Fi 7 (802.11be) standards.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                    <p>MT-C24 configured with programmable digital attenuators for precise signal control and repeatability.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-white mb-10">Applications</h3>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      title: "Interference Testing",
                      desc: "Generate controlled co-channel and adjacent channel interference to test performance.",
                    },
                    {
                      title: "MLO Scenarios",
                      desc: "Perfect for Multi-link Operation testing scenarios with realistic traffic patterns.",
                    },
                    {
                      title: "Performance Analysis",
                      desc: "Evaluate device behavior under various interference levels with precise power control.",
                    },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] group hover:bg-[#111] hover:border-[#0066FF]/20 transition-all"
                    >
                      <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                        {app.title}
                      </h4>
                      <p className="text-neutral-400 text-sm leading-relaxed pl-5">
                        {app.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section
          className="py-32 relative text-center overflow-hidden"
          style={{ backgroundColor: "#03050A" }}
        >
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(0,40,130,0.08),transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Ready for Advanced Wi-Fi Testing?
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Generate realistic interference patterns with precise control
              using MT-Wave
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#0066FF] text-white font-semibold rounded-full hover:bg-[#0052CC] transition-colors text-[15px] shadow-[0_0_30px_rgba(0,102,255,0.3)] gap-2">
                <Download size={18} />
                Download Datasheet
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#0066FF]/10 border border-[#0066FF]/20 text-white font-semibold rounded-full hover:bg-[#0066FF]/15 transition-colors text-[15px] gap-2">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ProductPage() {
  const params = useParams();

  if (params?.id === "mt-wave") {
    return <MTWaveProduct />;
  }

  return <MTC24Product />;
}
