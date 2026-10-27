import { ArrowDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { differenceThemes } from "@/content/about/difference";

/** Hero aside: the five themes as a numbered contents list that jumps down the page. */
export function ThemeIndex() {
  return (
    <nav aria-label="On this page" className="rounded-card border border-line bg-paper p-3 shadow-float">
      <ol>
        {differenceThemes.map((theme, i) => (
          <li key={theme.id}>
            <a
              href={`#${theme.id}`}
              className="group flex items-center gap-5 rounded-control px-4 py-4 transition-colors duration-150 hover:bg-plum-50"
            >
              <span className="text-label tabular-nums text-plum-700">0{i + 1}</span>
              <span className="flex-1 text-[1.0625rem] font-medium text-ink">{theme.title}</span>
              <Icon icon={ArrowDown} size={16} className="text-plum-300 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-plum-700" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
