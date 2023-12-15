"use client";

import { theme } from "@/assets";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        sx={{ padding: "48px 0", paddingBottom: "90px" }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
}
