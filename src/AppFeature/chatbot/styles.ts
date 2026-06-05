import styled from "styled-components";

export const Launcher = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 70;
  width: 3.5rem;
  height: 3.5rem;
  border: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, #00d68f, #38bdf8);
  color: #04101f;
  box-shadow: 0 20px 50px rgba(0, 214, 143, 0.28);
`;

export const Panel = styled.div`
  position: fixed;
  right: 1.25rem;
  bottom: 5.3rem;
  z-index: 70;
  width: min(100vw - 2rem, 360px);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 18, 34, 0.94);
  backdrop-filter: blur(24px);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.42);
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1rem 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const HeaderMeta = styled.div`
  display: grid;
  gap: 0.15rem;
`;

export const Title = styled.strong`
  font-size: 1rem;
`;

export const Status = styled.span`
  color: var(--color-primary);
  font-size: 0.82rem;
`;

export const Messages = styled.div`
  max-height: 340px;
  overflow: auto;
  padding: 1rem;
  display: grid;
  gap: 0.65rem;
`;

export const Bubble = styled.div<{ $role: "bot" | "user" }>`
  max-width: 84%;
  margin-left: ${({ $role }) => ($role === "user" ? "auto" : "0")};
  padding: 0.85rem 0.95rem;
  border-radius: 18px;
  background: ${({ $role }) =>
    $role === "user" ? "rgba(0, 214, 143, 0.12)" : "rgba(255, 255, 255, 0.05)"};
  border: 1px solid rgba(255, 255, 255, 0.06);
  line-height: 1.65;
`;

export const Composer = styled.form`
  display: flex;
  gap: 0.55rem;
  padding: 0 1rem 1rem;
`;

export const Input = styled.input`
  flex: 1;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-text);
  padding: 0.85rem 0.95rem;
  outline: none;
`;
