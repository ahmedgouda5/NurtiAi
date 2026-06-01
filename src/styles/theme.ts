export const theme = {
  colors: {
    bg: '#050D1A',
    bg2: '#081222',
    bg3: '#0C1830',
    primary: '#00D68F',
    primaryDark: '#00A878',
    amber: '#F59E0B',
    coral: '#FF6B6B',
    purple: '#8B5CF6',
    blue: '#38BDF8',
    text: '#F0F6FF',
    textSecondary: '#7A90B3',
    border: 'rgba(255,255,255,0.07)',
  },
  radius: '16px',
} as const;

export type AppTheme = typeof theme;

