import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { jtiVideos, type JtiVideo } from "@/content/about/videos";
import { ChannelPanel } from "./ChannelPanel";
import { VideoCard } from "./VideoCard";
import { VideoDialog } from "./VideoDialog";

/** Lead video beside the channel panel, then the other three in a row. */
export function VideoGallery() {
  const [playing, setPlaying] = useState<JtiVideo | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [lead, ...rest] = jtiVideos;
  const play = (video: JtiVideo) => {
    opener.current = document.activeElement as HTMLElement | null;
    setPlaying(video);
  };

  return (
    <section aria-labelledby="videos-title" className="bg-paper py-16 md:py-24">
      <Container>
        <h2 id="videos-title" className="sr-only">All videos</h2>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal from="left" className="lg:col-span-8">
            <VideoCard video={lead} onPlay={play} featured />
          </Reveal>
          <Reveal from="right" delay={0.08} className="lg:col-span-4 lg:pb-[4.5rem]">
            <ChannelPanel />
          </Reveal>
        </div>
        <Reveal stagger className="mt-14 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {rest.map((video) => (
            <RevealItem key={video.id}>
              <VideoCard video={video} onPlay={play} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
      <VideoDialog video={playing} onClose={() => setPlaying(null)} returnFocus={opener} />
    </section>
  );
}
