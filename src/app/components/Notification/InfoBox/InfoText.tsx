"use client";

import { Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Container } from "@mui/material";
import InfoBoxRoot from "./InfoBoxRoot";

type Props = {
  children: React.ReactNode;
  alertMessage?: string;
  shadow?: boolean;
};

export function InfoBox({ children, alertMessage, shadow = false }: Props) {
  return (
    <InfoBoxRoot shadow={shadow}>
      <Container className="info-text-button">
        <InfoOutlinedIcon className="info-icon" />
        {children}
      </Container>
    </InfoBoxRoot>
  );
}
