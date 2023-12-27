import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { fontWeightBold, size } = typography;

const root = {
  // display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  // fontSize: size.xs,
  // fontWeight: fontWeightBold,
  // padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  boxShadow: "none",
  border: "1px solid inherit",
  borderRadius: "6px",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;
