import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  onDark?: boolean;
  className?: string;
}

/** Original JTI wordmark (108×46). The dark version only swaps the purple fill for white. */
export function Logo({ onDark = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="Job Training Institute — home" className={cn("inline-flex", className)}>
      <Image
        src={onDark ? "/brand/logo-on-dark.svg" : "/brand/logo.svg"}
        alt=""
        width={108}
        height={46}
        priority
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}
