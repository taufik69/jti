"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { DropdownContent } from "./DropdownContent";
import { controlBase, controlInvalid, controlValid } from "./field-styles";
import type { Option } from "@/lib/option";

interface DropdownProps {
  id: string;
  name?: string;
  options: Option[];
  placeholder: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  invalid?: boolean;
  describedBy?: string;
}

/** Styled, keyboard-accessible select (Radix). Use with react-hook-form's Controller. */
export function Dropdown({ id, name, options, placeholder, value, defaultValue, onValueChange, onBlur, invalid = false, describedBy }: DropdownProps) {
  return (
    <RadixSelect.Root name={name} value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
      <RadixSelect.Trigger
        id={id}
        onBlur={onBlur}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        className={cn(
          controlBase,
          "group flex h-12 cursor-pointer items-center justify-between gap-3 text-left",
          "data-[placeholder]:text-muted data-[state=open]:border-plum-700",
          invalid ? controlInvalid : controlValid,
        )}
      >
        <span className="truncate">
          <RadixSelect.Value placeholder={placeholder} />
        </span>
        <RadixSelect.Icon className="text-muted transition-transform duration-200 group-data-[state=open]:rotate-180">
          <Icon icon={ChevronDown} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <DropdownContent options={options} />
    </RadixSelect.Root>
  );
}
