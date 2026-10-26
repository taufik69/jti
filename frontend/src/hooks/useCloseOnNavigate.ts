import { useEffect, useState } from "react";
import { useLocation } from "react-router";

/** Open state that resets whenever the route changes. */
export function useCloseOnNavigate(): [boolean, (open: boolean) => void] {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return [open, setOpen];
}
