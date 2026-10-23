"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Open state that resets whenever the route changes. */
export function useCloseOnNavigate(): [boolean, (open: boolean) => void] {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return [open, setOpen];
}
