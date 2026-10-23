import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Option } from "@/lib/option";

interface DropdownContentProps {
  options: Option[];
}

const scrollButton = "flex h-7 cursor-default items-center justify-center bg-paper text-muted";

/** White popover list, same width as the trigger, scrolls when long (e.g. the course list). */
export function DropdownContent({ options }: DropdownContentProps) {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        position="popper"
        sideOffset={6}
        className="z-50 max-h-[min(22rem,var(--radix-select-content-available-height))] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-card border border-line bg-paper shadow-float data-[state=open]:animate-[menu-in_160ms_var(--ease-out-soft)]"
      >
        <RadixSelect.ScrollUpButton className={scrollButton}>
          <Icon icon={ChevronUp} size={16} />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="p-1.5">
          {options.map((option) => (
            <RadixSelect.Item
              key={option.value}
              value={option.value}
              className="relative flex cursor-pointer select-none items-center rounded-control py-2.5 pl-3 pr-9 text-[0.9375rem] leading-snug text-ink outline-none data-[highlighted]:bg-plum-50 data-[highlighted]:text-plum-800 data-[state=checked]:font-medium data-[state=checked]:text-plum-700"
            >
              <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
              <RadixSelect.ItemIndicator className="absolute right-3 inline-flex text-plum-700">
                <Icon icon={Check} size={16} />
              </RadixSelect.ItemIndicator>
            </RadixSelect.Item>
          ))}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className={scrollButton}>
          <Icon icon={ChevronDown} size={16} />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
}
