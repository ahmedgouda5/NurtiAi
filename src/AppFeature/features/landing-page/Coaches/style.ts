import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
`;

export const Container = styled.div`
  width: min(1280px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.article`
  background: ${theme.colors.bg2};
  border: 1px solid ${theme.colors.border};
  border-radius: 24px;
  overflow: hidden;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 214, 143, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const Top = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Avatar = styled.div<{ gradient: string }>`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: ${theme.colors.bg3};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto 1.5rem;

  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

export const Name = styled.h3`
  color: ${theme.colors.text};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.p`
  color: ${theme.colors.textSecondary};
  margin-bottom: 1.25rem;
`;

export const Stars = styled.div`
  color: ${theme.colors.amber};
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
`;

export const Reviews = styled.p`
  color: ${theme.colors.textSecondary};
`;

export const Divider = styled.div`
  height: 1px;
  background: ${theme.colors.border};
`;

export const Bottom = styled.div`
  padding: 1.5rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.p`
  color: ${theme.colors.textSecondary};
  margin-bottom: 0.35rem;
`;

export const Value = styled.p`
  color: ${theme.colors.text};
  font-weight: 600;
`;

export const Price = styled.p`
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 1.15rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;

  border: none;
  border-radius: 999px;

  background: ${theme.colors.primary};
  color: #000;

  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`;
