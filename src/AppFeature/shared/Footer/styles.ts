import styled from "styled-components";
import { theme } from "@/styles/theme";

export const FooterShell = styled.footer`
  padding: 3rem 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: ${theme.colors.bg2};
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${theme.colors.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const LogoText = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(90deg, #ffffff, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  max-width: 320px;
  font-size: 0.875rem;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  transition: 0.25s;

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnTitle = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
`;

export const FooterLink = styled.a`
  color: ${theme.colors.textSecondary};
  transition: 0.25s;
  font-size: 0.875rem;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const Bottom = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  color: rgba(255, 255, 255, 0.55);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
