import styled from "@emotion/styled";
import { FormControlLabel } from "@mui/material";
import colors from "@/assets/theme/base/colors";

const { info, primary, disabled } = colors;
export const StyledFormControlLabel = styled(FormControlLabel)(
  ({ theme, checked }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: "24px",
    marginBottom: "2px",
    marginLeft: 0,
    marginRight: 0,
    border: checked
      ? `1px solid ${primary.main}`
      : `1px solid ${disabled.focus}`,
    borderRadius: "6px",
    backgroundColor: checked ? info.main : "transparent",
    "&:hover": {
      backgroundColor: info.focus,
    },
    "&:focus, &:focus-within": {
      backgroundColor: checked
        ? `${info.main} !important`
        : `${info.focus} !important`,
      outline: `2px solid ${info.focus} !important`,
    },
  })
);
