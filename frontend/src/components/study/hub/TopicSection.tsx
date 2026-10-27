import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { topicPages, type studyTopics } from "@/content/study";
import { cn } from "@/lib/cn";
import { GuideCard } from "./GuideCard";

interface TopicSectionProps {
  topic: (typeof studyTopics)[number];
  index: number;
}

/** Topic heading on the left (sticky on large screens), its guides as cards on the right. */
export function TopicSection({ topic, index }: TopicSectionProps) {
  return (
    <section id={topic.id} aria-labelledby={`${topic.id}-title`} className={cn("scroll-mt-24 py-16 md:py-20", index % 2 ? "bg-paper" : "bg-canvas")}>
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal from="left" className="lg:sticky lg:top-32">
            <SectionLabel index={String(index + 1).padStart(2, "0")}>{`${topic.slugs.length} ${topic.slugs.length === 1 ? "guide" : "guides"}`}</SectionLabel>
            <h2 id={`${topic.id}-title`} className="mt-5 text-h2 text-ink">{topic.label}</h2>
            <p className="mt-4 max-w-[36ch]">{topic.blurb}</p>
          </Reveal>
        </div>
        <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {topicPages(topic.slugs).map((page) => (
            <RevealItem key={page.slug} className={topic.slugs.length === 1 ? "sm:col-span-2" : undefined}>
              <GuideCard page={page} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
