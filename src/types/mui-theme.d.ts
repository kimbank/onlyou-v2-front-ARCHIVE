import { Theme } from "@mui/material";

interface ColorsTypes {
  main: string;
  focus: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    functions: any;
  }

  interface Palette {
    background:
      | {
          default: string;
          sidenav?: string;
          card?: string;
        }
      | any;
    white:
      | {
          main: string;
          focus: string;
        }
      | any;
    text:
      | {
          main: string;
          focus: string;
          primary?: string;
          secondary?: string;
          disabled?: string;
        }
      | any;
    transparent:
      | {
          main: string;
        }
      | any;
    black:
      | {
          light: string;
          main: string;
          focus: string;
        }
      | any;
    primary: ColorsTypes | any;
    secondary: ColorsTypes | any;
    info: ColorsTypes | any;
    success: ColorsTypes | any;
    warning: ColorsTypes | any;
    error: ColorsTypes | any;
    light: ColorsTypes | any;
    dark: ColorsTypes | any;
    grey:
      | {
          [key: string | number]: string;
        }
      | any;
  }

  interface TypographyVariants {
    fontFamily: string;
    fontWeightLighter: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      color: string;
      lineHeight: number;
    };
    h2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      color: string;
      lineHeight: number;
    };
    h3: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      color: string;
      lineHeight: number;
    };
    h4: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      color: string;
      lineHeight: number;
    };
    h5: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      color: string;
      lineHeight: number;
    };
    h6: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      color: string;
      lineHeight: number;
    };
    subtitle1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    subtitle2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    body1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    body2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };

    button: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
      textTransform: any;
    };
    caption: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    overline: {
      fontFamily: string;
    };
    size: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
    lineHeight: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}
