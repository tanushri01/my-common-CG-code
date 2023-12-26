import { CSSProperties } from 'react';
import { createTheme } from '@mui/material';

import { baseThemeOptions } from './base.theme.options';
import { lightThemeOptions } from './light.theme.options';

export interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    navigationBar: {
      text: string;
      width: number;
      background: string;
      hover: {
        background: string;
      };
      active: {
        color: string;
        background: string;
      };
      scrollbar: {
        shadow: string;
        thumb: {
          color: string;
          outline: string;
        };
      };
    };
    loader: {
      primary: string;
      secondary: string;
    };
  }

  interface ThemeOptions {
    navigationBar: {
      text: string;
      width: number;
      background: string;
      hover: {
        background: string;
      };
      active: {
        color: string;
        background: string;
      };
      scrollbar: {
        shadow: string;
        thumb: {
          color: string;
          outline: string;
        };
      };
    };
    loader: {
      primary: string;
      secondary: string;
    };
  }

  interface Palette {
    neutral: Neutral;
    disabled: {
      main: string;
      primary: string;
      secondary: string;
      getContrastText: string;
    };
    border: {
      main: string;
      light: string;
    };
    active: string;
    clickableCard: {
      main: string;
      disabled: string;
    };
    backgroundColor: string;
    black: string;
  }

  interface PaletteOptions {
    neutral: Neutral;
    disabled?: {
      main?: string;
      primary?: string;
      secondary?: string;
      getContrastText?: string;
    };
    border: {
      main?: string;
      light?: string;
    };
    backgroundColor: string;
    black?: string;
    active?: string;
    clickableCard: {
      main?: string;
      disabled?: string;
    };
  }

  interface BreakpointOverrides {
    cxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    lgplus: true;
    sd: true;
    xl: true;
    xxl: true;
  }

  interface TypographyVariants {
    caption1: CSSProperties;
    caption2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption1: CSSProperties;
    caption2: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
}

export * from './base.theme.options';
export * from './light.theme.options';
export const lightTheme = createTheme(baseThemeOptions, lightThemeOptions);
