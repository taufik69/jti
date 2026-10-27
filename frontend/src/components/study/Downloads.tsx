import { Download, FileText } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { LinkItem } from "@/content/study/types";

interface DownloadsProps {
  items: LinkItem[];
}

/** Document rows: icon, name, file type, download affordance. Two columns once there are several. */
export function Downloads({ items }: DownloadsProps) {
  return (
    <ul className={items.length > 3 ? "grid gap-3 md:grid-cols-2" : "grid gap-3"}>
      {items.map((item) => (
        <li key={item.href + item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full items-center gap-4 rounded-card border border-line bg-paper p-4 transition-[border-color,box-shadow] duration-200 hover:border-plum-300 hover:shadow-float"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-control bg-plum-50 text-plum-700">
              <Icon icon={FileText} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium leading-snug text-ink group-hover:text-plum-700">{item.label}</span>
              <span className="mt-0.5 block text-[0.8125rem] text-muted">{item.href.includes("drive.google") ? "Download" : "PDF"}</span>
            </span>
            <Icon icon={Download} size={20} className="shrink-0 text-plum-300 transition-colors group-hover:text-plum-700" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
