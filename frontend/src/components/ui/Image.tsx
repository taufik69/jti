import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Fill the nearest positioned parent, like next/image `fill`. */
  fill?: boolean;
  /** Above-the-fold image: load eagerly with high priority. */
  priority?: boolean;
}

/** Thin <img> wrapper keeping the next/image props the site used. */
export function Image({ fill = false, priority = false, className, ...rest }: ImageProps) {
  return (
    <img
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn(fill && "absolute inset-0 size-full", className)}
      {...rest}
    />
  );
}
