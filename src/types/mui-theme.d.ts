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
}
