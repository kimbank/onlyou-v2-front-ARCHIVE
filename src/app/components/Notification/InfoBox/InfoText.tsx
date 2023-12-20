"use client";

import { Box, Divider, Typography } from "@mui/material";

import InfoBoxRoot from "./InfoBoxRoot";

type Props = {
  children: React.ReactNode;
  textAlign?: "center" | "left";
  align?: "center" | "left";
  marginB?: "bottom" | "none";
  bgColor?: "primary" | "secondary";
};

export function InfoBox({
  children,
  align,
  textAlign,
  marginB,
  bgColor,
}: Props) {
  return (
    <InfoBoxRoot
      align={align}
      textAlign={textAlign}
      marginB={marginB}
      bgColor={bgColor}
    >
      <Box className="info-text-button">{children}</Box>
    </InfoBoxRoot>
  );
}

InfoBox.defaultProps = {
  align: "center",
  textAlign: "center",
  marginB: "bottom",
  bgColor: "primary",
};
