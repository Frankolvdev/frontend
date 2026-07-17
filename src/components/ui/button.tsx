import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "large";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function getButtonClasses(
  className: string,
  variant: ButtonVariant,
  size: ButtonSize,
) {
  return [
    "ui-button",
    `ui-button--${variant}`,
    size === "large" ? "ui-button--large" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      children,
      className = "",
      variant = "primary",
      size = "default",
      href,
      ...anchorProps
    } = props;

    const classes = getButtonClasses(className, variant, size);

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className = "",
    variant = "primary",
    size = "default",
    type = "button",
    ...buttonProps
  } = props;

  const classes = getButtonClasses(className, variant, size);

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
