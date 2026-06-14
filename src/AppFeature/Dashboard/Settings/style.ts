import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SettingsPage = styled.div`
  padding: clamp(1rem, 3vw, 2rem);
  background: ${theme.colors.bg};
`;

export const Header = styled.div`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  color: ${theme.colors.textSecondary};
  margin: 0;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 24px;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.primary}40, ${theme.colors.blue}40, transparent);
  }
`;

export const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
`;

export const AvatarCircle = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.blue});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.bg};
  margin-bottom: 1rem;
  box-shadow: 0 8px 32px ${theme.colors.primary}30;
`;

export const ProfileName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem 0;
`;

export const ProfileEmail = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.textSecondary};
  margin: 0 0 1.25rem 0;
`;

export const MembershipBanner = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  background: linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.blue}15);
  border: 1px solid ${theme.colors.primary}30;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 20px ${theme.colors.primary}10;
`;

export const MembershipTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-bottom: 0.25rem;
`;

export const MembershipDate = styled.div`
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
`;

export const UpgradeButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  background: transparent;
  color: ${theme.colors.text};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary}50;
    background: ${theme.colors.primary}10;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const FormCard = styled(Card)`
  height: fit-content;
`;

export const FormTitle = styled.h2`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.01em;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bg3};
  color: ${theme.colors.text};
  font-size: 0.9rem;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: ${theme.colors.textSecondary}80;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary}60;
    box-shadow: 0 0 0 3px ${theme.colors.primary}15;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bg3};
  color: ${theme.colors.text};
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%237A90B3' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary}60;
    box-shadow: 0 0 0 3px ${theme.colors.primary}15;
  }

  option {
    background: ${theme.colors.bg3};
    color: ${theme.colors.text};
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
  color: ${theme.colors.bg};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px ${theme.colors.primary}30;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px ${theme.colors.primary}40;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`;
