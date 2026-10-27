import { stepTitles } from "@/content/agent-form";

const details = [
  "Registered name, directors, year established and postal address",
  "Principal contact's email and mobile",
  "Answers to seven questions about your agency",
  "Two referees from Australian education providers you work with (one required)",
  "Agreement to our Education Agent Code of Conduct",
];

/** Hero aside on the application page: the five steps and what each needs. */
export function ApplyChecklist() {
  return (
    <div className="rounded-card border border-line bg-paper p-7 shadow-float md:p-8">
      <p className="text-label text-plum-700">Before you start</p>
      <p className="mt-3 text-h3 text-ink">What you'll need</p>
      <ol className="mt-6 space-y-4">
        {stepTitles.map((title, i) => (
          <li key={title} className="flex gap-4">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-plum-50 text-[0.8125rem] font-medium tabular-nums text-plum-700">{i + 1}</span>
            <span>
              <span className="block font-medium text-ink">{title}</span>
              <span className="mt-0.5 block text-[0.875rem] text-muted">{details[i]}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
