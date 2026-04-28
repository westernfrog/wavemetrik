"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Rachel Kim",
    title: "HR Manager at Brightside Solutions",
    quote:
      "Wavemetrik has completely transformed how we manage our analytics operations. From data processing to onboarding and team reporting, the platform has made everything smoother, faster, and far more reliable. It's given us more time to focus on strategic initiatives. I genuinely can't imagine going back to our old system.",
    gradient: "from-amber-300 to-orange-400",
    checks: ["Automated workflows", "Real-time dashboards"],
  },
  {
    name: "David Torres",
    title: "CTO at NexaFlow Inc.",
    quote:
      "The depth of analytics and the ease of integration were what sold us initially. But it's the ongoing support and product velocity that keeps us here. Every quarter Wavemetrik ships features that directly solve our pain points. It's rare to find a platform so aligned with its customers.",
    gradient: "from-sky-300 to-blue-500",
    checks: ["Seamless API integration", "Proactive support team"],
  },
  {
    name: "Priya Nair",
    title: "Head of Data at Luminary Co.",
    quote:
      "We evaluated six platforms before choosing Wavemetrik. The decision was clear — nothing else offered the combination of power and simplicity we needed. Our team adopted it within days, and the ROI was visible within the first month.",
    gradient: "from-emerald-300 to-teal-500",
    checks: ["Easy team adoption", "Measurable ROI"],
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-3">
            Satisfied clients
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            See how our solutions have empowered businesses around the globe.
            Become part of our growing community of satisfied clients.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left panel */}
            <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-between bg-[#F8FAFC] border-b md:border-b-0 md:border-r border-slate-100">
              <div className="space-y-5">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.gradient} shadow-md`}
                />
                <div>
                  <div className="font-bold text-[#0F172A] text-base">{t.name}</div>
                  <div className="text-slate-400 text-sm mt-0.5">{t.title}</div>
                </div>
                <ul className="space-y-2.5 pt-1">
                  {t.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-[#0066FF] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                          <path
                            d="M2 5.5l2 2 4-4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-7 bg-[#0066FF]"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
              <div
                className="text-6xl leading-none font-serif text-[#0066FF] mb-4 select-none"
                aria-hidden
              >
                &ldquo;
              </div>
              <p className="text-[#0F172A] text-base sm:text-lg leading-relaxed">
                {t.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
