import { site } from "@/content/site";
import { socialLabels, socialPaths, type SocialNetwork } from "./social-paths";

const networks = Object.keys(socialPaths) as SocialNetwork[];

export function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {networks.map((network) => (
        <li key={network}>
          <a
            href={site.social[network]}
            aria-label={socialLabels[network]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-control border border-white/15 text-white/80 transition-colors duration-150 hover:border-gold-400 hover:text-gold-400"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d={socialPaths[network]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
