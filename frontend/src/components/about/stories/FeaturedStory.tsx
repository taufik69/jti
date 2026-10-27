import { Image } from "@/components/ui/Image";
import { stories } from "@/content/about/stories";

const featured = stories.find((s) => s.name === "Jadwa Shawareb") ?? stories[0];

/** Hero aside: one student's words set large, with her photo and course. */
export function FeaturedStory() {
  return (
    <figure className="rounded-card bg-plum-950 p-8 text-white md:p-10">
      <span aria-hidden className="block font-serif text-6xl leading-none text-gold-500">“</span>
      <blockquote className="mt-2 text-h3 font-normal text-white">{featured.highlight}</blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
        {featured.photo && <Image src={featured.photo} alt="" width={56} height={56} className="size-14 rounded-full object-cover ring-2 ring-gold-500" />}
        <span>
          <span className="block font-medium text-white">{featured.name}</span>
          <span className="block text-[0.875rem] text-white/65">Diploma of Early Childhood Education and Care student</span>
        </span>
      </figcaption>
    </figure>
  );
}
