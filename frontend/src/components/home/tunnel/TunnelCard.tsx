"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "motion/react";
import { cardWidth, STAGGER_SPAN, type StageSize, type TunnelCardData } from "./tunnel-cards";
import type { PointerOffset } from "./usePointerParallax";

interface TunnelCardProps {
  card: TunnelCardData;
  total: number;
  progress: MotionValue<number>;
  pointer: PointerOffset;
  stage: StageSize;
}

/** One photo travelling from deep in the tunnel past the camera as progress runs 0 → 1. */
export function TunnelCard({ card, total, progress, pointer, stage }: TunnelCardProps) {
  const start = (card.index / total) * (1 - STAGGER_SPAN);
  const local = useTransform(progress, [start, start + STAGGER_SPAN], [0, 1]);
  const z = useTransform(local, [0, 1], stage.isMobile ? [-1200, 350] : [-1700, 500]);
  const opacity = useTransform(local, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);

  const baseX = card.angleCos * stage.width * card.radiusX;
  const baseY = card.angleSin * stage.height * card.radiusY;
  const pan = stage.isMobile ? 20 : 45;

  const transform = useTransform([z, pointer.x, pointer.y], ([currZ, px, py]: number[]) => {
    const x = baseX - px * pan;
    const y = baseY - py * pan;
    return `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${currZ}px) rotateZ(${card.rotateZ}deg)`;
  });

  return (
    <motion.div
      style={{ width: cardWidth(stage), transform, opacity, zIndex: card.index + 1 }}
      className="absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform"
    >
      <div className="relative size-full overflow-hidden rounded-card bg-plum-800 shadow-2xl shadow-black/50 ring-1 ring-white/15">
        <Image
          src={card.image.src}
          alt=""
          fill
          sizes="260px"
          style={{ objectPosition: card.image.position }}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-plum-950/85 via-plum-950/10 to-transparent p-4">
          <span className="text-label text-gold-400">{card.image.label}</span>
        </div>
      </div>
    </motion.div>
  );
}
