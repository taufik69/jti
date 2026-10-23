import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

/** Closing call to action that opens the footer, on the same grid texture as the dark bands. */
export function FooterCta() {
  return (
    <div className="relative isolate overflow-hidden border-b border-white/10">
      <GridBackground />
      <Container className="flex flex-col gap-8 py-14 md:py-20 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-2xl" from="left">
          <p className="text-label text-gold-400">Start your training</p>
          <h2 className="mt-4 text-h2 text-white">Ready to take the next step in your career?</h2>
          <p className="mt-4 max-w-[52ch] text-white/75">
            Talk to our course advisors about intakes, fees and study options at our City and
            Dandenong campuses.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-3" delay={0.1} from="right">
          <Button href={site.applyHref} size="lg" withArrow>
            Apply now
          </Button>
          <Button href="/courses" size="lg" variant="inverse">
            Browse courses
          </Button>
        </Reveal>
      </Container>
    </div>
  );
}
