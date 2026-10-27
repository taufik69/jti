import { agentResponsibilities, codeIntro, jtiResponsibilities } from "@/content/agent-code";
import { BlockList } from "@/components/study/BlockList";

/** The full code in a bounded, keyboard-scrollable panel so the agreement stays close by. */
export function CodeOfConduct() {
  return (
    <section
      tabIndex={0}
      aria-labelledby="code-title"
      className="max-h-[28rem] space-y-6 overflow-y-auto overscroll-contain rounded-card border border-line bg-canvas p-6 text-[0.9375rem] md:p-8"
    >
      <h3 id="code-title" className="text-h3 text-ink">Education Agent Code of Conduct</h3>
      {codeIntro.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h4 className="pt-2 text-[1.0625rem] font-medium text-ink">Agent responsibilities</h4>
      <BlockList items={agentResponsibilities} />
      <h4 className="pt-2 text-[1.0625rem] font-medium text-ink">JTI responsibilities</h4>
      <BlockList items={jtiResponsibilities} />
    </section>
  );
}
