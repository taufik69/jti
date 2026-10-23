"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { useCloseOnNavigate } from "@/hooks/useCloseOnNavigate";
import { Logo } from "./Logo";
import { MobileNavFooter } from "./MobileNavFooter";
import { MobileNavGroups } from "./MobileNavGroups";

const iconButton =
  "inline-flex size-11 items-center justify-center rounded-control text-ink " +
  "transition-colors duration-150 hover:bg-plum-50 cursor-pointer";

export function MobileNav() {
  const [open, setOpen] = useCloseOnNavigate();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={`${iconButton} lg:hidden`} aria-label="Open menu">
        <Icon icon={Menu} size={24} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col bg-canvas data-[state=open]:animate-[menu-in_200ms_var(--ease-out-soft)] data-[state=closed]:animate-[menu-out_150ms_ease-in]"
          aria-describedby={undefined}
        >
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-line px-5">
            <Dialog.Title className="sr-only">Menu</Dialog.Title>
            <Logo />
            <Dialog.Close className={iconButton} aria-label="Close menu">
              <Icon icon={X} size={24} />
            </Dialog.Close>
          </div>
          <nav aria-label="Main" className="flex-1 overflow-y-auto overscroll-contain px-5">
            <MobileNavGroups />
          </nav>
          <MobileNavFooter />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
