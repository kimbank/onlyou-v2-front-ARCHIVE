"use client";

import { Box, styled } from "@mui/material";

import colors from "@/assets/theme/base/colors";


type Props = {
  children: React.ReactNode;
  bgColor?: "primary" | "secondary";
};

export function InfoText({ children,  bgColor }: Props) {
  return (
    <InfoTextRoot bgColor={bgColor}>
        {children}
    </InfoTextRoot>
  );
}

const InfoTextRoot = styled(Box)(({  bgColor }: Props) => {
  const { primary_lighten3 ,gray5 } = colors;
  return {
    borderRadius: "6px",
    backgroundColor: bgColor === "primary" ? primary_lighten3 : gray5,
    padding: "16px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    gap: "8px",
  };
});
