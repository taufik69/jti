export interface Swatch {
  token: string;
  hex: string;
  note?: string;
}

export interface SwatchGroup {
  title: string;
  swatches: Swatch[];
}

export const swatchGroups: SwatchGroup[] = [
  {
    title: "Plum — brand, navigation, dark sections, links",
    swatches: [
      { token: "plum-950", hex: "#1E0629", note: "Footer, dark bands" },
      { token: "plum-900", hex: "#2E0B40" },
      { token: "plum-800", hex: "#451062", note: "Hover" },
      { token: "plum-700", hex: "#5D147D", note: "Brand primary" },
      { token: "plum-600", hex: "#733193", note: "Logo" },
      { token: "plum-500", hex: "#8B4FAB" },
      { token: "plum-300", hex: "#C7A6D9", note: "Card hover border" },
      { token: "plum-100", hex: "#EFE5F5" },
      { token: "plum-50", hex: "#F8F3FB" },
    ],
  },
  {
    title: "Gold — CTAs, active states, numerals. About 5% of a screen.",
    swatches: [
      { token: "gold-600", hex: "#E0A93E", note: "CTA hover" },
      { token: "gold-500", hex: "#FFCB69", note: "Primary CTA" },
      { token: "gold-400", hex: "#FDCC76", note: "Logo" },
      { token: "gold-100", hex: "#FFF6E3", note: "Cream surface" },
    ],
  },
  {
    title: "Neutrals — warm, never pure grey",
    swatches: [
      { token: "ink", hex: "#1C1720", note: "Headings" },
      { token: "body", hex: "#4B4B4B", note: "Body text" },
      { token: "muted", hex: "#716A77", note: "Darkened for AA" },
      { token: "line", hex: "#E9E4EC", note: "Borders" },
      { token: "paper", hex: "#FFFFFF" },
      { token: "canvas", hex: "#FBF9F6", note: "Page background" },
      { token: "error", hex: "#B42318", note: "Form errors only" },
    ],
  },
];

export const contrastPairs: { label: string; fg: string; bg: string }[] = [
  { label: "Body on canvas", fg: "#4B4B4B", bg: "#FBF9F6" },
  { label: "Muted on canvas", fg: "#716A77", bg: "#FBF9F6" },
  { label: "Muted on cream", fg: "#716A77", bg: "#FFF6E3" },
  { label: "Plum-700 link on canvas", fg: "#5D147D", bg: "#FBF9F6" },
  { label: "Plum-950 on gold-500 button", fg: "#1E0629", bg: "#FFCB69" },
  { label: "Plum-950 on gold-600 hover", fg: "#1E0629", bg: "#E0A93E" },
  { label: "White on plum-700 button", fg: "#FFFFFF", bg: "#5D147D" },
  { label: "Cream on plum-950", fg: "#FFF6E3", bg: "#1E0629" },
  { label: "Gold-400 label on plum-950", fg: "#FDCC76", bg: "#1E0629" },
  { label: "Error on paper", fg: "#B42318", bg: "#FFFFFF" },
];
