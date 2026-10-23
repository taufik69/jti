export type ButtonVariant = "primary" | "secondary" | "outline" | "inverse";
export type ButtonSize = "md" | "lg";

export const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-control font-medium " +
  "whitespace-nowrap transition-colors duration-150 ease-out cursor-pointer " +
  "disabled:cursor-not-allowed disabled:opacity-50";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-gold-500 text-plum-950 hover:bg-gold-600",
  secondary: "bg-plum-700 text-white hover:bg-plum-800",
  outline:
    "border border-plum-300 text-plum-700 hover:border-plum-700 hover:bg-plum-50",
  inverse: "border border-white/30 text-white hover:border-white/60 hover:bg-white/10",
};

export const buttonSizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-base",
};
