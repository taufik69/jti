import { Link } from "@/components/ui/Link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "./button-styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  withArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && (
        <Icon
          icon={ArrowRight}
          size={16}
          className="transition-transform duration-150 ease-out group-hover:translate-x-[3px]"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
