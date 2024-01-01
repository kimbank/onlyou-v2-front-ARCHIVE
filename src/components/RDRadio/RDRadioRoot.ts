import styled from "@emotion/styled";
import { FormControlLabel } from "@mui/material";
import colors from "@/assets/theme/base/colors";

const { primary, primary_lighten3, gray4, gray5 } = colors;
export const StyledFormControlLabel = styled(FormControlLabel)(
  ({ theme, checked }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: "24px",
    marginBottom: "2px",
    marginLeft: 0,
    marginRight: 0,
    border: checked ? `1px solid ${primary}` : `1px solid ${gray4}`,
    borderRadius: "6px",
    backgroundColor: checked ? primary_lighten3 : "transparent",
    "&:hover": {
      backgroundColor: gray5,
    },
    "&:focus, &:focus-within": {
      backgroundColor: checked
        ? `${primary_lighten3} !important`
        : `${gray5} !important`,
      outline: `2px solid ${gray5} !important`,
    },
  })
);
