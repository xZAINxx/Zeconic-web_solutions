import type { HTMLAttributes } from "react";

export type SectionWrapperProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
};

export function SectionWrapper({
  as: Component = "section",
  className = "",
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <Component
      className={[
        "mx-auto max-w-7xl px-6 py-24 md:px-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
