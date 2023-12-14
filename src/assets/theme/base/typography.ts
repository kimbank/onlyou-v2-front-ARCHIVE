import colors from "./colors";

const { dark } = colors;

interface Types {
  fontFamily: string;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightBold: number;
  h1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;

    lineHeight: number;
  };
  h2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;

    lineHeight: number;
  };
  h3: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;

    lineHeight: number;
  };
  h4: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;

    lineHeight: number;
  };
  h5: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;

    lineHeight: number;
  };
  h6: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;

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

const baseProperties = {
  fontFamily: "Pretendard",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  fontSizeXS: "12px",
  fontSizeSM: "14px",
  fontSizeMD: "16px",
  fontSizeLG: "20px,",
  fontSizeXL: "24px",
  fontSize2XL: "26px",
  fontSize3XL: "32px",
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  fontWeight: baseProperties.fontWeightBold,
};

const typography: Types = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: "32px",
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: "26px",
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: "24px",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: "20px",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: "16px",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: "14px",
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.4,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  size: {
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
