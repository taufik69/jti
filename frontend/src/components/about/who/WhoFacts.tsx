import { Container } from "@/components/ui/Container";
import { campuses } from "@/content/campuses";
import { site } from "@/content/site";

const facts = [
  { label: "Established", value: String(site.founded) },
  { label: "Campuses", value: campuses.map((c) => c.name).join(" & ") },
  { label: "RTO number", value: site.rto },
  { label: "CRICOS code", value: site.cricos },
];

/** Registration facts in a hairline strip under the hero. */
export function WhoFacts() {
  return (
    <div className="border-b border-line bg-paper">
      <Container as="dl" className="grid grid-cols-2 md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="border-line py-6 pr-5 odd:border-r even:pl-5 nth-[-n+2]:border-b md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
            <dt className="text-label text-muted">{fact.label}</dt>
            <dd className="mt-2 text-h3 tabular-nums text-ink">{fact.value}</dd>
          </div>
        ))}
      </Container>
    </div>
  );
}
