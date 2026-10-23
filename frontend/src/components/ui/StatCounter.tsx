"use client";

import type { ReactNode } from "react";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  note?: string;
  /** Rendered icon, so a server parent can pass it across the client boundary. */
  icon?: ReactNode;
}

export function StatCounter({ value, decimals = 0, suffix = "", label, note, icon }: StatCounterProps) {
  const { ref, text } = useCountUp<HTMLParagraphElement>(value, decimals);

  return (
    <div className="flex h-full flex-col">
      {icon && (
        <span className="mb-6 inline-flex size-11 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-400">
          {icon}
        </span>
      )}
      {/* Final value for screen readers; the animated digits are hidden from them. */}
      <p ref={ref} className="text-[clamp(2.75rem,2.25rem+2.5vw,4.5rem)] font-semibold leading-none tracking-tight text-gold-400 tabular-nums">
        <span aria-hidden>
          {text}
          <span className="ml-0.5 text-[0.6em] text-gold-400/80">{suffix}</span>
        </span>
        <span className="sr-only">
          {value.toFixed(decimals)}
          {suffix}
        </span>
      </p>
      <p className="mt-4 max-w-[24ch] text-left text-body-lg leading-snug text-white">{label}</p>
      {note && (
        <p className="mt-auto pt-5 text-left text-[0.8125rem] text-white/60">
          <span className="mr-2 inline-block size-1.5 rounded-full bg-gold-500 align-middle" aria-hidden />
          {note}
        </p>
      )}
    </div>
  );
}
