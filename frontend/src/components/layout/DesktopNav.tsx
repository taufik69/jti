import { Link } from "@/components/ui/Link";
import { useLocation } from "react-router";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { mainNav } from "@/content/nav";
import { MegaPanel } from "./MegaPanel";
import { isNavActive } from "./nav-active";
import { menuViewport, navTopLink } from "./nav-styles";

/** Radix handles keyboard support; delayDuration is the hover-intent window. */
export function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <NavigationMenu.Root
      aria-label="Main"
      delayDuration={120}
      skipDelayDuration={300}
      className="hidden lg:block"
    >
      <NavigationMenu.List className="flex items-center">
        {mainNav.map((item) => (
          <NavigationMenu.Item key={item.label}>
            {item.columns ? (
              <>
                <NavigationMenu.Trigger
                  className={`${navTopLink} group cursor-pointer`}
                  data-current={isNavActive(item, pathname) || undefined}
                >
                  {item.label}
                  <Icon
                    icon={ChevronDown}
                    size={16}
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </NavigationMenu.Trigger>
                <MegaPanel item={item} />
              </>
            ) : (
              <NavigationMenu.Link asChild active={isNavActive(item, pathname)}>
                <Link href={item.href} className={navTopLink} data-current={isNavActive(item, pathname) || undefined}>
                  {item.label}
                </Link>
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <div className="absolute inset-x-0 top-full flex justify-center">
        <NavigationMenu.Viewport className={menuViewport} />
      </div>
    </NavigationMenu.Root>
  );
}
