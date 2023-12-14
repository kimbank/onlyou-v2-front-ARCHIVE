"use client";

import { Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Container } from "@mui/material";
import InfoTextRoot from "./InfoTextRoot";

type Props = {
  children: React.ReactNode;
  alertMessage?: string;
  shadow?: boolean;
};

export function InfoText({ children, alertMessage, shadow = false }: Props) {
  return (
    <InfoTextRoot shadow={shadow}>
      <Container color="primary" className="info-text-button">
        <InfoOutlinedIcon className="info-icon" />
        {children}
      </Container>
    </InfoTextRoot>
  );
}
