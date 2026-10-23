import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { controlBase, controlInvalid, controlValid } from "./field-styles";

interface InputProps extends ComponentProps<"input"> {
  invalid?: boolean;
}

export function Input({ invalid = false, className, ...rest }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(controlBase, "h-12", invalid ? controlInvalid : controlValid, className)}
      {...rest}
    />
  );
}
