import { AppBar, Container, Toolbar } from "@mui/material";
import Image from "next/image";

export const Header = ({ onClick }: any) => {
  const Logo = "/logo.png";
  const Cancel = "/cancel.svg";
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
        boxShadow: "0px 2px 8px -2px rgba(0, 0, 0, 0.25)",
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
        <Toolbar
          sx={{ gap: 0.5, flexGrow: 1, marginTop: "6px", padding: "0 32px" }}
        >
          <a href="/">
            {/* <Image src={Logo} alt="logo" width={84} height={30} priority={true} /> */}
            <Image
              src={Logo}
              alt="logo"
              width={19.5}
              height={32}
              priority={true}
            />
          </a>

          {/* <div className='logo-title' style={{ marginTop: '-12px' }}>온리유</div> */}
        </Toolbar>
        <Image
          src={Cancel}
          width={28}
          height={28}
          onClick={onClick}
          alt="cancel"
        />
      </Container>
    </AppBar>
  );
};
