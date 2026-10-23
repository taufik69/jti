import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Slide } from "@/content/slides";
import { cn } from "@/lib/cn";

interface HeroSlideProps {
  slide: Slide;
  priority: boolean;
}

/** Text rises in when Swiper marks the slide active (Tailwind `in-[.swiper-slide-active]`). */
const enter =
  "translate-y-4 opacity-0 transition duration-700 ease-out " +
  "in-[.swiper-slide-active]:translate-y-0 in-[.swiper-slide-active]:opacity-100";

export function HeroSlide({ slide, priority }: HeroSlideProps) {
  return (
    <Container className="grid h-full items-center gap-8 pb-28 pt-8 lg:grid-cols-12 lg:gap-12 lg:pb-36 lg:pt-16">
      <div className="order-2 lg:order-1 lg:col-span-6">
        <p className={cn(enter, "text-label text-gold-400")}>{slide.eyebrow}</p>
        <h2 className={cn(enter, "mt-5 text-h1 text-white delay-100")}>{slide.title}</h2>
        <p className={cn(enter, "mt-5 max-w-[46ch] text-body-lg text-white/80 delay-200")}>{slide.text}</p>
        <div className={cn(enter, "mt-8 flex flex-wrap gap-3 delay-300")}>
          <Button href={slide.primary.href} size="lg" withArrow>
            {slide.primary.label}
          </Button>
          {slide.secondary && (
            <Button href={slide.secondary.href} size="lg" variant="inverse">
              {slide.secondary.label}
            </Button>
          )}
        </div>
      </div>
      <div className="relative order-1 lg:order-2 lg:col-span-6">
        <div aria-hidden className="absolute -inset-2 hidden translate-x-4 translate-y-4 rounded-media border border-gold-500/40 lg:block" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-media bg-plum-800 lg:aspect-[5/4]">
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 100vw"
            style={{ objectPosition: slide.image.position }}
            className="scale-105 object-cover transition-transform duration-[6000ms] ease-out in-[.swiper-slide-active]:scale-100"
          />
        </div>
      </div>
    </Container>
  );
}
