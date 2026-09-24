"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHead, PageHero } from "./bits";
import { IMAGES, BRAND } from "@/lib/site";

const GOALS = [
  "Lose fat and feel lighter",
  "Build strength and muscle",
  "Improve mobility and posture",
  "Train for an event",
  "Just get healthier overall",
];

const INFO = [
  {
    icon: MapPin,
    title: "Studio address",
    lines: ["14B Admiralty Way,", "Lekki Phase 1, Lagos"],
  },
  {
    icon: Phone,
    title: "Phone and WhatsApp",
    lines: [BRAND.phone, "Call or message anytime"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [BRAND.email, "We reply within one business day"],
  },
  {
    icon: Clock,
    title: "Opening hours",
    lines: ["Mon to Sat: 6:00am to 9:00pm", "Sun: Open gym 4:00pm to 7:00pm"],
  },
];

export function ContactView() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: GOALS[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = () => {
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email does not look right";
    if (form.phone.trim().length < 7) next.phone = "Please add a phone number we can reach you on";
    if (form.message.trim().length < 10) next.message = "A sentence or two about your goals helps us prepare";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent. We will get back to you within one business day.", {
        description: `Thanks ${form.name.split(" ")[0]}, talk soon.`,
      });
      setForm({ name: "", email: "", phone: "", goal: GOALS[0], message: "" });
    }, 900);
  };

  const inputCls = (k: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#12141A] placeholder:text-[#A6ADB8] outline-none transition-all focus:border-[#FF4A1A] focus:ring-2 focus:ring-[#FF4A1A]/15 ${
      errors[k] ? "border-red-400" : "border-[#E3E0DA]"
    }`;

  return (
    <>
      <PageHero
        kicker="Contact us"
        title="Let us get you started"
        text="Book a free trial, ask a question or just come see the floor. However you reach out, a real person answers."
        image={IMAGES.strength}
      />

      {/* Info cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i} className="h-full">
              <div className="h-full rounded-2xl border border-[#E8E6E1] p-7 hover:border-[#FF4A1A]/50 hover:shadow-[0_16px_40px_rgba(255,74,26,0.08)] transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-[#FF4A1A]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#FF4A1A]" />
                </span>
                <h3 className="mt-5 font-oswald text-base font-semibold uppercase tracking-wider text-[#12141A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6470]">
                  {item.lines[0]}
                  <br />
                  {item.lines[1]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <Reveal>
            <div className="rounded-2xl bg-[#0B0C0F] p-8 lg:p-10 h-full">
              <SectionHead
                light
                kicker="Free trial"
                title="Book your first session"
                text="Fill this in and we will confirm your trial slot by phone or WhatsApp within one business day."
              />
              <div className="mt-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Full name
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Adaeze Okonkwo"
                      className={inputCls("name")}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+234 800 000 0000"
                      className={inputCls("phone")}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                    className={inputCls("email")}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="goal" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    What is your main goal?
                  </label>
                  <select
                    id="goal"
                    value={form.goal}
                    onChange={(e) => set("goal", e.target.value)}
                    className={`${inputCls("goal")} appearance-none cursor-pointer`}
                  >
                    {GOALS.map((g) => (
                      <option key={g} value={g} className="text-[#12141A]">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Tell us a bit about yourself
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Been training for a while, stopped, restarting. Looking for structure and accountability."
                    className={`${inputCls("message")} resize-none`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>
                <button
                  onClick={submit}
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FF4A1A] py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#E8420A] hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send and Book Trial
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-white/40">
                  No spam and no pressure. One message to arrange your session, that is it.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#E8E6E1] flex-1 min-h-[340px] relative bg-[#F6F6F4]">
              <iframe
                title="FitForge studio location on Admiralty Way, Lekki Phase 1, Lagos"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.4620%2C6.4330%2C3.4870%2C6.4500&layer=mapnik&marker=6.4415%2C3.4745"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl bg-[#FF4A1A] p-7 text-white">
              <p className="font-oswald text-xl font-semibold uppercase">Walking in is welcome</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Prefer to see a place before you commit? Show up any weekday between 7am and 8pm, mention this
                website at the front desk and we will fit you into a session that day.
              </p>
              <p className="mt-4 text-sm font-semibold">{BRAND.address}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
