import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ButtonBase, ButtonLink } from "./styles";

type SharedButtonProps = {
  children: ReactNode;
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

export function Button({ children, href, fullWidth, ...props }: ButtonProps) {
  if (href) {
    return (
      <ButtonLink
        href={href}
        $fullWidth={fullWidth}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonBase
      $fullWidth={fullWidth}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </ButtonBase>
  );
}
