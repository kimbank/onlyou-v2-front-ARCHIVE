"use client";

import Link from "next/link";
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
  const Logo = "/images/header/logo_48x48.png";
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const [hoverNoti, setHoverNoti] = useState(false);
  const [hoverChat, setHoverChat] = useState(false);

  return (
    <HeaderRoot>
      <div className="header-container">
        <header className="header">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={24}
              height={24}
              priority={true}
              style={{ verticalAlign: "middle" }}
            />
          </Link>
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
                  <ChatBubbleIcon color="primary"  />
                ) : (
                  <ChatBubbleOutlineIcon color="primary" />
                )}
              </Box>
            </Box>
          ) : (
            <CloseIcon />
          )}
        </header>
      </div>
    </HeaderRoot>
  );
};
