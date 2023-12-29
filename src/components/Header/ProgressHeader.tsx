"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import LogoIcon from "public/icons/logo.svg";
import CloseIcon from "@mui/icons-material/CloseRounded";


import { Box, LinearProgress } from "@mui/material";

import HeaderRoot from "./HeaderRoot";
import { SaveModal } from "../Modal/SaveModal";

export const ProgressHeader = ({
  progress,
}: {
  href?: string;
  progress?: number;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

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

          <CloseIcon
            className="closeIcon"
            onClick={handleOpenModal}
          />
        </header>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
      <SaveModal open={modalOpen} onClose={handleCloseModal} />
    </HeaderRoot>
  );
};

export default ProgressHeader;
