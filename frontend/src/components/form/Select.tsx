import type { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { controlBase, controlInvalid, controlValid } from "./field-styles";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends ComponentProps<"select"> {
  options: SelectOption[];
  placeholder?: string;
  invalid?: boolean;
}

/** Native select: best keyboard and mobile picker behaviour, styled to tokens. */
export function Select({ options, placeholder, invalid = false, className, ...rest }: SelectProps) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid || undefined}
        className={cn(
          controlBase,
          "h-12 cursor-pointer appearance-none pr-11",
          invalid ? controlInvalid : controlValid,
          className,
        )}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        icon={ChevronDown}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
      />
    </div>
  );
}
