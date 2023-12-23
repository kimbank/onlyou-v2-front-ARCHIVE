"use client";

import { Box, styled } from "@mui/material";

import colors from "@/assets/theme/base/colors";


type Props = {
  children: React.ReactNode;
  alertMessage?: string;
  shadow?: boolean;
  bgColor?: "primary" | "secondary";
};

export function InfoText({ children, alertMessage, shadow = false ,   bgColor,}: Props) {
  return (
    <InfoTextRoot shadow={shadow} bgColor={bgColor}>
        {children}
    </InfoTextRoot>
  );
}

InfoText.defaultProps = {
  bgColor: "primary",
};

const InfoTextRoot = styled(Box)(({ shadow, bgColor }: Props) => {
  const { info } = colors;
  return {
      borderRadius: "6px",
      backgroundColor: bgColor === "primary" ? info.main : info.focus,
      padding: "16px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      gap: "8px",
  };
});
