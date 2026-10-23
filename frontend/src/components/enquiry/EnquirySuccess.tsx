import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

interface EnquirySuccessProps {
  email: string;
  onReset: () => void;
}

export function EnquirySuccess({ email, onReset }: EnquirySuccessProps) {
  return (
    <div role="status" className="flex flex-col items-center py-10 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-plum-50 text-plum-700">
        <Icon icon={CircleCheck} size={24} />
      </span>
      <h3 className="mt-5 text-h3">Enquiry sent</h3>
      <p className="mt-3 max-w-[44ch]">
        Thanks for getting in touch. Our admissions team will reply to <strong className="font-medium text-ink">{email}</strong>.
      </p>
      <Button variant="outline" className="mt-8" onClick={onReset}>
        Send another enquiry
      </Button>
    </div>
  );
}
