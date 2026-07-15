import 'styled-components';
import type { AppTheme } from './theme';

declare module 'styled-components' {
  // This module augmentation mirrors the app theme shape for styled-components.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
