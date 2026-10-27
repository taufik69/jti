import { Image } from "@/components/ui/Image";
import { site } from "@/content/site";

/** Campus building with a smaller student photo overlapping its corner, plus a "since" tag. */
export function HeroCollage() {
  return (
    <div className="relative pb-10 pl-0 sm:pl-16 lg:pl-10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-plum-100 sm:aspect-[5/4]">
        <Image
          src="/images/jti/city-campus-building.jpg"
          alt="JTI's city campus building on Collins Street, Melbourne"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          style={{ objectPosition: "center 30%" }}
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 hidden w-[44%] overflow-hidden rounded-card border-4 border-canvas shadow-float sm:block">
        <div className="relative aspect-[4/3] bg-plum-100">
          <Image src="/images/jti/multicultural-day.jpg" alt="JTI students in traditional dress at Multicultural Day" fill sizes="260px" style={{ objectPosition: "center 40%" }} className="object-cover" />
        </div>
      </div>
      <p className="absolute right-4 top-4 rounded-full bg-paper/95 px-4 py-2 text-[0.8125rem] font-medium text-plum-700 shadow-float backdrop-blur">
        Training Melbourne since {site.founded}
      </p>
    </div>
  );
}
