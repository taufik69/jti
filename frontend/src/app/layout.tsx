import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { site } from "@/content/site";
import { organizationSchema } from "@/lib/organization-schema";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Job Training Institute — Vocational training in Melbourne",
    template: "%s · Job Training Institute",
  },
  description:
    "Nationally recognised courses in aged care, disability, early childhood, community services, mental health and business. City and Dandenong campuses. RTO 122208, CRICOS 03373B.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#5d147d",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-AU" className={roboto.variable}>
      <body>
        <MotionProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
