
interface ColorType {
  main: string | any;
}

interface ColorsTypes {
  white?: string | any;
  black?: string | any;
  primary?: ColorType;
  primary_darken?: string | any;
  primary_lighten1?: string | any;
  primary_lighten2?: string | any;
  primary_lighten3?: string | any;
  gray1?: string | any;
  gray2?: string | any;
  gray3?: string | any;
  gray4?: string | any;
  gray5?: string | any;
}

const colors: ColorsTypes = {
  // white: {
  //   main: "#ffffff",
  // },
  white: "#ffffff",
  black: "#000000",
  primary: {
    main: "#ff7700",
  },
  primary_darken: "#F16416",
  primary_lighten1: "#FFB06C",
  primary_lighten2: "#FFD9B7",
  primary_lighten3: "#FFF0E4",
  gray1: "#3B3C3F",
  gray2: "#5C5F63",
  gray3: "#999DA3",
  gray4: "#D3D6DB",
  gray5: "#F1F3F6",
  // disabled: {
  //   main: "#9f99ac",
  //   focus: "#d3d6db",
  // },
};

export default colors;
