import type { ReactNode } from 'react';
import { Card, CardGlow } from './styles';

type GlassCardProps = {
  children: ReactNode;
  padding?: string;
  className?: string;
};

export function GlassCard({ children, padding, className }: GlassCardProps) {
  return (
    <Card $padding={padding} className={className}>
      <CardGlow />
      {children}
    </Card>
  );
}

