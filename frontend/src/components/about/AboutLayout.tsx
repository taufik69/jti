import type { ReactNode } from "react";
import { KeepExploring } from "./KeepExploring";

interface AboutLayoutProps {
  children: ReactNode;
}

/** Wraps every About page: ragged-right text (justified copy reads unevenly in editorial layouts) and the "more about JTI" links. */
export function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      {children}
      <KeepExploring />
    </div>
  );
}
