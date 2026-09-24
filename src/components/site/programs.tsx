"use client";

import { useState } from "react";
import { Clock, Check, ChevronDown, Users } from "lucide-react";
import { Reveal, SectionHead, PageHero, ActionButton } from "./bits";
import { IMAGES, PROGRAMS, PRICING, FAQS } from "@/lib/site";
import type { PageId } from "./navbar";

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[#E8E6E1] bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#12141A] text-[15px]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#FF4A1A] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-[#5B6470]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function ProgramsView({ go }: { go: (p: PageId) => void }) {
  return (
    <>
      <PageHero
        kicker="Our programs"
        title="Training built around the person, not the other way round"
        text="Six programs, one philosophy: honest coaching, measurable progress and plans that respect your real life."
        image={IMAGES.heroAlt}
      />

      {/* Programs detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug}>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 rounded-full bg-[#0B0C0F]/85 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#8B93A0]">
                    <Clock className="w-3.5 h-3.5 text-[#FF4A1A]" />
                    {p.duration}
                  </div>
                  <h2 className="mt-3 font-oswald text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-[#12141A]">
                    {p.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#5B6470]">
                    {p.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#FF4A1A]/6 border border-[#FF4A1A]/15 p-4">
                    <Users className="w-5 h-5 text-[#FF4A1A] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#3A414B]">
                      <span className="font-semibold text-[#12141A]">Who it suits: </span>
                      {p.forWho}
                    </p>
                  </div>
                  <div className="mt-7">
                    <ActionButton variant="dark" onClick={() => go("contact")}>
                      Book a Free Trial
                    </ActionButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-[#F6F6F4]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            kicker="Membership"
            title="Straight pricing, no lock in"
            text="Every membership starts with a free trial and a movement screen. Pause anytime, cancel with 30 days notice."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
            {PRICING.map((plan, i) => (
              <Reveal key={plan.name} delay={0.08 * i} className="h-full">
                <div
                  className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1.5 ${
                    plan.highlight
                      ? "bg-[#0B0C0F] text-white shadow-[0_30px_60px_rgba(11,12,15,0.35)]"
                      : "bg-white text-[#12141A] shadow-sm hover:shadow-[0_20px_50px_rgba(11,12,15,0.1)]"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF4A1A] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-oswald text-4xl font-semibold">{plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? "text-white/50" : "text-[#8B93A0]"}`}>{plan.period}</span>
                  </div>
                  <ul className="mt-7 space-y-3.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.highlight ? "bg-[#FF4A1A]" : "bg-[#FF4A1A]/12"
                          }`}
                        >
                          <Check className="w-3 h-3 text-[#FF4A1A]" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => go("contact")}
                    className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                      plan.highlight
                        ? "bg-[#FF4A1A] text-white hover:bg-[#E8420A]"
                        : "bg-[#12141A] text-white hover:bg-[#FF4A1A]"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-[#8B93A0]">
              Drop in single sessions are ₦7,500 for group classes. Cash, transfer and card accepted at the front desk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHead center kicker="Common questions" title="Before you ask" />
          <div className="mt-12 space-y-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={0.06 * i}>
                <Faq q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
