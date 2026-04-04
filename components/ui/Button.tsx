import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-lg transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary font-semibold text-background shadow-md hover:scale-[1.02] hover:shadow-[0_0_20px_var(--primary)] focus-visible:outline-primary",
  secondary:
    "border border-primary bg-transparent font-semibold text-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] focus-visible:outline-primary",
  ghost:
    "border border-transparent bg-transparent font-medium text-textSecondary hover:text-textPrimary focus-visible:outline-textSecondary",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export type ButtonAsLinkProps = {
  variant?: Variant;
  size?: Size;
  href: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export type ButtonAsButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: undefined;
  type?: "button" | "submit" | "reset";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function classFor(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      href,
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    } = props;
    return (
      <Link href={href} className={classFor(variant, size, className)} {...rest}>
        {children}
      </Link>
    );
  }

  const btn = props as ButtonAsButtonProps;
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
    ...rest
  } = btn;
  return (
    <button type={type} className={classFor(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
