import type { NavItem } from "@/content/types";

/** A top-level item is active when the current path is its page or any page in its menu. */
export function isNavActive(item: NavItem, pathname: string): boolean {
  if (pathname === item.href) return true;
  return (item.columns ?? []).some((column) => column.links.some((link) => link.href === pathname));
}
