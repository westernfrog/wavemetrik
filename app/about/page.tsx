"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Globe,
  Shield,
  Users,
  TrendingUp,
  Zap,
  Target,
  Check,
  ArrowRight,
  Leaf,
  Activity,
  Cpu,
  Server,
  Radio,
} from "lucide-react";

const statCards = [
  {
    Icon: Zap,
    title: "Technology & Innovation",
    description:
      "We embrace the latest advancements to deliver state-of-the-art wireless test and measurement solutions for an increasingly connected world.",
  },
  {
    Icon: Users,
    title: "Team Collaboration",
    description:
      "Our passionate team works closely with clients, building lasting relationships that drive measurable results and real-world impact.",
  },
  {
    Icon: Target,
    title: "Our Story",
    description:
      "Driven by innovation, passion, and the desire to bring the best to our customers, partners, and communities worldwide.",
  },
];

const valueCards = [
  {
    Icon: Shield,
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards, ensuring transparency and honesty in all our dealings with customers and partners.",
  },
  {
    Icon: Zap,
    title: "Innovation",
    description:
      "We embrace change and constantly seek to push the boundaries of what's possible. Innovation drives everything we do.",
  },
  {
    Icon: TrendingUp,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our business, from product development and testing to customer service and support.",
  },
];

const globalBullets = [
  { Icon: Globe, label: "Wireless Innovation" },
  { Icon: Users, label: "Customer Partnership" },
  { Icon: Target, label: "Global Reach" },
];

const expertiseAreas = [
  {
    Icon: Activity,
    title: "RF Signal Analysis",
    description:
      "Precise measurement of radio frequency signals across a wide spectrum for thorough device and network validation.",
  },
  {
    Icon: Globe,
    title: "Network Performance",
    description:
      "End-to-end testing of wireless communication networks to ensure optimal throughput, latency, and reliability.",
  },
  {
    Icon: Shield,
    title: "Compliance & Certification",
    description:
      "Helping products meet regulatory standards and achieve certification across global wireless markets with confidence.",
  },
  {
    Icon: Cpu,
    title: "Measurement Precision",
    description:
      "State-of-the-art instruments and methodologies that deliver accurate, repeatable results every time.",
  },
];

const commitmentPoints = [
  "Reducing our environmental footprint across all operations",
  "Sourcing responsibly and partnering with like-minded suppliers",
  "Building solutions designed for long-term efficiency",
  "Investing in communities where we operate and grow",
];

const NUM_BARS = 46;
function generateSpectrum(tick: number): number[] {
  return Array.from({ length: NUM_BARS }, (_, i) => {
    const x = i / (NUM_BARS - 1);
    const peak1 = Math.exp(-Math.pow((x - 0.44) * 6.5, 2)) * 0.82;
    const peak2 = Math.exp(-Math.pow((x - 0.88) * 10, 2)) * 0.54;
    const peak3 = Math.exp(-Math.pow((x - 0.34) * 18, 2)) * 0.24;
    const noise = (Math.random() - 0.5) * 0.05;
    const breathe = Math.sin(tick * 0.05 + i * 0.35) * 0.025;
    return Math.min(
      0.97,
      Math.max(0.02, peak1 + peak2 + peak3 + noise + breathe + 0.04),
    );
  });
}

