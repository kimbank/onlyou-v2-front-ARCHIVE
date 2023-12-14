"use client";

import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const Header = ({ onClick }: any) => {
  const Logo = "/logo.png";
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const [hoverNoti, setHoverNoti] = useState(false);
  const [hoverChat, setHoverChat] = useState(false);
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
          paddingRight: "24px",
        }}
      >
        <Toolbar
          sx={{ gap: 0.5, flexGrow: 1, marginTop: "6px", padding: "0 32px" }}
        >
          <a href="/">
            <Image
              src={Logo}
              alt="logo"
              width={19.5}
              height={32}
              priority={true}
            />
          </a>
        </Toolbar>
        {currentPage === "matching" ? (
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              cursor: "pointer",
            }}
          >
            <Box
              onMouseEnter={() => setHoverNoti(true)}
              onMouseLeave={() => setHoverNoti(false)}
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {hoverNoti ? (
                <NotificationsIcon color="primary" />
              ) : (
                <NotificationsNoneIcon color="primary" />
              )}
            </Box>
            <Box
              onMouseEnter={() => setHoverChat(true)}
              onMouseLeave={() => setHoverChat(false)}
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {hoverChat ? (
                <ChatBubbleIcon color="primary" />
              ) : (
                <ChatBubbleOutlineIcon color="primary" />
              )}
            </Box>
          </Box>
        ) : (
          <CloseIcon />
        )}
      </Container>
    </AppBar>
  );
};
