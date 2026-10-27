import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface FormNavProps {
  step: number;
  last: number;
  submitting: boolean;
  onBack: () => void;
  onNext: () => void;
}

/** Back on the left, Continue or Submit on the right. */
export function FormNav({ step, last, submitting, onBack, onNext }: FormNavProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-line pt-6">
      {step > 0 ? (
        <button type="button" onClick={onBack} className="group inline-flex h-11 cursor-pointer items-center gap-2 rounded-control px-3 font-medium text-plum-700 hover:bg-plum-50">
          <Icon icon={ArrowLeft} size={16} className="transition-transform group-hover:-translate-x-0.5" />
          Back
        </button>
      ) : (
        <span />
      )}
      {step < last ? (
        <Button size="lg" withArrow onClick={onNext}>
          Continue
        </Button>
      ) : (
        <Button type="submit" size="lg" withArrow disabled={submitting}>
          {submitting ? "Submitting…" : "Submit application"}
        </Button>
      )}
    </div>
  );
}
