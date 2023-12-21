interface ColorsTypes {
  main: string;
  focus: string;
  Primary_lighten1?:string;
  Primary_lighten2?:string;
  Primary_lighten3?:string;
}

interface Types {
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
  disabled: ColorsTypes | any;
  dark: ColorsTypes | any;
gray:
    | {
        [key: number]: string;
      }
    | any;
}

const colors: Types = {
  background: {
    default: "#f0f2f5",
  },

  text: {
    main: "#7b809a",
    focus: "#7b809a",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  black: {
    light: "#000000",
    main: "#000000",
    focus: "#000000",
  },

  primary: {
    main: "#FF7700",
    focus: "#C45A00",
    Primary_lighten1: "#FFB06C",
    Primary_lighten2: "#FFD9B7",
    Primary_lighten3: "#FFF0E4",
  },

  secondary: {
    main: "#F7F4F2",
    focus: "#B2B0AE",
  },
  light: {
    main: "#F1F3F6",
    focus: "#FF7700",
  },

  disabled: {
    main: "#9f99ac",
    focus: "#d3d6db",
  },

  info: {
    main: "#fff0e4",
    focus: "#f1f3f6",
  },

  success: {
    main: "#4CAF50",
    focus: "#67bb6a",
  },

  warning: {
    main: "#fb8c00",
    focus: "#fc9d26",
  },

  error: {
    main: "#F44335",
    focus: "#f65f53",
  },

  dark: {
    main: "#000000",
    focus: "#2c3c58",
  },

  gray: {
    100: "#3B3C3F",
    200: "#5C5F63",
    300: "#999DA3",
    400: "#D3D6DB",
    500: "#F1F3F6",
  },
};

export default colors;
