import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoIcon from "public/images/header/logo_48x48.png";

import { useState } from "react";

import { Box, LinearProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseRounded";

import HeaderRoot from "./HeaderRoot";


export const HomeHeader = ({ href = "/", progress }: { href: string, progress: number }) => {

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
          
          <Link href={href} style={{ fontSize: "28px" }}>
            <CloseIcon fontSize="inherit" />
          </Link>
        </header>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
    </HeaderRoot>
  );
};

export default HomeHeader;
