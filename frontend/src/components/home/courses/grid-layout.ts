/** Mobile: horizontal snap rail. Desktop: asymmetric 12-column grid. */
export const gridClass =
  "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scroll-px-5 " +
  "lg:mx-0 lg:grid lg:grid-cols-12 lg:overflow-visible lg:px-0 lg:pb-0";

const railItem = "w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-auto";

/** Slot spans by position: one tall feature, two stacked, then a row of thirds. */
export const slotClass = [
  `${railItem} lg:col-span-7 lg:row-span-2`,
  `${railItem} lg:col-span-5`,
  `${railItem} lg:col-span-5`,
  `${railItem} lg:col-span-4`,
  `${railItem} lg:col-span-4`,
];

export const helpSlotClass = `${railItem} lg:col-span-4`;
