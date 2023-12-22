"use client";

import { theme } from "@/assets";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters sx={{ padding: "55px 0px" }}>
        {children}
      </Container>
    </ThemeProvider>
  );
}
