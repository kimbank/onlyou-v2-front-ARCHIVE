interface Types {
  fontFamily: string;
  fontWeightBold: number;
  fontWeightSemiBold: number;
  fontWeightRegular: number;
  fontWeightLight: number;

  // Heading1-24
  h1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // subhead-16
  subtitle1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };
  // subhead-14
  subtitle2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };
  // subhaed-12
  subtitle3: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // body-16
  body1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };
  // body-14
  body2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };
  // body-12
  body3: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // caption-12
  caption: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // 버튼 텍스트
  button: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };
  button_medium: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // 칩스 텍스트
  chips: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // 체크박스 텍스트
  checkbox: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };

  // 네비게이션 텍스트
  nav: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  };


  /* legacy */
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
  /* ****** */
}

const baseProperties = {
  fontFamily: "Pretendard",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontSizeXS: "12px",
  fontSizeSM: "14px",
  fontSizeMD: "16px",
  fontSizeLG: "20px,",
  fontSizeXL: "24px",
  fontSize2XL: "26px",
  fontSize3XL: "32px",
};

const typography: Types = {
  fontFamily: "Pretendard",
  fontWeightBold: baseProperties.fontWeightBold,
  fontWeightSemiBold: baseProperties.fontWeightSemiBold,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightLight: baseProperties.fontWeightLight,

  h1: {
    fontFamily: "Pretendard",
    fontSize: "24px",
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: "130%",
  },

  subtitle1: {
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: "150%",
  },

  subtitle2: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: "140%",
  },

  subtitle3: {
    fontFamily: "Pretendard",
    fontSize: "12px",
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: "140%",
  },

  body1: {
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: "145%",
  },

  body2: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: "140%",
  },

  body3: {
    fontFamily: "Pretendard",
    fontSize: "12px",
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: "140%",
  },

  caption: {
    fontFamily: "Pretendard",
    fontSize: "12px",
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: "140%",
  },

  button: {
    fontFamily: "Pretendard",
    fontSize: "16px",
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: "100%",
  },

  button_medium: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: "100%",
  },

  chips: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: baseProperties.fontWeightSemiBold,
    lineHeight: "100%",
  },

  checkbox: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: "140%",
  },

  nav: {
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: "140%",
  },


  /* legacy */
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
  /* ****** */
};


declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    button_medium: React.CSSProperties;
    chips: React.CSSProperties;
    checkbox: React.CSSProperties;
    nav: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    button_medium?: React.CSSProperties;
    chips?: React.CSSProperties;
    checkbox?: React.CSSProperties;
    nav?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    button_medium: true;
    chips: true;
    checkbox: true;
    nav: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}


/* ************************* */
/* way of adding new variant */
/* ************************* */

// declare module '@mui/material/styles' {
//   interface TypographyVariants {
//     body3: React.CSSProperties;
//   }

//   interface TypographyVariantsOptions {
//     body3?: React.CSSProperties;
//   }
// }

// declare module "@mui/material/Typography" {
//   interface TypographyPropsVariantOverrides {
//     body3: true;
//   }
// }
/* ************************* */



export default typography;