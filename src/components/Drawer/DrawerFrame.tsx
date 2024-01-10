import React from "react";
import { Box, Container, SwipeableDrawer } from "@mui/material";
import DrawerRoot from "./DrawerRoot";

interface DrawerProps {
  open?: boolean;
  onOpen?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  children: React.ReactNode;
}

export default function DrawerFrame({
  open,
  onOpen,
  onClose,
  children,
}: DrawerProps) {
  return (
    <DrawerRoot
      anchor="bottom"
      open={open}
      onOpen={onOpen || (() => {})}
      onClose={onClose || (() => {})}
    >
      {children}
    </DrawerRoot>
  );
}
