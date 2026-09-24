"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, Clock, Menu, X, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./logo";
import { BRAND } from "@/lib/site";

export type PageId = "home" | "about" | "programs" | "schedule" | "blog" | "contact";

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "schedule", label: "Schedule" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#0B0C0F] text-white/70 text-xs">
      <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#FF4A1A]" /> {BRAND.phone}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#FF4A1A]" /> {BRAND.email}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FF4A1A]" /> {BRAND.shortHours}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/40">Follow us</span>
          <a href="#" aria-label="Facebook" className="hover:text-[#FF4A1A] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#FF4A1A] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#FF4A1A] transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
          <a href="#" aria-label="Youtube" className="hover:text-[#FF4A1A] transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  );
}

export function Navbar({ page, go }: { page: PageId; go: (p: PageId) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (p: PageId) => {
    setOpen(false);
    go(p);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-[#0B0C0F]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-[#0B0C0F]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">
          <button onClick={() => nav("home")} aria-label="FitForge home" className="shrink-0">
            <Logo />
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => nav(item.id)}
                className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                  page === item.id ? "text-[#FF4A1A]" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                {page === item.id && (
                  <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-[#FF4A1A] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => nav("contact")}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF4A1A] px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#E8420A] hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(255,74,26,0.3)]"
            >
              Free Trial
            </button>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-white/10 bg-[#0B0C0F] px-6 py-4" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => nav(item.id)}
                className={`block w-full text-left py-3 text-sm font-semibold uppercase tracking-wider border-b border-white/5 last:border-0 ${
                  page === item.id ? "text-[#FF4A1A]" : "text-white/75"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => nav("contact")}
              className="mt-4 w-full rounded-full bg-[#FF4A1A] py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Book a Free Trial
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
