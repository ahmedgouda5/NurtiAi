import { theme } from "@/styles/theme";
import styled from "styled-components";
export const SponserSection = styled.section`
  padding: 40px 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    90deg,
    ${theme.colors.bg} 0%,
    ${theme.colors.border} 50%,
    ${theme.colors.bg} 100%
  );
`;
export const Heading = styled.h2`
  font-size: 1rem;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const Box = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  color: #f0f6ff;
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.4;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
