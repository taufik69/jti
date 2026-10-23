"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import type { Swiper as SwiperInstance } from "swiper";

/** Autoplay that a visitor can pause (WCAG 2.2.2) and that never starts for reduced motion. */
export function useSliderAutoplay() {
  const reduce = useReducedMotion() ?? false;
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    if (!swiper) return;
    if (playing) swiper.autoplay.stop();
    else swiper.autoplay.start();
    setPlaying(!playing);
  };

  return { canPlay: !reduce, playing: playing && !reduce, setSwiper, toggle };
}
