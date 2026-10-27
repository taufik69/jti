import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

/** Hero aside on every study page: who to ask. */
export function StudyHelp() {
  return (
    <div className="rounded-card border border-line bg-paper p-7 shadow-float md:p-8">
      <p className="text-label text-plum-700">Need help?</p>
      <p className="mt-3 text-h3 text-ink">Talk to our student team</p>
      <ul className="mt-5 space-y-3 text-[0.9375rem]">
        <li>
          <a href={site.phones.general.href} className="inline-flex items-center gap-3 font-medium text-ink hover:text-plum-700">
            <Icon icon={Phone} size={20} className="text-plum-500" />
            {site.phones.general.label}
          </a>
        </li>
        <li>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 font-medium text-ink hover:text-plum-700">
            <Icon icon={Mail} size={20} className="text-plum-500" />
            {site.email}
          </a>
        </li>
      </ul>
      <Button href="/#enquire" variant="outline" className="mt-6 w-full" withArrow>
        Send an enquiry
      </Button>
    </div>
  );
}
