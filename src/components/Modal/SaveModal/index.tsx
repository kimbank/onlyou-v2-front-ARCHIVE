import { Box, Container, Typography } from "@mui/material";
import RDButton from "../../RDButton/RDButton";
import ModalFrame from "../ModalFrame";
import ModalButton from "../modalItem/ModalButton";
import ModalContent from "../modalItem/ModalContent";
import ModalTitle from "../modalItem/ModalTitle";
import { useRouter } from "next/navigation";

interface ModalProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const SaveModal = ({ children, open, onClose }: ModalProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    router.push("/matching");
  };

  return (
    <ModalFrame open={open} onClose={onClose}>
      <SaveModalRoot>
        <ModalTitle>
          <Typography variant="subtitle1">
            저장되지 않은 조건 변경이 있어요
          </Typography>
        </ModalTitle>
        <ModalContent>
          <Box className="modal-contents">
            <Typography variant="body2">저장하지 않고 나가시겠어요?</Typography>
          </Box>
        </ModalContent>
        <ModalButton>
          <Box className="modal-buttons">
            <RDButton
              color="primary"
              variant="outlined"
              size="small"
              onClick={onClose}
            >
              <Typography variant="body2">취소</Typography>
            </RDButton>
            <RDButton
              color="primary"
              variant="contained"
              size="small"
              onClick={handleCompleteClick}
            >
              <Typography variant="body2">저장하고 나가기</Typography>
            </RDButton>
          </Box>
        </ModalButton>
      </SaveModalRoot>
    </ModalFrame>
  );
};
import { styled } from "@mui/material";

const SaveModalRoot = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    gap: "12px",
    height: 154,
    "& > :nth-child(3)": {
      marginTop: "12px",
    },
    ".modal-buttons": {
      display: "flex",
      gap: "12px",
      justifyContent: "flex-end",
    },
  };
});
