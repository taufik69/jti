"use client";

import { motion } from "motion/react";
import { audiences } from "@/content/home";
import type { Audience } from "@/content/types";
import { cn } from "@/lib/cn";

interface AudienceToggleProps {
  value: Audience;
  onChange: (audience: Audience) => void;
}

export function AudienceToggle({ value, onChange }: AudienceToggleProps) {
  return (
    <div role="group" aria-label="Show courses for" className="flex w-full rounded-control border border-line bg-paper p-1 sm:inline-flex sm:w-auto">
      {audiences.map((audience) => {
        const active = audience.id === value;
        return (
          <button
            key={audience.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(audience.id)}
            className={cn(
              "relative h-10 flex-1 cursor-pointer whitespace-nowrap px-5 text-[0.9375rem] font-medium transition-colors duration-150 sm:flex-none",
              active ? "text-white" : "text-body hover:text-plum-700",
            )}
          >
            {active && (
              <motion.span
                layoutId="audience-pill"
                className="absolute inset-0 rounded-control bg-plum-700"
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative">
              {audience.label}
              <span className="hidden sm:inline"> students</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
