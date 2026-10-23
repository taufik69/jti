import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** Teach tailwind-merge our custom tokens so `text-h1` is a size, not a colour. */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "h1", "h2", "h3", "body-lg", "body", "label"],
      radius: ["control", "card", "media"],
      shadow: ["float"],
    },
  },
});

/** Later classes win on conflict, e.g. cn("inline-flex", "hidden") → "hidden". */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
