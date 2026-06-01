'use client';

import { createGlobalStyle, keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -10px, 0); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 214, 143, 0.2); }
  50% { box-shadow: 0 0 60px 15px rgba(0, 214, 143, 0.08); }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background:
      radial-gradient(circle at top, rgba(0, 214, 143, 0.14), transparent 30%),
      radial-gradient(circle at 85% 15%, rgba(56, 189, 248, 0.12), transparent 22%),
      linear-gradient(180deg, #050d1a 0%, #071120 45%, #050d1a 100%);
    color: var(--color-text);
    font-family: var(--font-outfit), system-ui, sans-serif;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  ::selection {
    background: rgba(0, 214, 143, 0.24);
    color: var(--color-text);
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 3px solid rgba(255, 255, 255, 0.03);
    background: linear-gradient(180deg, rgba(0, 214, 143, 0.72), rgba(56, 189, 248, 0.48));
  }

  .container {
    width: min(1180px, calc(100% - 2rem));
    margin-inline: auto;
  }

  .section-shell {
    position: relative;
    padding: clamp(4rem, 8vw, 7rem) 0;
  }

  .glass-card {
    backdrop-filter: blur(24px);
    background: linear-gradient(180deg, rgba(12, 24, 48, 0.88), rgba(8, 18, 34, 0.72));
    border: 1px solid var(--color-border);
    border-radius: 16px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
  }

  .glass-card-soft {
    backdrop-filter: blur(18px);
    background: linear-gradient(180deg, rgba(17, 29, 56, 0.66), rgba(10, 16, 31, 0.52));
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 20px;
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--color-primary), #b3ffe9 42%, #7ae8ff 78%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .glow-ring {
    animation: ${pulseGlow} 5s ease-in-out infinite;
  }

  .float {
    animation: ${float} 6s ease-in-out infinite;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

