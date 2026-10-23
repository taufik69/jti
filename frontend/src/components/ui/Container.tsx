import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function Container({ children, as: Tag = "div", className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-site px-5 md:px-6", className)}>
      {children}
    </Tag>
  );
}
