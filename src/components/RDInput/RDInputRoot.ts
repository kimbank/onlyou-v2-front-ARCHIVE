import colors from "@/assets/theme/base/colors";
import { styled, TextField } from "@mui/material";

export default styled(TextField)(({ theme }) => {
  const { gray4 } = colors;

  return {
    backgroundColor:gray4,
    width: "100%",
  };
});
