import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

interface HeroSliderControlsProps {
  playing: boolean;
  canPlay: boolean;
  onTogglePlay: () => void;
}

const control =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-control border border-white/20 " +
  "text-white transition-colors duration-150 hover:border-gold-400 hover:text-gold-400";

/** Sibling of the Swiper, layered above it; Swiper finds these by class after mount. */
export function HeroSliderControls({ playing, canPlay, onTogglePlay }: HeroSliderControlsProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 lg:bottom-12">
      <Container className="pointer-events-auto flex items-center justify-between gap-6">
        <div className="hero-pagination flex items-center" />
        <div className="flex gap-2">
          {canPlay && (
            <button type="button" className={control} onClick={onTogglePlay} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>
              <Icon icon={playing ? Pause : Play} size={16} />
            </button>
          )}
          <button type="button" className={`hero-prev ${control}`} aria-label="Previous slide">
            <Icon icon={ChevronLeft} />
          </button>
          <button type="button" className={`hero-next ${control}`} aria-label="Next slide">
            <Icon icon={ChevronRight} />
          </button>
        </div>
      </Container>
    </div>
  );
}
