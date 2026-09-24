"use client";

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./logo";
import { BRAND } from "@/lib/site";
import type { PageId } from "./navbar";

const quickLinks: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "programs", label: "Programs" },
  { id: "schedule", label: "Schedule" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const programLinks = [
  "One on One Personal Training",
  "Small Group Strength",
  "Fat Loss Kickstart",
  "Mobility and Recovery",
  "Nutrition Coaching",
  "Online Coaching",
];

export function Footer({ go }: { go: (p: PageId) => void }) {
  return (
    <footer className="bg-[#0B0C0F] text-white/60 mt-auto">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              A personal training studio in Lekki Phase 1 built on one belief: with a real plan and a real
              coach, ordinary people do extraordinary things.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "Youtube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 hover:border-[#FF4A1A] hover:bg-[#FF4A1A] hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-white text-base font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="transition-colors hover:text-[#FF4A1A] text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-oswald text-white text-base font-semibold uppercase tracking-wider">Our Programs</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {programLinks.map((p) => (
                <li key={p}>
                  <button onClick={() => go("programs")} className="transition-colors hover:text-[#FF4A1A] text-left">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-oswald text-white text-base font-semibold uppercase tracking-wider">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#FF4A1A] shrink-0" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#FF4A1A] shrink-0" />
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-[#FF4A1A] transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#FF4A1A] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#FF4A1A] transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#FF4A1A] shrink-0" />
                <span>Mon to Sat: 6:00am to 9:00pm<br />Sun: Open gym 4pm to 7pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.</p>
          <p>
            Designed By{" "}
            <a
              href={BRAND.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/85 hover:text-[#FF4A1A] transition-colors"
            >
              {BRAND.designer}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
