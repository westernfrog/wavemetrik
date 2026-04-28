"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { label: "Wi-Fi 7 Client Emulator", href: "/products/mt-c24" },
        { label: "Interference Generator", href: "/products/mt-wave" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative h-10 w-auto">
                <Image
                  src="/footer.png"
                  alt="Wavemetrik Logo"
                  width={200}
                  height={40}
                  className="h-10 w-auto object-contain brightness-150 transition-all"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase group-hover:text-[#0066FF] transition-colors">
                Wavemetrik
              </span>
            </Link>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-sm">
              At the forefront of wireless innovation, providing precise testing
              solutions for next-generation technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:border-white/30 transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-neutral-400 group-hover:text-white transition-colors">
                  support@wavemetrik.com
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:border-white/30 transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-neutral-400 group-hover:text-white transition-colors">
                  080-4164 3659
                </span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-neutral-500 hover:text-white transition-colors duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-neutral-600 text-sm tracking-wide">
            © 2024 WAVEMETRIK. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-xs text-neutral-600 hover:text-white uppercase tracking-widest transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-neutral-600 hover:text-white uppercase tracking-widest transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-4">
            {["Facebook", "Twitter", "LinkedIn"].map((social) => (
              <button
                key={social}
                className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-neutral-600 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <span className="sr-only">{social}</span>
                <div className="w-1 h-1 rounded-full bg-current" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
