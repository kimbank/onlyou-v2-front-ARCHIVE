interface ColorsTypes {
  main: string;
  focus: string;
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
  grey:
    | {
        [key: string | number]: string;
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
  },

  secondary: {
    main: "#F7F4F2",
    focus: "#B2B0AE",
  },
  light: {
    main: "#FFA266",
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

  grey: {
    100: "#f1f3f6",
    200: "#f0f2f5",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
};

export default colors;
