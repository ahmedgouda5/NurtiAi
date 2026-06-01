import styled from "styled-components";

export const Section = styled.section`
  padding: clamp(3rem, 7vw, 6rem) 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.article`
  padding: 1.3rem;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(12, 24, 48, 0.84),
    rgba(9, 16, 31, 0.7)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  min-height: 240px;
  display: grid;
  gap: 0.9rem;
`;

export const Number = styled.span`
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 214, 143, 0.08);
  border: 1px solid rgba(0, 214, 143, 0.16);
  color: var(--color-primary);
  font-weight: 700;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.75;
`;

export const FooterRow = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const StepsIcon = styled.div<{ $iconBg: string }>`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  font-size: 1.5rem;
  ${(props) =>
    props.$iconBg === "brown" &&
    `
    background: linear-gradient(
      135deg,
      rgba(245, 158, 11, 0.15),
      rgba(255, 107, 107, 0.1)
    );
    border: 1px solid rgba(245, 158, 11, 0.2);
  `}
  ${(props) =>
    props.$iconBg === "green" &&
    `
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(56, 189, 248, 0.1));
border: 1px solid rgba(139, 92, 246, 0.2);  `}
  ${(props) =>
    props.$iconBg === "blue" &&
    `
       background: linear-gradient(135deg, rgba(0, 214, 143, 0.15), rgba(56, 189, 248, 0.1));
    border: 1px solid rgba(0, 214, 143, 0.2);
  `}
`;
