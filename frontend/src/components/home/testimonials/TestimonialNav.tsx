import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

const control =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-control border border-line bg-paper " +
  "text-ink transition-colors duration-150 hover:border-plum-700 hover:text-plum-700 " +
  "disabled:cursor-not-allowed disabled:opacity-40";

export function TestimonialNav() {
  return (
    <div className="flex gap-2">
      <button type="button" className={`testimonial-prev ${control}`} aria-label="Previous testimonial">
        <Icon icon={ChevronLeft} />
      </button>
      <button type="button" className={`testimonial-next ${control}`} aria-label="Next testimonial">
        <Icon icon={ChevronRight} />
      </button>
    </div>
  );
}
