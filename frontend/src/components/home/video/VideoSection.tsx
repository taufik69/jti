import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { GridBackground } from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { video } from "@/content/video";
import { VideoFrame } from "./VideoFrame";
import { VideoHighlights } from "./VideoHighlights";

export function VideoSection() {
  return (
    <section aria-labelledby="video-title" className="relative isolate overflow-hidden bg-plum-950 py-20 text-white md:py-28">
      <GridBackground />
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel onDark>Campus life</SectionLabel>
          <h2 id="video-title" className="mt-5 text-h2 text-white">
            How life at Job Training Institute looks
          </h2>
          <p className="mt-5 max-w-[46ch] text-body-lg text-white/80">
            Classes, trainers and the people you will study with. Press play for a short film from JTI.
          </p>
          <VideoHighlights />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/#enquire" size="lg" withArrow>
              Talk to us
            </Button>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center gap-2 rounded-control px-1 font-medium text-gold-100 transition-colors duration-150 hover:text-gold-400 sm:px-4"
            >
              <Icon icon={PlayCircle} />
              Watch on YouTube
            </a>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <VideoFrame />
        </Reveal>
      </Container>
    </section>
  );
}
