import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonBase, ButtonLink } from './styles';

type SharedButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
};

type ButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
  };

export function Button({
  children,
  href,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <ButtonLink href={href} $variant={variant} $fullWidth={fullWidth} {...props}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonBase type={type} $variant={variant} $fullWidth={fullWidth} {...props}>
      {children}
    </ButtonBase>
  );
}

