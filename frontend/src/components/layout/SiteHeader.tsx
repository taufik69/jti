import { MainBar } from "./MainBar";
import { UtilityBar } from "./UtilityBar";

export function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-gold-500 px-4 py-2 text-plum-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-control"
      >
        Skip to content
      </a>
      <UtilityBar />
      <MainBar />
    </>
  );
}
