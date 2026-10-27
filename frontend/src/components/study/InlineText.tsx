import { Fragment, type ReactNode } from "react";
import { Link } from "@/components/ui/Link";

interface InlineTextProps {
  text: string;
}

/** Links "[label](href)" and bold "**text**" in copied content. */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
const linkClass = "font-medium text-plum-700 underline decoration-plum-300 underline-offset-4 transition-colors hover:decoration-plum-700";

/** Renders inline links and bold inside copied text; external links open in a new tab. */
export function InlineText({ text }: InlineTextProps) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const at = match.index ?? 0;
    parts.push(<Fragment key={`t${at}`}>{text.slice(last, at)}</Fragment>);
    if (match[3]) {
      parts.push(<strong key={at} className="font-medium text-ink">{match[3]}</strong>);
    } else {
      const href = match[2];
      const external = href.startsWith("http");
      parts.push(
        <Link key={at} href={href} className={linkClass} {...(external && { target: "_blank", rel: "noreferrer" })}>
          {match[1]}
        </Link>,
      );
    }
    last = at + match[0].length;
  }
  parts.push(<Fragment key="end">{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}
