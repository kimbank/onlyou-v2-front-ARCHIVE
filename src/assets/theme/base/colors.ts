interface ColorsTypes {
  main?: string;
  focus?: string;
  Primary_lighten1?:string;
  Primary_lighten2?:string;
  Primary_lighten3?:string;
}

interface Types {
  transparent: ColorsTypes | any;
  white: ColorsTypes | any;
  black: ColorsTypes | any;
  primary: ColorsTypes | any;
  secondary: ColorsTypes | any;
  info: ColorsTypes | any;
  light: ColorsTypes | any;
  disabled: ColorsTypes | any;
  dark: ColorsTypes | any;
  gray:
    | {
        [key: string]: string;
      }
    | any;
}

const colors: Types = {
  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  black: {
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
  info: {
    main: "#fff0e4",
    focus: "#f1f3f6",
  },

  light: {
    main: "#F1F3F6",
    focus: "#FF7700",
  },

  disabled: {
    main: "#9f99ac",
    focus: "#d3d6db",
  },

  dark: {
    main: "#000000",
    focus: "#2c3c58",
  },

  gray: {
    "100": "#3B3C3F",
    "200": "#5C5F63",
    "300": "#999DA3",
    "400": "#D3D6DB",
    "500": "#F1F3F6",
  },
};

export default colors;
