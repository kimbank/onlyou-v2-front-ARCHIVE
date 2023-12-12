import colors from "./colors";

const { dark } = colors;

const baseProperties = {
  fontFamily: '"Pretendard"',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  fontSizeXS: "11px",
  fontSizeSM: "14px",
  fontSizeMD: "17px",
  fontSizeLG: "20px,",
  fontSizeXL: "23px",
  fontSize2XL: "26px",
  fontSize3XL: "32px",
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
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
    fontSize: "23px",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: "20px",
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: "17px",
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
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6,
  },

  body3: {
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
