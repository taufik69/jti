import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Shown in place of the form once the application is handed over. */
export function AgentSuccess() {
  return (
    <div role="status" className="flex flex-col items-start gap-5 py-6">
      <span className="grid size-14 place-items-center rounded-full bg-plum-50 text-plum-700">
        <Icon icon={CheckCircle2} size={24} />
      </span>
      <h2 className="text-h2 text-ink">Application received</h2>
      <p className="max-w-[52ch] text-body-lg">
        Thank you for applying to become a JTI education agent. Our international team will review your application and contact you using the details you provided.
      </p>
      <Button href="/list-agents" variant="outline" withArrow>
        View our current agents
      </Button>
    </div>
  );
}
