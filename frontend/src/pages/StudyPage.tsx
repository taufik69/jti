import { useParams } from "react-router";
import { PageHero } from "@/components/page/PageHero";
import { StudyBlocks } from "@/components/study/StudyBlocks";
import { StudyHelp } from "@/components/study/StudyHelp";
import { StudyMobileNav } from "@/components/study/StudyMobileNav";
import { StudyPager } from "@/components/study/StudyPager";
import { StudySidebar } from "@/components/study/StudySidebar";
import { Container } from "@/components/ui/Container";
import { findStudyPage, topicOf } from "@/content/study";
import { NotFoundPage } from "./NotFoundPage";

/** /study/:slug — one template for every "Study with us" page, fed by content/study. */
export function StudyPage() {
  const { slug = "" } = useParams();
  const page = findStudyPage(slug);
  if (!page) return <NotFoundPage />;
  const topic = topicOf(page.slug)?.label ?? "Study with us";

  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>{`${page.title} · Job Training Institute`}</title>
      <meta name="description" content={page.summary} />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Study with us", href: "/study" }, { label: page.title }]}
        label={topic}
        title={page.title}
        intro={<p>{page.summary}</p>}
        aside={<StudyHelp />}
      />
      <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[17rem_1fr] lg:gap-16">
        <StudySidebar page={page} />
        <div className="min-w-0 max-w-3xl">
          <StudyMobileNav currentSlug={page.slug} />
          <div className="mt-10 space-y-16 lg:mt-0">
            {page.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28">
                <h2 id={`${section.id}-title`} className="mb-6 text-h2 text-ink">{section.title}</h2>
                <StudyBlocks blocks={section.blocks} />
              </section>
            ))}
          </div>
          <StudyPager page={page} />
        </div>
      </Container>
    </div>
  );
}
