"use client";

import { createTheme } from "@mui/material";
import colors from "./theme/base/colors";
import globals from "./theme/base/globals";
import typography from "./theme/base/typography";
import button from "./theme/components/button";
import formControlLabel from "./theme/components/input/formControlLabel";
import input from "./theme/components/input/input";
import radio from "./theme/components/input/radio";

export const theme = createTheme({
  palette: { ...colors },
  typography: { ...typography },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },
    MuiButton: { ...button },
    MuiRadio: { ...radio },
    MuiFormControlLabel: { ...formControlLabel },
    MuiInput: { ...input },
  },
});