export default function AboutPage() {
  const [spectrum, setSpectrum] = useState<number[]>(() => generateSpectrum(0));
  const specTickRef = useRef(0);
  useEffect(() => {
    const id = setInterval(() => {
      specTickRef.current += 1;
      setSpectrum(generateSpectrum(specTickRef.current));
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#0066FF] selection:text-white font-sans">
      <Header />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.15)_0%,transparent_70%)]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.1)_0%,transparent_60%)] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 mt-6">
            <div className="inline-flex mb-8 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-400 uppercase border border-white/10 bg-white/5 backdrop-blur-sm">
              About Wavemetrik
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.05] mb-8">
              Advancing wireless
              <br />
              innovation
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              We fuel innovation and growth by delivering cutting-edge wireless
              test and measurement solutions that empower businesses to achieve
              optimal performance in an increasingly connected world.
            </p>
          </div>
        </section>

        {/* ── Stat Cards ───────────────────────────────────────── */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-8 hover:bg-[#111] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-8 border border-white/5">
                  <Icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What We Stand For ────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              What we
              <br />
              stand for
            </h2>
            <p className="max-w-md text-neutral-400 text-sm md:text-base leading-relaxed">
              Our story is driven by innovation, passion, and the desire to
              bring the best to our customers, partners, and communities.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-[450px] rounded-[32px] overflow-hidden mb-8 border border-[#1A1A1A]">
            <Image
              src="/lab.png"
              alt="Wavemetrik Innovation Lab"
              fill
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <button className="text-[13px] font-medium text-[#0066FF] hover:text-white transition-colors flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ── Our Vision ───────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
                Our vision,
                <br />
                for the future
              </h2>
              <p className="text-neutral-400 mb-10 leading-relaxed text-lg">
                As we continue to grow and evolve, our focus remains on
                innovation, customer satisfaction, and making a positive impact.
                We believe the future holds endless possibilities, and we're
                excited to take this journey with you.
              </p>
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                {globalBullets.map(({ label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Check size={18} className="text-[#0066FF]" />
                    <span className="text-sm md:text-base font-medium text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RF Spectrum */}
            <div className="bg-[#030609] border border-[#1A1A1A] rounded-3xl h-[400px] md:h-[500px] relative overflow-hidden flex flex-col p-5 pb-0">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_44%_70%,rgba(0,102,255,0.08),transparent)]" />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between mb-4 shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  <span className="text-green-400 text-[10px] font-mono tracking-widest">
                    LIVE SWEEP
                  </span>
                </div>
              </div>

              {/* Bars — fill remaining space, anchored to bottom */}
              <div className="relative flex-1 flex items-end gap-px px-0 pb-0 z-10">
                {spectrum.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{
                      height: `${h * 92}%`,
                      transition: "height 70ms linear",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-t-sm"
                      style={{
                        background:
                          h > 0.72
                            ? "linear-gradient(to top, #002266, #0055CC, #0066FF, #60A5FA, rgba(239,68,68,0.6))"
                            : "linear-gradient(to top, #001a4d, #0044BB, #0066FF, #93C5FD)",
                        opacity: 0.9,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Expertise ──────── */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              The expertise behind
              <br />
              Wavemetrik
            </h2>
            <p className="text-neutral-400 mt-6 text-base md:text-lg">
              A dedicated team of innovators, engineers and visionaries leading
              the future of tech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "MT-C24",
                desc: "Wi-Fi 7 Client Emulation",
                icon: Server,
              },
              {
                title: "MT-Wave",
                desc: "Interference Generation",
                icon: Radio,
              },
              {
                title: "RF Signal Analysis",
                desc: "Thorough device validation",
                icon: Activity,
              },
              {
                title: "Network Performance",
                desc: "End-to-end testing",
                icon: Globe,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#1A1A1A]"
              >
                <div className="h-56 bg-gradient-to-br from-[#111] to-[#0A0A0A] flex items-center justify-center group-hover:bg-[#151515] transition-colors relative border-b border-[#1A1A1A] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {(() => {
                    const Icon = item.icon;
                    return (
                      <Icon
                        size={56}
                        className="text-white/10 group-hover:text-[#0066FF] transition-colors relative z-10"
                        strokeWidth={1}
                      />
                    );
                  })()}
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-white mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sustainability / Commitment ──────────────────────── */}
        <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Our commitment
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
              We are committed to making decisions that are good for the planet
              and the future. We work towards a sustainable and responsible
              business model.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 bg-[#0A0A0A] border border-[#1A1A1A] rounded-3xl p-8 md:p-12">
            <div className="md:w-1/3 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#1A1A1A] pb-10 md:pb-0 md:pr-10">
              <div className="w-20 h-20 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-6 border border-[#0066FF]/20">
                <Leaf className="text-[#0066FF]" size={32} />
              </div>
              <h3 className="text-white font-medium text-xl mb-2">
                Sustainability
              </h3>
              <p className="text-neutral-500 text-sm">A responsible future</p>
              <div className="mt-8 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#0066FF]"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>

            <div className="md:w-2/3">
              <ul className="space-y-6">
                {commitmentPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="mt-1 w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#222] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#0066FF]" />
                    </span>
                    <span className="text-neutral-300 text-base md:text-lg leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8">
              Enable team excellence,
              <br />
              fuel business growth
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mb-12 max-w-2xl mx-auto">
              We believe in the power of collaboration. Let's team up and create
              something extraordinary together. If you're interested in working
              with us, we'd love to discuss how we can bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0066FF] text-white font-semibold rounded-full hover:bg-[#0052CC] transition-colors text-sm shadow-[0_0_30px_rgba(0,102,255,0.3)]"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
