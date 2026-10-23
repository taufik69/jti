import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { controlBase, controlInvalid, controlValid } from "./field-styles";

interface TextareaProps extends ComponentProps<"textarea"> {
  invalid?: boolean;
}

export function Textarea({ invalid = false, className, rows = 5, ...rest }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(controlBase, "resize-y py-3", invalid ? controlInvalid : controlValid, className)}
      {...rest}
    />
  );
}
