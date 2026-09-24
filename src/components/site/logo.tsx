"use client";

export function Logo({ light = true, size = "md" }: { light?: boolean; size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? { box: 30, text: "text-lg" } : size === "lg" ? { box: 44, text: "text-2xl" } : { box: 36, text: "text-xl" };
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        className="relative inline-flex items-center justify-center rounded-lg bg-[#FF4A1A] shadow-[0_4px_14px_rgba(255,74,26,0.35)]"
        style={{ width: dims.box, height: dims.box }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-[62%] h-[62%]" aria-hidden="true">
          <path d="M13.5 2 4 13.2h6.1L9.4 22 20 10.4h-6.4L13.5 2Z" fill="#fff" />
        </svg>
      </span>
      <span className={`font-oswald font-semibold uppercase tracking-wide leading-none ${dims.text} ${light ? "text-white" : "text-[#12141A]"}`}>
        Fit<span className="text-[#FF4A1A]">Forge</span>
      </span>
    </span>
  );
}
