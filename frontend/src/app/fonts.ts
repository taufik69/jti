import { Roboto } from "next/font/google";

/** The only typeface on the site. Variable font: every weight from one file. */
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
