import colors from "@/assets/theme/base/colors";
import { styled, Button } from "@mui/material";

interface Props {
  children?: React.ReactNode | string;

  color?: "primary" | "secondary";
  variant?: "contained" | "outlined" | "default";
  size?: "small" | "medium" | "large";

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  onClick?: () => void;
  disabled?: boolean;
  sx?: any;
}
const { gray3, gray4 } = colors;

const SampleButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon = null,
  endIcon = null,
  onClick = () => {},
  disabled = false,
  sx = null,
}: Props) => {
  let COLOR = {};
  let SIZE = {};

  switch (color) {
    case "primary":
      COLOR = colorPrimary;
      break;
    case "secondary":
      COLOR = colorSecondary;
      break;
  }

  switch (size) {
    case "medium":
      SIZE = sizeMedium;
      break;
    case "large":
      SIZE = sizeLarge;
      break;
  }

  if (variant === "outlined" && size === "medium") {
    COLOR = { ...COLOR, mediumOutlined };
  }
  if (variant === "outlined" && size === "large") {
    COLOR = { ...COLOR, largeOutlined };
  }
  if (variant === "default") {
    COLOR = { ...COLOR, variantDefault };
  }

  const StyledButton = styled(Button)({
    /** color */
    ...COLOR,
    /** size */
    ...SIZE,
  });

  return (
    <StyledButton
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      sx={sx && sx}
    >
      {children}
    </StyledButton>
  );
};

const sizeMedium = {
  // display: "inline-flex",
  width: "auto",
  height: "34px",
  padding: "8px 12px",
  // alignItems: "center",
  borderRadius: "6px",

  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "100%" /* 14px */,
  textAlign: "center",
};

const sizeLarge = {
  // display: "flex",
  width: "100%",
  height: "52px",
  padding: "8px",
  // justifyContent: "center",
  // alignItems: "center",
  flexShrink: "0",
  borderRadius: "6px",

  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "100%" /* 14px */,
  textAlign: "center",
};

const colorPrimary = {
  backgroundColor: "#f70",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#F16416",
    color: "#FFF",
  },
  ".Mui-disabled": {
    backgroundColor: "#999DA3",
    color: "#D3D6DB",
  },
};
const colorSecondary = {
  backgroundColor: "#FFD9B7",
  color: "#FFD9B7",
  border: "1px solid #f70",
  "&:hover": {
    backgroundColor: "#FFB06C",
    color: "#F16416",
  },
  ".Mui-disabled": {
    backgroundColor: "#999DA3",
    color: "#D3D6DB",
  },
};

const variantDefault = {
  backgroundColor: "#F1F3F6",
  color: "#5C5F63",
  border: "1px solid #f70",
  "&:hover": {
    backgroundColor: "#FFF0E4",
  },
  ".Mui-disabled": {
    backgroundColor: gray3,
    color: gray4,
  },
};

const mediumOutlined = {
  backgroundColor: "#fff",
  color: "#f70",
  border: "1px solid #f70",
  "&:hover": {
    backgroundColor: "#FFF0E4",
  },
  ".Mui-disabled": {
    backgroundColor: gray3,
    color: gray4,
  },
};

const largeOutlined = {
  backgroundColor: "#fff",
  color: "#f70",
  border: "1px solid #f70",
  "&:hover": {
    backgroundColor: "#FFF0E4",
  },
  ".Mui-disabled": {
    backgroundColor: gray3,
    color: gray4,
  },
};

export default SampleButton;
