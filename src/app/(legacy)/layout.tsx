"use client";

import { theme } from "@/assets";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import Navigation from "../../components/NavBars/Navigation";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Navigation />
    </ThemeProvider>
  );
}
