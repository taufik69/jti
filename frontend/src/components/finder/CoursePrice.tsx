import type { CourseFee } from "@/content/courses";

interface CoursePriceProps {
  fee?: CourseFee;
}

const aud = (n: number) => `$${n.toLocaleString("en-AU")}`;

export function CoursePrice({ fee }: CoursePriceProps) {
  if (!fee) {
    return <p className="text-left text-[0.9375rem] text-body">Fees on the JTI fee schedule. Ask us for a quote.</p>;
  }
  return (
    <div>
      <p className="text-left text-[0.9375rem] text-body">
        From <span className="text-2xl font-semibold tabular-nums text-ink">{aud(fee.amount)}</span> {fee.label}
      </p>
      {fee.note && <p className="mt-1 text-left text-[0.8125rem] text-muted">{fee.note}</p>}
    </div>
  );
}
