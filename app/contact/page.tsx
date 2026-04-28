"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Menu,
  X,
  LifeBuoy,
  Globe,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Unique Editorial Hero Section ──────────────────── */}
        <section className="relative overflow-hidden pt-60 pb-32 min-h-[80vh] flex flex-col justify-center">
          {/* Subtle Ambient Background with Grid and Spotlights */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_60%)] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[800px] gradient-glow-brand blur-[140px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse-slow" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Column: Bold Headline */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-400 uppercase border border-white/10 bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Connect with us
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-[100px] lg:text-[130px] font-medium tracking-tighter leading-[0.85] text-white">
                  WE ARE <br />
                  HERE FOR <br />
                  <span className="gradient-text-brand italic px-2 underline decoration-blue-500/30 underline-offset-[12px]">
                    YOU.
                  </span>
                </h1>
              </div>

              {/* Right Column: Context & Interaction */}
              <div className="lg:col-span-4 lg:pt-48">
                <div className="lg:pl-12 space-y-10">
                  <p className="text-xl text-neutral-400 leading-relaxed font-light">
                    Your innovation deserves the best support. Whether it's
                    technical troubleshooting or a new product inquiry, we're
                    ready to listen.
                  </p>
                  <div className="flex flex-col items-start">
                    <a
                      href="#contact-methods"
                      className="group flex items-center gap-4 text-white font-medium hover:text-neutral-300 transition-colors"
                    >
                      <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all duration-500">
                        <ArrowRight
                          size={20}
                          className="rotate-90 group-hover:rotate-0 transition-transform"
                        />
                      </span>
                      <span className="text-sm uppercase tracking-widest">
                        Scroll to explore
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Methods Grid ────────────────────────────── */}
        <section
          id="contact-methods"
          className="py-24 border-t border-white/5 bg-[#0A0A0A]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  Icon: Phone,
                  title: "Call Us",
                  value: "080-4164 3659",
                  sub: "Monday – Friday",
                  detail: "Available for direct inquiries",
                },
                {
                  Icon: Mail,
                  title: "Email Us",
                  value: "support@wavemetrik.com",
                  sub: "24/7 Response Time",
                  detail: "General & Technical Support",
                },
                {
                  Icon: MapPin,
                  title: "Visit Us",
                  value: "Bangalore, India",
                  sub: "Sahakaranagar, 560092",
                  detail: "Our Corporate Headquarters",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-10 rounded-[32px] bg-[#050505] border border-blue-500/10 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center mb-10 text-blue-500 group-hover:text-blue-400 transition-colors">
                    <item.Icon size={24} />
                  </div>
                  <p className="text-neutral-500 text-[11px] font-semibold uppercase tracking-widest mb-2">
                    {item.title}
                  </p>
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {item.value}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-400 text-sm mb-1">
                    <Clock size={14} className="text-blue-500/40" />
                    <span>{item.sub}</span>
                  </div>
                  <p className="text-neutral-600 text-sm italic">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form Section ────────────────────────────────────── */}
        <section className="py-32 bg-[#050505] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
                  Let's start a <br />
                  <span className="gradient-text-brand italic pb-1">
                    conversation.
                  </span>
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
                  Whether you're looking for detailed product information or
                  custom wireless testing solutions, we're here to assist.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-[#0A0A0A] border border-blue-500/5 hover:border-blue-500/20 transition-colors group/box">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 group-hover/box:bg-blue-500/10 transition-colors">
                      <LifeBuoy size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Technical Support
                      </h4>
                      <p className="text-neutral-500 text-sm">
                        Need help with your products? Our support line is open
                        for troubleshooting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-[#0A0A0A] border border-blue-500/5 hover:border-blue-500/20 transition-colors group/box">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 group-hover/box:bg-blue-500/10 transition-colors">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Global Sales
                      </h4>
                      <p className="text-neutral-500 text-sm">
                        Reach out to our sales team for quotes and enterprise
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 rounded-[40px] bg-[#0A0A0A] border border-blue-500/10 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.03)]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] -mr-32 -mt-32 pointer-events-none group-hover:bg-blue-500/10 transition-all duration-700" />

                <form className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.05] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.05] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest ml-1">
                      Subject
                    </label>
                    <div className="relative">
                      <select className="w-full bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.05] transition-all appearance-none">
                        <option className="bg-[#050505]">
                          Product Inquiry
                        </option>
                        <option className="bg-[#050505]">
                          Technical Support
                        </option>
                        <option className="bg-[#050505]">
                          General Question
                        </option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500/40">
                        <ChevronRight className="rotate-90" size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/[0.05] transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full h-14 bg-white text-black font-semibold rounded-2xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group/btn">
                    Send Message
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section
          className="py-32 relative text-center overflow-hidden border-t border-white/5"
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(0,40,130,0.08),transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Innovating together.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              We're committed to ensuring your success every step of the way.
              Reach out today and let's explore the future of wireless testing.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:support@wavemetrik.com"
                className="inline-flex h-14 items-center justify-center px-10 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors text-[15px] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                support@wavemetrik.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
