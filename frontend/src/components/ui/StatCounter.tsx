"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  note?: string;
}

export function StatCounter({ value, decimals = 0, suffix = "", label, note }: StatCounterProps) {
  const { ref, text } = useCountUp<HTMLParagraphElement>(value, decimals);

  return (
    <div>
      {/* Final value for screen readers; the animated digits are hidden from them. */}
      <p ref={ref} className="text-[clamp(3rem,2.25rem+3.5vw,5rem)] font-semibold leading-none tracking-tight text-gold-400 tabular-nums">
        <span aria-hidden>
          {text}
          {suffix}
        </span>
        <span className="sr-only">
          {value.toFixed(decimals)}
          {suffix}
        </span>
      </p>
      <p className="mt-4 max-w-[22ch] text-body-lg text-white">{label}</p>
      {note && <p className="mt-2 text-[0.875rem] text-white/70">{note}</p>}
    </div>
  );
}
