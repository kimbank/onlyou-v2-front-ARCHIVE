import { AppBar, Container } from "@mui/material";
import Image from "next/image";

export function MyInfoHeader({ onClick }: any) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#FFFFFF",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "480px",
        left: "50%",
        transform: "translate(-50%, 0)",
        boxShadow: "none",
      }}
    >
      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "32px",
        }}
      >
        {/* <Image src={Cancel} width="24px" onClick={onClick} /> */}
      </Container>
    </AppBar>
  );
}
