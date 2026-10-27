import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Image } from "@/components/ui/Image";
import { cn } from "@/lib/cn";

interface EditorialSplitProps {
  image: string;
  alt: string;
  children: ReactNode;
  /** Put the photo on the right. Alternate this between sections for rhythm. */
  reverse?: boolean;
  /** Photo crop; portrait suits people, landscape suits groups and places. */
  ratio?: "portrait" | "landscape";
  position?: string;
}

const ratios = { portrait: "aspect-[4/5]", landscape: "aspect-[4/3]" };

/** Photo and copy side by side on large screens, stacked on phones. */
export function EditorialSplit({ image, alt, children, reverse = false, ratio = "landscape", position }: EditorialSplitProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal from={reverse ? "right" : "left"} className={cn("lg:col-span-6", reverse && "lg:order-2")}>
        <div className={cn("relative overflow-hidden rounded-card bg-plum-100", ratios[ratio])}>
          <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 600px, 100vw" style={{ objectPosition: position }} className="object-cover" />
        </div>
      </Reveal>
      <Reveal from={reverse ? "left" : "right"} delay={0.08} className="lg:col-span-6 lg:px-4">
        {children}
      </Reveal>
    </div>
  );
}
