"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FadeUp, FadeIn, FadeInStagger, FadeInItem, ScaleIn } from "@/components/motion";
import { motion } from "motion/react";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const blogPosts = [
  {
    id: 1,
    title: "The Future of Wi-Fi 7: What to Expect in 2026",
    excerpt:
      "As Wi-Fi 7 becomes the new standard, we explore the impact of 320MHz channels and Multi-Link Operation on industrial connectivity.",
    date: "April 15, 2026",
    author: "Dr. Sarah Chen",
    readTime: "6 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Optimizing RF Testing for High-Density Environments",
    excerpt:
      "Testing wireless devices in crowded spectrums requires new approaches to interference generation and shielding.",
    date: "April 10, 2026",
    author: "Marcus Thorne",
    readTime: "8 min read",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Understanding Multi-Link Operation (MLO)",
    excerpt:
      "A deep dive into how MLO enables devices to transmit and receive data across multiple frequency bands simultaneously.",
    date: "April 02, 2026",
    author: "Elena Rodriguez",
    readTime: "5 min read",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1649861742672-20152f77c1f5?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "The Role of AI in Wireless Spectrum Management",
    excerpt:
      "How machine learning is helping to predict and mitigate interference in real-time for enterprise networks.",
    date: "March 25, 2026",
    author: "James Wilson",
    readTime: "7 min read",
    category: "AI & ML",
    image:
      "https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Building Reliable IoT Networks with Wi-Fi 6E",
    excerpt:
      "Why the 6GHz band is a game-changer for industrial IoT reliability and latency-sensitive applications.",
    date: "March 18, 2026",
    author: "Sarah Chen",
    readTime: "4 min read",
    category: "IoT",
    image:
      "https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Advancements in Automated Wireless Test Suites",
    excerpt:
      "Reducing time-to-market with integrated automation frameworks for Wi-Fi certification and validation.",
    date: "March 10, 2026",
    author: "Marcus Thorne",
    readTime: "9 min read",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero Section ────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-36 sm:pt-40 pb-12 sm:pb-16">
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
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[800px] gradient-glow-brand blur-[140px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse-slow" />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-widest text-neutral-300 uppercase border border-white/10 bg-white/5"
            >
              Insights & Updates
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="text-[clamp(2.8rem,10vw,6rem)] font-medium tracking-tighter mb-8 leading-tight"
            >
              Our Journal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Exploring the frontiers of wireless technology, RF engineering,
              and the future of connectivity.
            </motion.p>
          </div>
        </section>

        {/* ── Featured Post ───────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 sm:mb-32 mt-8 sm:mt-10 relative z-10">
          <ScaleIn>
            <Link href={`/blog/${blogPosts[0].id}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative aspect-square overflow-hidden bg-neutral-900">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">
                      {blogPosts[0].category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="text-neutral-500 text-xs uppercase tracking-widest">
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 group-hover:text-blue-400 transition-colors leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                        <User size={16} className="text-neutral-400" />
                      </div>
                      <span className="text-sm text-neutral-300 font-medium">
                        {blogPosts[0].author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white font-medium group-hover:gap-3 transition-all">
                      Read Article{" "}
                      <ArrowRight size={16} className="text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScaleIn>
        </section>

        {/* ── Blog Grid ─────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <FadeInStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-14 sm:gap-y-20"
            stagger={0.08}
          >
            {blogPosts.slice(1).map((post) => (
              <FadeInItem key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="group flex flex-col h-full"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-900 mb-7 sm:mb-8">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight mb-4 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-[15px] leading-relaxed mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={14} className="text-blue-500" />
                    </div>
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>

        {/* ── Newsletter Section ────────────────────────────────── */}
        <section
          className="mt-32 sm:mt-40 py-24 sm:py-32 relative text-center overflow-hidden"
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
                  borderRight: i < 7 ? "1px solid rgba(255,255,255,0.025)" : "none",
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,rgba(0,40,130,0.08),transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                Stay updated on Wi-Fi innovation
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-neutral-400 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our newsletter to receive the latest industry insights and
                technical deep-dives directly to your inbox.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
