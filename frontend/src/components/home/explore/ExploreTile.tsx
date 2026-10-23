import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { ExploreTile as ExploreTileData } from "@/content/explore";
import { cn } from "@/lib/cn";

interface ExploreTileProps {
  tile: ExploreTileData;
  /** Landscape on small screens (used for the first tile spanning two columns). */
  wide?: boolean;
}

export function ExploreTile({ tile, wide = false }: ExploreTileProps) {
  return (
    <Link
      href={tile.href}
      className={cn(
        "group relative block overflow-hidden rounded-card bg-plum-900",
        wide ? "aspect-[16/10] lg:aspect-[3/4]" : "aspect-[3/4]",
      )}
    >
      <Image
        src={tile.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 20vw, 50vw"
        quality={85}
        style={{ objectPosition: tile.position }}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-950/40 to-transparent" />
      <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-control bg-gold-500 text-plum-950 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Icon icon={ArrowUpRight} />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-lg font-medium leading-snug text-white">{tile.title}</h3>
        <p className="mt-1.5 text-[0.875rem] leading-snug text-white/80">{tile.text}</p>
      </div>
    </Link>
  );
}
