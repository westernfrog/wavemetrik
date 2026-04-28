"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
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

// ── MT-C24 Page ───────────────────────────────────────────────────────

function MTC24Product() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#0066FF] selection:text-white font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="pt-48 pb-24 relative overflow-hidden">
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
            <div className="inline-flex mb-8 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-400 uppercase border border-white/10 bg-white/5 backdrop-blur-sm">
              Wi-Fi 7 Testing Solution
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-medium tracking-tight leading-[1.05] mb-8 text-white max-w-5xl mx-auto">
              MT-C24 Wi-Fi 7 <br />
              <span className="text-neutral-500">Client Emulator</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              The MT-C24 is a up to WiFi-7 Client Emulator designed for testing
              and validating next-generation up to Wi-Fi 7 (802.11be) devices.
              With 24 individual radios, this emulator provides comprehensive
              and scalable testing for Wi-Fi 7 networks, including Multi-Link
              Operation (MLO) and Extremely High Throughput (EHT).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="px-8 py-4 bg-[#0066FF] text-white font-semibold text-[15px] rounded-2xl hover:bg-[#0052CC] transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,102,255,0.3)]">
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

            <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-[#0066FF]/15 flex items-center justify-center">
                <Radio className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">24 Individual Radios</p>
                <p className="text-neutral-400 text-sm">
                  Comprehensive Wi-Fi 7 testing across all bands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Equipment Gallery ──────────────────────────────────── */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/inst4.png", label: "Module View" },
              { src: "/inst1.png", label: "Front Panel" },
              { src: "/inst2.png", label: "Array Config" },
              { src: "/inst3.png", label: "MT-C24 System" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] overflow-hidden group hover:border-[#0066FF]/25 hover:bg-[#111] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-contain p-3 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[11px] text-neutral-400 font-medium text-center">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Features ───────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A] mt-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Key Features
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Industry-leading specifications for rigorous testing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div
                key={i}
                className="p-10 rounded-[32px] bg-[#0A0A0A] border border-[#1A1A1A] flex gap-6 group hover:bg-[#111] hover:border-[#0066FF]/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
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
            ))}
          </div>
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
                  image: "/system-2.png",
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
                  image: "/system-5.png",
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
                  {sys.image && (
                    <div className="absolute inset-0 opacity-[0.07]">
                      <Image
                        src={sys.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
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

        {/* ── Performance Analysis & Applications ───────────────── */}
        <section className="py-24 border-t border-[#1A1A1A] bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Left: Performance Analysis */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
                  Performance Analysis
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-12">
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
                      className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] group hover:border-[#0066FF]/20 transition-all"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Performance Analysis ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-3xl p-8">
                  <h3 className="text-xl font-medium text-white mb-6">
                    Comprehensive Test Cases
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Multi-link Operation (MLO-EMLSR)",
                      "Preamble Puncturing",
                      "Mesh Specific Tests",
                    ].map((test, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]/60" />
                        <span className="text-neutral-300">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Applications */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
                  Applications
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Wi-Fi 7 AP Testing",
                      desc: "Perform comprehensive validation of Wi-Fi 7 devices under various real-world scenarios.",
                    },
                    {
                      title: "Multi-Link Operation (MLO) Validation",
                      desc: "Ensure seamless MLO across multiple bands, optimizing bandwidth and latency.",
                    },
                    {
                      title: "Throughput and Latency Testing",
                      desc: "Evaluate device performance in terms of data rate, response times, and overall network efficiency.",
                    },
                    {
                      title: "Wi-Fi Coexistence Testing",
                      desc: "Test how devices handle interference from other Wi-Fi networks and legacy technologies.",
                    },
                    {
                      title: "Stress Testing",
                      desc: "Simulate network congestion and device saturation to observe performance under extreme conditions.",
                    },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] group hover:bg-[#111] hover:border-[#0066FF]/20 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                        <Cpu className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <h3 className="text-lg font-medium text-white mb-3">
                        {app.title}
                      </h3>
                      <p className="text-neutral-400 text-[15px] leading-relaxed">
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
        <section className="pt-48 pb-24 relative overflow-hidden">
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
            <div className="inline-flex mb-8 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-400 uppercase border border-white/10 bg-white/5 backdrop-blur-sm">
              Interference Testing Solution
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-[80px] font-medium tracking-tight leading-[1.05] mb-8 text-white max-w-5xl mx-auto">
              MT-Wave Wi-Fi <br />
              <span className="text-neutral-500">Interference Generator</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              The MT-Wave is a Wi-Fi interference generator supporting very good
              accurate dynamic power range of +20dBm to -30dBm irrespective of
              all the MCS rates and bandwidth. It generates maximum realistic
              congestion in the network using Wi-Fi7 test solutions, making it a
              versatile Wi-Fi client emulator as well.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="px-8 py-4 bg-[#0066FF] text-white font-semibold text-[15px] rounded-2xl hover:bg-[#0052CC] transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,102,255,0.3)]">
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

        {/* ── Equipment Gallery ──────────────────────────────────── */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/Igen-1.jpg", label: "MT-Wave Unit" },
              { src: "/inst4.png", label: "Companion Device" },
              { src: "/IgenG1.png", label: "Result — Model 1" },
              { src: "/IgenG2.png", label: "Result — Model 2" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] overflow-hidden group hover:border-[#0066FF]/25 hover:bg-[#111] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-contain p-3 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[11px] text-neutral-400 font-medium text-center">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Features ───────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Key Features
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Unmatched control for realistic interference generation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div
                key={i}
                className="p-8 rounded-[32px] bg-[#0A0A0A] border border-[#1A1A1A] group hover:bg-[#111] hover:border-[#0066FF]/20 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                  <feat.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-[15px]">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
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

        {/* ── Test Results & Applications ────────────────────────── */}
        <section className="py-24 border-t border-[#1A1A1A] bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Left: Test Results */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
                  Test Results & Validation
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {[
                    { src: "/IgenG1.png", label: "Wi-Fi 6E — Model 1" },
                    { src: "/IgenG2.png", label: "Wi-Fi 7 — Model 2" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] group hover:border-[#0066FF]/20 transition-all"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-3xl p-8">
                  <h3 className="text-xl font-medium text-white mb-6">
                    MT-Wave Testing with MT-C24
                  </h3>
                  <div className="space-y-4 text-neutral-400 text-[15px] leading-relaxed">
                    <p>
                      Above are test results conducted with MT-Wave interference
                      generator.
                    </p>
                    <p>
                      Model-1 supports up to Wi-Fi 6E, while Model-2 extends its
                      capabilities up to Wi-Fi 7 (802.11be).
                    </p>
                    <p>
                      MT-C24 configured to 802.11ax 6E interface with
                      programmable digital attenuators for precise control.
                    </p>
                    <p>
                      Interferer signal levels include Over-The-Air (OTA) and
                      Cable losses using Wi-Fi simulator.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Applications */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
                  Applications
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      title: "Interference Testing",
                      desc: "Generate controlled co-channel and adjacent channel interference to test Wi-Fi device performance under realistic network congestion conditions.",
                    },
                    {
                      title: "MLO Scenarios",
                      desc: "Perfect for Multi-link Operation testing scenarios, providing realistic traffic patterns and interference conditions for comprehensive validation.",
                    },
                    {
                      title: "Performance Analysis",
                      desc: "Evaluate device behavior under various interference levels with precise power control and configurable traffic parameters.",
                    },
                    {
                      title: "Client Emulation",
                      desc: "Functions as a versatile Wi-Fi client emulator with realistic traffic generation capabilities for comprehensive testing scenarios.",
                    },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] group hover:bg-[#111] hover:border-[#0066FF]/20 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                        {app.title}
                      </h3>
                      <p className="text-neutral-400 text-[15px] leading-relaxed pl-5">
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
