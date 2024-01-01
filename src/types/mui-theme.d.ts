import { Theme } from "@mui/material";


declare module "@mui/material/styles" {
  interface Theme {
    functions: any;
  }
    interface ColorType {
      main: string | any;
    }

  interface Palette {
    white?: ColorType;
    black?: ColorType;
    primary?: ColorType;
    primary_darken?: ColorType;
    primary_lighten1?: ColorType;
    primary_lighten2?: ColorType;
    primary_lighten3?: ColorType;
    gray1?: ColorType;
    gray2?: ColorType;
    gray3?: ColorType;
    gray4?: ColorType;
    gray5?: ColorType;
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
