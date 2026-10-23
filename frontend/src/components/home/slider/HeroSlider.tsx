"use client";

import { A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { slides } from "@/content/slides";
import { HeroSlide } from "./HeroSlide";
import { HeroSliderControls } from "./HeroSliderControls";
import { useSliderAutoplay } from "./useSliderAutoplay";

/** Faint radial glows on the plum band. */
const glow =
  "bg-[radial-gradient(50rem_30rem_at_85%_10%,rgb(139_79_171/0.35),transparent_70%),radial-gradient(40rem_25rem_at_0%_100%,rgb(255_203_105/0.10),transparent_70%)]";

export function HeroSlider() {
  const { canPlay, playing, setSwiper, toggle } = useSliderAutoplay();

  return (
    <section aria-roledescription="carousel" aria-label="Highlights" className={`relative bg-plum-950 ${glow}`}>
      <h1 className="sr-only">Job Training Institute — vocational training in Melbourne</h1>
      <Swiper
        modules={[A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
        onSwiper={setSwiper}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={700}
        loop
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={canPlay ? { delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false } : false}
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        pagination={{ el: ".hero-pagination", clickable: true }}
        a11y={{ prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} priority={i === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
      <HeroSliderControls playing={playing} canPlay={canPlay} onTogglePlay={toggle} />
    </section>
  );
}
