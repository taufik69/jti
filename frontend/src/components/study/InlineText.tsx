import { Fragment } from "react";
import { Link } from "@/components/ui/Link";

interface InlineTextProps {
  text: string;
}

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const linkClass = "font-medium text-plum-700 underline decoration-plum-300 underline-offset-4 transition-colors hover:decoration-plum-700";

/** Renders "[label](href)" links inside copied text; external links open in a new tab. */
export function InlineText({ text }: InlineTextProps) {
  const parts: (string | { label: string; href: string })[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    parts.push(text.slice(last, match.index));
    parts.push({ label: match[1], href: match[2] });
    last = (match.index ?? 0) + match[0].length;
  }
  parts.push(text.slice(last));

  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
        const external = part.href.startsWith("http");
        return (
          <Link key={i} href={part.href} className={linkClass} {...(external && { target: "_blank", rel: "noreferrer" })}>
            {part.label}
          </Link>
        );
      })}
    </>
  );
}
