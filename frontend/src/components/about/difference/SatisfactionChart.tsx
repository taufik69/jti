import { motion } from "motion/react";
import { easeOutSoft } from "@/components/motion/easing";
import { quality } from "@/content/about/difference";

const { year, jti, state } = quality.satisfaction;
const rows = [
  { label: "JTI students", value: jti, bar: "bg-plum-700", text: "text-plum-700" },
  { label: "Victorian average, all RTOs", value: state, bar: "bg-plum-300", text: "text-muted" },
];

/** Two bars on a 0–100 scale. The figure is labelled with its year so it never reads as current. */
export function SatisfactionChart() {
  return (
    <figure className="rounded-card border border-line bg-paper p-7 md:p-9">
      <figcaption>
        <p className="text-label text-muted">Student satisfaction · {year}</p>
        <p className="mt-3 text-[0.9375rem]">
          Students satisfied with the training provided. JTI was 4.5% higher than the Victorian state average.
        </p>
      </figcaption>
      <dl className="mt-8 space-y-6">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-[0.9375rem] font-medium text-ink">{row.label}</dt>
              <dd className={`text-h3 tabular-nums ${row.text}`}>{row.value}%</dd>
            </div>
            <div aria-hidden className="mt-3 h-3 overflow-hidden rounded-full bg-plum-50">
              <motion.div
                className={`h-full origin-left rounded-full ${row.bar}`}
                style={{ width: `${row.value}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: easeOutSoft }}
              />
            </div>
          </div>
        ))}
      </dl>
    </figure>
  );
}
