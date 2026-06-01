import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ButtonBase, ButtonLink } from "./styles";

type SharedButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

type ButtonAsAnchorProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonAsButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: never;
    type?: "button" | "submit" | "reset";
  };

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

export function Button({
  children,
  href,
  variant = "primary",
  fullWidth,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <ButtonLink
        href={href}
        $variant={variant}
        $fullWidth={fullWidth}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonBase
      $variant={variant}
      $fullWidth={fullWidth}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </ButtonBase>
  );
}
0;
