import { findQualification } from "@/content/qualifications";
import { LevelLadder } from "./LevelLadder";

interface QualificationRowProps {
  code: string;
}

export function QualificationRow({ code }: QualificationRowProps) {
  const qualification = findQualification(code);
  if (!qualification) return null;

  return (
    <li className="flex items-start justify-between gap-6 border-t border-line py-3.5 first:border-t-0">
      <div>
        <p className="text-[0.8125rem] tabular-nums text-muted">
          {qualification.code}
          <span className="sr-only">, AQF level {qualification.aqf}</span>
        </p>
        <p className="mt-0.5 leading-snug text-ink">{qualification.title}</p>
      </div>
      <span className="mt-1 flex shrink-0 flex-col items-end gap-1.5">
        <LevelLadder aqf={qualification.aqf} />
        <span className="text-[0.75rem] text-muted">{qualification.level}</span>
      </span>
    </li>
  );
}
