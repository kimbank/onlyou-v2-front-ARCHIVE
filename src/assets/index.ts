"use client";

import { createTheme } from "@mui/material";
import colors from "./theme/base/colors";
import globals from "./theme/base/globals";
import typography from "./theme/base/typography";
import button from "./theme/components/button";

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
  },
});
