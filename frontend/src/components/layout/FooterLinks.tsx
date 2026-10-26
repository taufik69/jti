import { Link } from "@/components/ui/Link";
import type { NavLink } from "@/content/types";

interface FooterLinksProps {
  links: NavLink[];
}

const linkClass = "transition-colors duration-150 hover:text-white";

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="space-y-2.5 text-[0.9375rem]">
      {links.map((link) => (
        <li key={link.href}>
          {link.external ? (
            <a href={link.href} rel="noopener" className={linkClass}>
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
