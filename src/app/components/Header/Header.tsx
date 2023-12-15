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
import HeaderRoot from "./HeaderRoot";
export const Header = ({ onClick }: any) => {
  const Logo = "/logo.png";
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const [hoverNoti, setHoverNoti] = useState(false);
  const [hoverChat, setHoverChat] = useState(false);
  return (
    <HeaderRoot position="fixed">
      <Container disableGutters className="header-container" sx={{}}>
        <Toolbar className="toolbar">
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
          <Box className="header-box">
            <Box
              className="noti-box"
              onMouseEnter={() => setHoverNoti(true)}
              onMouseLeave={() => setHoverNoti(false)}
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
              className="chat-box"
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
    </HeaderRoot>
  );
};
