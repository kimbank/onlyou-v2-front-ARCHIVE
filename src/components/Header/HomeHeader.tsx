import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import LogoIcon from "public/icons/logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import { Box } from "@mui/material";

import HeaderRoot from "./HeaderRoot";


export const HomeHeader = () => {
  const [hoverNoti, setHoverNoti] = useState(false);
  const [hoverChat, setHoverChat] = useState(false);

  return (
    <HeaderRoot>
      <div className="header-container">
        <header className="header">
          <Link href="/">
            <Image
              src={LogoIcon}
              alt="logo"
              width={24}
              height={24}
              priority={true}
              style={{ verticalAlign: "middle" }}
            />
          </Link>

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
        </header>
      </div>
    </HeaderRoot>
  );
};

export default HomeHeader;