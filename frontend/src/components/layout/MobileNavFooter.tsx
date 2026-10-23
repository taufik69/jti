import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function MobileNavFooter() {
  const phones = [site.phones.general, site.phones.city];

  return (
    <div className="shrink-0 border-t border-line bg-paper px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
      <div className="mb-4 flex justify-between text-[0.9375rem]">
        {phones.map((phone) => (
          <a key={phone.href} href={phone.href} className="font-medium text-plum-700">
            {phone.label}
          </a>
        ))}
      </div>
      <Button href={site.applyHref} size="lg" withArrow className="w-full">
        Apply now
      </Button>
    </div>
  );
}
