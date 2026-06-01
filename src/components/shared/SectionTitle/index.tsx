import type { ReactNode } from "react";
import { Description, Eyebrow, Title, Wrap } from "./styles";

type SectionTitleProps = {
  eyebrow: string | ReactNode;
  title?: ReactNode;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <Wrap>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrap>
  );
}
