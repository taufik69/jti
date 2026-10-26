import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { NavFeature } from "@/content/types";

interface MegaFeatureProps {
  feature: NavFeature;
}

export function MegaFeature({ feature }: MegaFeatureProps) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={feature.href} className="group flex flex-col overflow-hidden rounded-card bg-plum-950 text-white">
        <span className="relative block aspect-[4/3] overflow-hidden">
          <Image
            src={feature.image}
            alt=""
            fill
            sizes="240px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        </span>
        <span className="flex flex-1 flex-col p-5">
          <span className="text-label text-gold-400">{feature.label}</span>
          <span className="mt-2 block font-medium leading-snug text-white">{feature.title}</span>
          <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[0.875rem] text-gold-100">
            Read more
            <Icon
              icon={ArrowRight}
              size={16}
              className="transition-transform duration-150 group-hover:translate-x-[3px]"
            />
          </span>
        </span>
      </Link>
    </NavigationMenu.Link>
  );
}
