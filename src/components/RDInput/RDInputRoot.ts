import colors from "@/assets/theme/base/colors";
import { styled, TextField } from "@mui/material";

export default styled(TextField)(({ theme }) => {
  const { disabled } = colors;

  return {
    backgroundColor: disabled.focus,
    width: "100%",
  };
});
