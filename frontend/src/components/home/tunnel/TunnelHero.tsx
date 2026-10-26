"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { REST_PROGRESS, tunnelCards } from "./tunnel-cards";
import { ScrollPrompt } from "./ScrollPrompt";
import { TunnelBackdrop } from "./TunnelBackdrop";
import { TunnelCard } from "./TunnelCard";
import { TunnelCopy } from "./TunnelCopy";
import { usePointerParallax } from "./usePointerParallax";
import { useStageSize } from "./useStageSize";

/** Header heights: MainBar is h-18 / lg:h-20 and sticky, so the stage sits just below it. */
const stageBox =
  "sticky top-18 h-[calc(100svh-4.5rem)] lg:top-20 lg:h-[calc(100svh-5rem)] " +
  "motion-reduce:static motion-reduce:min-h-[42rem]";

/**
 * Home hero: page scroll flies the camera down a tunnel of campus photos.
 * The tall section gives the sticky stage room to play; reduced motion gets a still frame.
 */
export function TunnelHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const stage = useStageSize(stageRef);
  const pointer = usePointerParallax(!reduce);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.0001 });
  const progress = useTransform(smooth, (v) => (reduce ? 0.45 : REST_PROGRESS + v * (1 - REST_PROGRESS)));
  const copyProgress = useTransform(smooth, (v) => (reduce ? 0 : v));

  return (
    <section ref={sectionRef} aria-label="Welcome" className="relative h-[260svh] bg-plum-950 motion-reduce:h-auto">
      <div
        ref={stageRef}
        className={`${stageBox} flex items-center justify-center overflow-hidden`}
        style={{ perspective: stage.isMobile ? "900px" : "1200px" }}
      >
        <TunnelBackdrop />
        <TunnelCopy progress={copyProgress} />
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ transformStyle: "preserve-3d" }}>
          {tunnelCards.map((card) => (
            <TunnelCard
              key={card.index}
              card={card}
              total={tunnelCards.length}
              progress={progress}
              pointer={pointer}
              stage={stage}
            />
          ))}
        </div>
        <ScrollPrompt progress={copyProgress} />
      </div>
    </section>
  );
}
