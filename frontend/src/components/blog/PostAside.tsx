import { Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Sticky panel beside the article: the next step, and a note that older posts can date. */
export function PostAside() {
  return (
    <div className="space-y-5 lg:sticky lg:top-28">
      <div className="rounded-card bg-plum-950 p-7 text-white/75">
        <p className="text-label text-gold-400">Study with JTI</p>
        <p className="mt-3 text-h3 text-white">Ready to start your career?</p>
        <p className="mt-3 text-[0.9375rem]">Find a nationally recognised course at our City or Dandenong campus, or online.</p>
        <div className="mt-6 flex flex-col gap-3">
          <Button href="/courses" withArrow>Browse courses</Button>
          <Button href="/#enquire" variant="inverse">Make an enquiry</Button>
        </div>
      </div>
      <p className="flex gap-3 rounded-card border border-line bg-paper p-5 text-[0.875rem] text-muted">
        <Icon icon={Info} size={16} className="mt-0.5 shrink-0 text-plum-500" />
        <span>Fees, funding and course details change over time. Check the course page or call 1300 144 584 for current information.</span>
      </p>
    </div>
  );
}
