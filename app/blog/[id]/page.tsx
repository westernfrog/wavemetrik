"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  MessageSquare,
  Info,
  Layers,
  BarChart3,
  Bookmark,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Wi-Fi 7: What to Expect in 2026",
    excerpt:
      "As Wi-Fi 7 becomes the new standard, we explore the impact of 320MHz channels and Multi-Link Operation on industrial connectivity.",
    date: "April 15, 2026",
    author: "Dr. Sarah Chen",
    role: "Senior RF Engineer",
    readTime: "12 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero Section (Centered Structure) ────────────────── */}
        <section className="relative overflow-hidden pt-48 pb-24">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 text-sm font-medium group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Journal
            </Link>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-8 text-white">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 pt-4 max-w-fit mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                  <User size={18} className="text-neutral-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">
                    {post.author}
                  </p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                    {post.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-neutral-500">
                <Calendar size={14} />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Image (Wide 21/9) ────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
          <div className="relative aspect-[21/9] overflow-hidden bg-neutral-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Article Content ────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Table of Contents / Sidebar */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">
                    On this page
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { label: "Executive Summary", href: "#overview" },
                      { label: "The 320MHz Breakthrough", href: "#bandwidth" },
                      { label: "Multi-Link Operation", href: "#mlo" },
                      { label: "The Testing Paradigm", href: "#testing" },
                      { label: "Future Maturity", href: "#future" },
                    ].map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-neutral-500 hover:text-white transition-colors block"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-10 border-t border-white/5 space-y-6">
                  <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                    Share Insight
                  </h4>
                  <div className="flex flex-col gap-2">
                    <button className="flex items-center gap-3 text-[11px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest group">
                      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all">
                        <Share2 size={12} />
                      </div>
                      LinkedIn
                    </button>
                    <button className="flex items-center gap-3 text-[11px] font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest group">
                      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/5 transition-all">
                        <Bookmark size={12} />
                      </div>
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 max-w-3xl">
              {/* Overview Box */}
              <div
                id="overview"
                className="mb-16 p-8 bg-[#0A0A0A] border-l-2 border-blue-600"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-500">
                  <Bookmark size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Summary
                  </span>
                </div>
                <p className="text-xl text-neutral-200 leading-relaxed font-normal">
                  By 2026, Wi-Fi 7 will transition from an emerging technology
                  to the industrial standard. This analysis explores how 320MHz
                  scaling and Multi-Link Operation (MLO) are addressing critical
                  reliability gaps in wireless ecosystems.
                </p>
              </div>

              <div
                className="prose prose-invert prose-blue max-w-none 
                prose-p:text-neutral-400 prose-p:text-[18px] prose-p:leading-[1.8] prose-p:mb-10
                prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-white
                prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-20 prose-h2:mb-8
                prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6
                prose-strong:text-white prose-strong:font-semibold
                prose-blockquote:border-l-blue-600 prose-blockquote:bg-white/5 prose-blockquote:p-10 prose-blockquote:rounded-none prose-blockquote:not-italic prose-blockquote:text-white prose-blockquote:text-2xl prose-blockquote:font-normal
              "
              >
                <p className="text-2xl text-white leading-snug mb-12">
                  The transition to Wi-Fi 7 (802.11be) marks one of the most
                  significant architectural leaps in the history of the IEEE
                  802.11 standard.
                </p>

                <p className="text-lg tracking-wide leading-relaxed">
                  Unlike its predecessors, which focused primarily on peak
                  throughput, Wi-Fi 7 is designed from the ground up for extreme
                  reliability and deterministic latency—qualities that are
                  essential for the next generation of industrial automation and
                  immersive technologies.
                </p>

                <p className="text-lg tracking-wide leading-relaxed">
                  At Wavemetrik, our lab simulations show that the combination
                  of wide-spectrum access and intelligent link management
                  reduces jitter by up to 80% in congested environments compared
                  to Wi-Fi 6E.
                </p>

                <div className="mt-40" />

                <h2
                  id="bandwidth"
                  className="flex flex-col gap-4 !mb-12 group/title"
                >
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] block">
                    Section 01
                  </span>
                  <span className="text-4xl md:text-5xl font-medium tracking-tight text-white border-b border-white/5 pb-6 block group-hover/title:border-blue-500/30 transition-colors">
                    The 320MHz Breakthrough
                  </span>
                </h2>
                <p className="text-lg tracking-wide leading-relaxed">
                  By doubling the maximum channel bandwidth from 160MHz to
                  320MHz, Wi-Fi 7 effectively doubles the data rate for
                  compatible devices. This is achieved by utilizing the newly
                  opened 6GHz spectrum, which provides the clean bandwidth
                  necessary for such wide channels. In our lab testing, we've
                  observed that these wider channels don't just provide more
                  speed; they provide the overhead needed for complex,
                  high-resolution data streams.
                </p>

                <h2
                  id="mlo"
                  className="flex flex-col gap-4 !mt-32 !mb-12 group/title"
                >
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] block">
                    Section 02
                  </span>
                  <span className="text-4xl md:text-5xl font-medium tracking-tight text-white border-b border-white/5 pb-6 block group-hover/title:border-blue-500/30 transition-colors">
                    Multi-Link Operation (MLO)
                  </span>
                </h2>
                <p className="text-lg tracking-wide leading-relaxed">
                  If speed is the headline, reliability is the story. Multi-Link
                  Operation allows a single device to maintain simultaneous
                  connections across multiple bands—2.4GHz, 5GHz, and 6GHz. This
                  is a paradigm shift. In traditional Wi-Fi, a device would
                  switch between bands, causing a momentary disruption. With
                  MLO, the data flows across all available links without
                  interruption.
                </p>

                <blockquote className="my-16">
                  MLO is not just about faster data; it represents the
                  conclusion of the buffer in mission-critical wireless
                  applications.
                </blockquote>

                {/* Graph/Image Section */}
                <div className="my-16 bg-[#0A0A0A] border border-white/5 overflow-hidden not-prose">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/graph1.png"
                      alt="MLO Performance Analysis"
                      fill
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  </div>
                </div>

                <h2
                  id="testing"
                  className="flex flex-col gap-4 !mt-32 !mb-12 group/title"
                >
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] block">
                    Section 03
                  </span>
                  <span className="text-4xl md:text-5xl font-medium tracking-tight text-white border-b border-white/5 pb-6 block group-hover/title:border-blue-500/30 transition-colors">
                    The Testing Paradigm
                  </span>
                </h2>
                <p className="text-lg tracking-wide leading-relaxed">
                  Testing these capabilities requires a new generation of
                  hardware. Traditional testers struggle to emulate the complex
                  timing requirements of MLO. This is where our{" "}
                  <strong>MT-C24 system</strong> excels. By providing 24
                  individual radios, we can simulate massive client densities
                  where MLO performance is truly put to the test.
                </p>

                <div className="my-16 space-y-4 not-prose">
                  {[
                    {
                      title: "High Density",
                      desc: "Simulating 100+ concurrent MLO sessions per channel.",
                    },
                    {
                      title: "Spectral Analysis",
                      desc: "Analyzing Preamble Puncturing efficacy in congested blocks.",
                    },
                    {
                      title: "Modulation Precision",
                      desc: "Testing 4K-QAM modulation under low SNR conditions.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-6 bg-white/[0.01] border border-white/5"
                    >
                      <div className="mt-1 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <span className="block text-white font-medium text-sm mb-1">
                          {item.title}
                        </span>
                        <span className="text-neutral-500 text-xs leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <h2
                  id="future"
                  className="flex flex-col gap-4 !mt-32 !mb-12 group/title"
                >
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] block">
                    Section 04
                  </span>
                  <span className="text-4xl md:text-5xl font-medium tracking-tight text-white border-b border-white/5 pb-6 block group-hover/title:border-blue-500/30 transition-colors">
                    Looking Forward
                  </span>
                </h2>
                <p className="text-lg tracking-wide leading-relaxed">
                  Looking ahead to late 2026, we anticipate that Wi-Fi 7 will
                  move beyond high-end consumer hardware into the backbone of
                  the enterprise. We're seeing massive interest in{" "}
                  <strong>Test as a Service (TaaS)</strong> models where
                  companies leverage our specialized hardware to certify their
                  infrastructure.
                </p>

                <p className="text-lg tracking-wide leading-relaxed">
                  The complexity of the RF environment is increasing. As more
                  devices and bandwidth are added, the precision of testing
                  becomes a primary competitive advantage. Wavemetrik is proud
                  to be the partner helping you navigate this complexity with
                  complete confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Posts ────────────────── */}
        <section className="py-32 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                  Related Insights
                </h2>
                <p className="text-neutral-500">
                  Further analysis from our technical journal.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:gap-3 transition-all"
              >
                All Articles <ArrowRight size={16} className="text-blue-500" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[2, 3, 4].map((id) => (
                <Link
                  key={id}
                  href={`/blog/${id}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-900 mb-8 transition-all">
                    <Image
                      src="https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Related post"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {id === 2
                      ? "Optimizing RF Testing for High-Density Environments"
                      : id === 3
                        ? "Understanding Multi-Link Operation (MLO)"
                        : "The Role of AI in Wireless Spectrum Management"}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                    Read Article{" "}
                    <ArrowRight size={14} className="text-blue-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter Section ────────────────── */}
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
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Stay updated on Wi-Fi innovation
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our newsletter to receive the latest industry insights and
              technical deep-dives directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
