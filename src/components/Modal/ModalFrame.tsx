import React from "react";
import { Modal as MuiModal, Box } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalFrame({ open, onClose, children }: ModalProps) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 345,
          bgcolor: "background.paper",
          boxShadow: 24,
          padding: "20px",
          borderRadius: "6px",

        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
}
