import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { courseHelpLinks } from "@/content/course-help-links";
import { site } from "@/content/site";

/** Closing band: talk to admissions, or read the handbooks and fee schedule first. */
export function CoursesHelp() {
  return (
    <section className="mt-20 grid gap-8 rounded-media border border-line bg-paper p-7 md:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
      <div>
        <h2 className="text-h2 text-ink">Need help choosing?</h2>
        <p className="mt-4 max-w-[46ch] text-left text-body">
          Tell admissions about your background and the work you want to do. They'll suggest a course and explain the
          entry requirements, fees and study options.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/#enquire" withArrow>Enquire now</Button>
          <a
            href={site.phones.general.href}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 font-medium text-ink transition-colors hover:border-ink"
          >
            <Icon icon={Phone} size={16} />
            {site.phones.general.label}
          </a>
        </div>
      </div>
      <ul className="grid content-start gap-2 sm:grid-cols-2">
        {courseHelpLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center justify-between gap-3 rounded-control border border-line bg-canvas px-4 py-3.5 text-[0.9375rem] text-ink transition-colors hover:border-ink"
            >
              {link.label}
              <Icon icon={ArrowUpRight} size={16} className="shrink-0 text-muted group-hover:text-ink" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
