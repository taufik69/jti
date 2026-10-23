import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionTone = "canvas" | "paper" | "cream" | "plum";

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  className?: string;
  labelledBy?: string;
}

const tones: Record<SectionTone, string> = {
  canvas: "bg-canvas",
  paper: "bg-paper",
  cream: "bg-gold-100",
  plum: "bg-plum-950 text-white/85 [&_h2]:text-white [&_h3]:text-white",
};

export function Section({ children, id, tone = "canvas", className, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 md:py-24", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
