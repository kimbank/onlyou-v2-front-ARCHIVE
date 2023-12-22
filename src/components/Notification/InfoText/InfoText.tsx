"use client";

import { Typography } from "@mui/material";

import { Container } from "@mui/material";
import InfoTextRoot from "./InfoTextRoot";

type Props = {
  children: React.ReactNode;
  alertMessage?: string;
  shadow?: boolean;
  bgColor?: "primary" | "secondary";
};

export function InfoText({ children, alertMessage, shadow = false ,   bgColor,}: Props) {
  return (
    <InfoTextRoot shadow={shadow}   bgColor={bgColor}>
      <Container color="primary" className="info-text-button">
             {children}
      </Container>
    </InfoTextRoot>
  );
}

InfoText.defaultProps = {
  bgColor: "primary",
};
