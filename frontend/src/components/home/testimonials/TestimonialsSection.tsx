"use client";

import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/content/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialNav } from "./TestimonialNav";

/** Manual only: no autoplay, so visitors can read at their own pace. */
export function TestimonialsSection() {
  return (
    <Section labelledBy="testimonials-title" className="overflow-hidden">
      <SectionHeader
        id="testimonials-title"
        label="Testimonials"
        title="What our students say"
        aside={<TestimonialNav />}
      />
      <Swiper
        modules={[A11y, Keyboard, Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.08}
        breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 24 }, 1280: { slidesPerView: 3, spaceBetween: 24 } }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        navigation={{ prevEl: ".testimonial-prev", nextEl: ".testimonial-next" }}
        pagination={{ el: ".testimonial-pagination", clickable: true }}
        className="overflow-visible!"
      >
        {testimonials.map((entry) => (
          <SwiperSlide key={entry.name} className="h-auto!">
            <TestimonialCard entry={entry} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-pagination mt-8 flex justify-center" />
    </Section>
  );
}
