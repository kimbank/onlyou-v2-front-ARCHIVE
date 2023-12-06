"use client";

import { MyInfoHeader } from "@/app/components/Header/MyInfoHeader";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFA266",
      main: "#FF7700",
      dark: "#C45A00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#F7F4F2",
      dark: "#B2B0AE",
      contrastText: "#3C3B3A",
    },
  },
});

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <MyInfoHeader />
      <Container disableGutters sx={{ padding: "55px 5px" }}>
        {children}
      </Container>
    </ThemeProvider>
  );
}
