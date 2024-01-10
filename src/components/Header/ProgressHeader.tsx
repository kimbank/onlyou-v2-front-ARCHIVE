"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import LogoIcon from "public/icons/logo.svg";
import CloseIcon from "@mui/icons-material/CloseRounded";

import { Box, LinearProgress } from "@mui/material";

import HeaderRoot from "./HeaderRoot";
import { SaveModal } from "../Modal/SaveModal";
import useModal from "@/hooks/useModal";

export const ProgressHeader = ({
  progress,
}: {
  href?: string;
  progress?: number;
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <HeaderRoot>
      <div className="header-container">
        <header className="header">
          <Link href="/matching">
            <Image
              src={LogoIcon}
              alt="logo"
              width={24}
              height={24}
              priority={true}
              style={{ verticalAlign: "middle" }}
            />
          </Link>

          <CloseIcon className="closeIcon" onClick={openModal} />
        </header>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
      <SaveModal open={isModalOpen} onClose={closeModal} />
    </HeaderRoot>
  );
};

export default ProgressHeader;
