"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Check,
  ArrowRight,
  Clock,
  Flame,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Reveal, SectionHead, ActionButton, Kicker } from "./bits";
import {
  IMAGES,
  HERO_SLIDES,
  STATS,
  WHY_POINTS,
  PROGRAMS,
  TEAM,
  PRICING,
  TESTIMONIALS,
  POSTS,
  SCHEDULE,
} from "@/lib/site";
import type { PageId } from "./navbar";

/* ---------------------------------- HERO ---------------------------------- */

function Hero({ go }: { go: (p: PageId) => void }) {
  const [slide, setSlide] = useState(0);
  const s = HERO_SLIDES[slide];

  useEffect(() => {
    const t = setInterval(() => setSlide((v) => (v + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-[#0B0C0F]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/85 to-[#0B0C0F]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 pb-16">
        <motion.div
          key={slide}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4A1A]/40 bg-[#FF4A1A]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B3D]">
            <Flame className="w-3.5 h-3.5" />
            {s.kicker}
          </span>
          <h1 className="mt-6 font-oswald text-5xl sm:text-6xl lg:text-7xl font-semibold uppercase leading-[1.02] tracking-tight text-white">
            {s.title[0]}
            <br />
            <span className="text-[#FF4A1A]">{s.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">{s.text}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ActionButton onClick={() => go("contact")}>Book a Free Trial</ActionButton>
            <ActionButton variant="outline" onClick={() => go("programs")}>
              See Programs
            </ActionButton>
          </div>
        </motion.div>

        <div className="mt-14 flex items-center gap-3">
          <button
            onClick={() => setSlide((slide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-[#FF4A1A] hover:bg-[#FF4A1A] transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setSlide((slide + 1) % HERO_SLIDES.length)}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-[#FF4A1A] hover:bg-[#FF4A1A] transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="ml-4 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === slide ? "w-10 bg-[#FF4A1A]" : "w-4 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WELCOME/ABOUT ----------------------------- */

function Welcome({ go }: { go: (p: PageId) => void }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={IMAGES.about} alt="Coach guiding a client through dumbbell presses at FitForge" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#FF4A1A] text-white rounded-2xl px-7 py-5 shadow-[0_18px_40px_rgba(255,74,26,0.4)]">
            <p className="font-oswald text-4xl font-semibold leading-none">12+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/85">Years of coaching</p>
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-4 border-[#FF4A1A]/20 -z-10" />
        </Reveal>

        <div>
          <SectionHead
            kicker="Welcome to FitForge"
            title="Fitness that finally makes sense"
            text="Most people do not fail at fitness. The plan fails them. Generic programs, crowded floors and coaches glued to their phones. We built FitForge in 2013 to be the opposite of all that."
          />
          <Reveal delay={0.1}>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5B6470]">
              Here every client gets a program written for their body, a coach who knows their name and a floor
              where beginners are treated with the same respect as veterans. Small enough to care about your
              progress, serious enough to get you results that last.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {[
                "Personal program for every member",
                "Coach supervised sessions only",
                "Progress tested every 6 weeks",
                "No contracts, pause anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#12141A]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FF4A1A]/12 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#FF4A1A]" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <ActionButton variant="dark" onClick={() => go("about")}>
                More About Us
              </ActionButton>
              <div>
                <p className="font-oswald text-2xl text-[#12141A] italic" style={{ fontFamily: "cursive" }}>
                  Dapo Adeyemi
                </p>
                <p className="text-xs uppercase tracking-wider text-[#8B93A0] mt-0.5">Founder and Head Coach</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- PROGRAMS --------------------------------- */

function ProgramsTeaser({ go }: { go: (p: PageId) => void }) {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F6F4]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            kicker="What we do"
            title="Programs for every level and goal"
            text="Whether you want to lose fat, get strong or simply feel good in your body again, there is a program here with your name on it."
          />
          <Reveal delay={0.15}>
            <ActionButton variant="dark" onClick={() => go("programs")}>
              All Programs
            </ActionButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 * (i % 3)}>
              <button
                onClick={() => go("programs")}
                className="group text-left w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(11,12,15,0.12)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#0B0C0F]/80 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#8B93A0]">
                    <Clock className="w-3.5 h-3.5 text-[#FF4A1A]" />
                    {p.duration}
                  </div>
                  <h3 className="mt-3 font-oswald text-xl font-semibold uppercase tracking-tight text-[#12141A] group-hover:text-[#FF4A1A] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B6470] line-clamp-3">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8420A]">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WHY CHOOSE US ----------------------------- */

function WhyUs() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0B0C0F] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${IMAGES.heroAlt})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0F] via-[#0B0C0F]/80 to-[#0B0C0F]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHead
            light
            kicker="Why FitForge"
            title="Built different, on purpose"
            text="Anyone can buy equipment. What you are really paying for is coaching, accountability and a place you actually want to show up to."
          />
          <div className="mt-10 space-y-7">
            {WHY_POINTS.map((w, i) => (
              <Reveal key={w.title} delay={0.08 * i}>
                <div className="flex gap-5">
                  <span className="font-oswald text-3xl font-semibold text-[#FF4A1A]/90 leading-none pt-0.5 w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-oswald text-lg font-semibold uppercase tracking-tight text-white">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={IMAGES.ctaBg}
                alt="Inside the FitForge training floor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-5 flex items-center gap-4">
              <Quote className="w-8 h-8 text-[#FF4A1A] shrink-0" />
              <p className="text-sm text-white/85 leading-relaxed">
                The best gym is the one you keep coming back to. That has been our whole strategy since day one.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- COUNTERS -------------------------------- */

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-oswald text-4xl sm:text-5xl font-semibold text-white">
      {display.toLocaleString()}
      <span className="text-[#FF4A1A]">{suffix}</span>
    </span>
  );
}

function StatsBand() {
  return (
    <section className="relative py-16 border-y border-white/10 bg-[#101216]">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={0.07 * i} className="text-center lg:text-left">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- SCHEDULE PREVIEW -------------------------- */

function SchedulePreview({ go }: { go: (p: PageId) => void }) {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          center
          kicker="Weekly timetable"
          title="Find your slot"
          text="Sessions run from 6am to 9pm, six days a week. Pick a time that survives your calendar, then keep it."
        />

        <Reveal delay={0.1} className="mt-12 overflow-x-auto rounded-2xl border border-[#E8E6E1] shadow-sm">
          <table className="w-full min-w-[760px] text-sm bg-white">
            <thead>
              <tr className="bg-[#0B0C0F] text-white">
                <th className="px-5 py-4 text-left font-oswald uppercase tracking-wider text-xs">Time</th>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <th key={d} className="px-5 py-4 text-left font-oswald uppercase tracking-wider text-xs">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, ri) => (
                <tr key={row.time} className={ri % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}>
                  <td className="px-5 py-4 font-semibold text-[#12141A] whitespace-nowrap">{row.time}</td>
                  {days.map((d) => {
                    const val = row[d];
                    const closed = val === "Closed";
                    return (
                      <td key={d} className="px-5 py-4">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            closed
                              ? "bg-[#F0EFEC] text-[#B0B4BC]"
                              : val === "Private Coaching"
                                ? "bg-[#FF4A1A]/10 text-[#E8420A]"
                                : "bg-[#12141A]/5 text-[#12141A]"
                          }`}
                        >
                          {val}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 text-center">
          <ActionButton variant="dark" onClick={() => go("schedule")}>
            Full Schedule
          </ActionButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- TEAM ---------------------------------- */

function Team({ go }: { go: (p: PageId) => void }) {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F6F4]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          center
          kicker="Meet the team"
          title="Coaches who show up for you"
          text="Certified, experienced and genuinely invested. The kind of people who remember your goals and ask about your week."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div className="group relative rounded-2xl overflow-hidden bg-[#0B0C0F] aspect-[3/4]">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.role} at FitForge`}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 to-transparent p-6 pt-20">
                  <h3 className="font-oswald text-xl font-semibold uppercase text-white">{t.name}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#FF6B3D] mt-1">{t.role}</p>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {t.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center">
          <button
            onClick={() => go("about")}
            className="text-sm font-semibold uppercase tracking-wider text-[#E8420A] hover:text-[#12141A] transition-colors"
          >
            Meet the whole team on our About page
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- PRICING --------------------------------- */

function Pricing({ go }: { go: (p: PageId) => void }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          center
          kicker="Membership"
          title="Simple pricing, no contracts"
          text="Pick the plan that fits your life. Pause anytime, cancel with 30 days notice, and your first session is always free."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={0.08 * i} className="h-full">
              <div
                className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1.5 ${
                  plan.highlight
                    ? "bg-[#0B0C0F] text-white shadow-[0_30px_60px_rgba(11,12,15,0.35)]"
                    : "bg-[#F6F6F4] text-[#12141A] hover:shadow-[0_20px_50px_rgba(11,12,15,0.1)]"
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
            Not sure which plan fits? Book a free trial and we will help you choose, no strings attached.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- TESTIMONIALS ------------------------------- */

function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F6F4]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          kicker="Client stories"
          title="Results people can feel"
          text="We could talk about our programs all day. What matters more is what happens to the people who commit to them."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i} className="h-full">
              <figure className="h-full flex flex-col rounded-2xl bg-white p-8 shadow-sm hover:shadow-[0_20px_50px_rgba(11,12,15,0.1)] transition-shadow duration-500">
                <Quote className="w-9 h-9 text-[#FF4A1A]/25" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#3A414B]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-[#EEEBE6] pt-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-[#12141A]">{t.name}</p>
                    <p className="text-xs text-[#8B93A0] mt-0.5">{t.detail}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- BLOG ----------------------------------- */

function BlogTeaser({ go }: { go: (p: PageId) => void }) {
  const featured = POSTS.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            kicker="From the blog"
            title="Straight talk on training"
            text="No fads and no magic pills. Practical advice from the studio floor that you can use this week."
          />
          <Reveal delay={0.15}>
            <ActionButton variant="dark" onClick={() => go("blog")}>
              Read the Blog
            </ActionButton>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.id} delay={0.08 * i}>
              <button
                onClick={() => go("blog")}
                className="group text-left w-full rounded-2xl overflow-hidden bg-[#F6F6F4] hover:shadow-[0_20px_50px_rgba(11,12,15,0.12)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#8B93A0]">
                    <span className="rounded-full bg-[#FF4A1A]/10 text-[#E8420A] px-3 py-1 font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-oswald text-lg font-semibold uppercase leading-snug text-[#12141A] group-hover:text-[#FF4A1A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B6470] line-clamp-2">{post.excerpt}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CTA BANNER ------------------------------- */

function CtaBanner({ go }: { go: (p: PageId) => void }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0C0F]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroAlt})` }}
      />
      <div className="absolute inset-0 bg-[#0B0C0F]/78" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Kicker light>Your first session is free</Kicker>
          <h2 className="mt-5 font-oswald text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[1.05] text-white">
            Stop planning it.
            <br />
            <span className="text-[#FF4A1A]">Start training.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/65">
            Come in for a free trial session. Meet a coach, try a real workout and see if FitForge feels like
            your place. Worst case, you got a good session out of it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ActionButton onClick={() => go("contact")}>Book Your Free Trial</ActionButton>
            <ActionButton variant="outline" onClick={() => go("schedule")}>
              View Schedule
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- CONTACT STRIP ------------------------------ */

function ContactStrip({ go }: { go: (p: PageId) => void }) {
  const items = [
    { icon: MapPin, label: "Visit us", value: "14B Admiralty Way, Lekki Phase 1, Lagos" },
    { icon: Phone, label: "Call us", value: "+234 802 345 7890" },
    { icon: Mail, label: "Email us", value: "hello@fitforge.ng" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={0.07 * i}>
              <button
                onClick={() => go("contact")}
                className="group w-full text-left rounded-2xl border border-[#E8E6E1] p-7 hover:border-[#FF4A1A] hover:shadow-[0_16px_40px_rgba(255,74,26,0.1)] transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-xl bg-[#FF4A1A]/10 flex items-center justify-center group-hover:bg-[#FF4A1A] transition-colors">
                  <item.icon className="w-5 h-5 text-[#FF4A1A] group-hover:text-white transition-colors" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B93A0]">{item.label}</p>
                <p className="mt-1.5 font-medium text-[#12141A]">{item.value}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- EXPORT ---------------------------------- */

export function HomeView({ go }: { go: (p: PageId) => void }) {
  return (
    <>
      <Hero go={go} />
      <Welcome go={go} />
      <ProgramsTeaser go={go} />
      <WhyUs />
      <StatsBand />
      <SchedulePreview go={go} />
      <Team go={go} />
      <Pricing go={go} />
      <Testimonials />
      <BlogTeaser go={go} />
      <CtaBanner go={go} />
      <ContactStrip go={go} />
    </>
  );
}
