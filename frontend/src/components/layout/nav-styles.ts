export const navTopLink =
  "relative inline-flex h-11 items-center gap-1 whitespace-nowrap px-2.5 text-[0.9375rem] font-medium text-ink xl:px-3 " +
  "transition-colors duration-150 hover:text-plum-700 data-[state=open]:text-plum-700 " +
  "data-[current]:text-plum-700 hover:after:scale-x-100 data-[current]:after:scale-x-100 " +
  "after:absolute after:inset-x-2.5 after:bottom-0.5 xl:after:inset-x-3 after:h-0.5 after:origin-left after:scale-x-0 " +
  "after:bg-gold-500 after:transition-transform after:duration-200 " +
  "data-[state=open]:after:scale-x-100";

/** Radix sizes the viewport to the open panel; it overlays content, so no CLS. */
export const menuViewport =
  "relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] " +
  "w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-card " +
  "border border-line bg-paper shadow-float transition-[width,height] duration-200 ease-out " +
  "data-[state=open]:animate-[menu-in_200ms_var(--ease-out-soft)] " +
  "data-[state=closed]:animate-[menu-out_150ms_ease-in]";

export const menuPanel = "absolute left-0 top-0 p-8";
