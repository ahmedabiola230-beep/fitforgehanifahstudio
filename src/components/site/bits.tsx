"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/* Scroll reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-[#FF6B3D]" : "text-[#E8420A]"
      }`}
    >
      <span className="h-px w-8 bg-current inline-block" />
      {children}
    </span>
  );
}

export function SectionHead({
  kicker,
  title,
  text,
  light = false,
  center = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Kicker light={light}>{kicker}</Kicker>
      <h2
        className={`mt-4 font-oswald text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold uppercase leading-[1.08] tracking-tight ${
          light ? "text-white" : "text-[#12141A]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/65" : "text-[#5B6470]"}`}>{text}</p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({ kicker, title, text, image }: { kicker: string; title: string; text: string; image: string }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0C0F]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/88 to-[#0B0C0F]/55" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <Kicker light>{kicker}</Kicker>
          <h1 className="mt-4 font-oswald text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase leading-[1.05] tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/65 max-w-xl">{text}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function ActionButton({
  children,
  onClick,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline" | "dark";
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-[#FF4A1A] text-white hover:bg-[#E8420A] shadow-[0_10px_24px_rgba(255,74,26,0.28)]"
      : variant === "dark"
        ? "bg-[#12141A] text-white hover:bg-[#FF4A1A]"
        : "border-2 border-white/30 text-white hover:border-[#FF4A1A] hover:bg-[#FF4A1A] hover:text-white";
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
