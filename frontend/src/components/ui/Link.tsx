import type { AnchorHTMLAttributes, Ref } from "react";
import { Link as RouterLink } from "react-router";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  ref?: Ref<HTMLAnchorElement>;
}

/**
 * Site paths ("/courses", "/#enquire") go through React Router; same-page hashes,
 * tel:, mailto: and external URLs stay plain anchors. Forwards ref for Radix `asChild`.
 */
export function Link({ href, ...rest }: LinkProps) {
  if (href.startsWith("/")) return <RouterLink to={href} {...rest} />;
  return <a href={href} {...rest} />;
}
