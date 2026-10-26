import { Reveal } from "@/components/motion/Reveal";
import { GridBackground } from "@/components/ui/GridBackground";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { videoFacts, videoHighlights } from "@/content/video";
import { VideoActions } from "./VideoActions";
import { VideoFrame } from "./VideoFrame";
import { VideoHighlights } from "./VideoHighlights";

/** Centred heading, then the video flanked by highlights (left) and provider facts (right). */
export function VideoSection() {
  return (
    <section aria-labelledby="video-title" className="relative isolate overflow-hidden bg-plum-950 py-20 text-white md:py-28">
      <GridBackground />
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionLabel onDark>Campus life</SectionLabel>
          <h2 id="video-title" className="mt-5 text-h2 text-white">
            How life at Job Training Institute looks
          </h2>
          <p className="mt-5 max-w-[46ch] text-center text-body-lg text-white/80">
            Classes, trainers and the people you will study with. Press play for a short film from JTI.
          </p>
        </Reveal>
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="md:col-span-2 lg:order-2 lg:col-span-6" delay={0.1}>
            <VideoFrame />
          </Reveal>
          <Reveal className="lg:order-1 lg:col-span-3" from="left">
            <VideoHighlights items={videoHighlights} side="left" />
          </Reveal>
          <Reveal className="lg:order-3 lg:col-span-3" from="right">
            <VideoHighlights items={videoFacts} side="right" />
          </Reveal>
        </div>
        <Reveal className="mt-14" delay={0.2}>
          <VideoActions />
        </Reveal>
      </Container>
    </section>
  );
}
