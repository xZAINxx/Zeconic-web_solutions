import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "aurora";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary font-semibold text-background shadow-[0_8px_30px_rgba(0,229,255,0.25)] hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(0,229,255,0.45)] focus-visible:outline-primary",
  secondary:
    "border border-primary/40 bg-primary/[0.04] font-semibold text-primary backdrop-blur-sm hover:border-primary hover:bg-primary/[0.08] hover:shadow-[0_0_30px_rgba(0,229,255,0.18)]",
  ghost:
    "border border-transparent bg-transparent font-medium text-textSecondary hover:text-textPrimary focus-visible:outline-textSecondary",
  aurora:
    "font-semibold text-textPrimary shadow-[0_8px_30px_rgba(123,97,255,0.30)] hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(255,79,216,0.40)] focus-visible:outline-accent",
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

function Inner({
  variant,
  children,
}: {
  variant: Variant;
  children?: React.ReactNode;
}) {
  if (variant === "aurora") {
    return (
      <>
        <span
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "linear-gradient(120deg, #00E5FF 0%, #7B61FF 45%, #FF4FD8 100%)",
          }}
          aria-hidden
        />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </>
    );
  }
  return <span className="inline-flex items-center gap-2">{children}</span>;
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
        <Inner variant={variant}>{children}</Inner>
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
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}
