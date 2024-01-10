import { Box, Button, Container, Typography } from "@mui/material";
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

export const LetterModal = ({ children, open, onClose }: ModalProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    router.push("/Complete");
  };

  return (
    <ModalFrame open={open} onClose={onClose}>
      <LetterModalRoot>
        <ModalTitle>
          <Typography variant="subtitle1">매칭 신청서 완성</Typography>
        </ModalTitle>
        <ModalContent>
          <Box className="modal-contents">
            <Typography variant="body2">정말 제출 하시겠어요?</Typography>
            <Typography variant="body2">
              매칭신청서는 내정보 탭에서 언제든 수정할 수 있어요.
            </Typography>
          </Box>
        </ModalContent>
        <ModalButton>
          <Box className="modal-buttons">
            <Button color="primary" variant="outlined" onClick={onClose}>
              <Typography variant="subtitle2">다시 작성하기</Typography>
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleCompleteClick}
            >
              <Typography color="white" variant="subtitle2">
                제출하기
              </Typography>
            </Button>
          </Box>
        </ModalButton>
      </LetterModalRoot>
    </ModalFrame>
  );
};

import { styled } from "@mui/material";

const LetterModalRoot = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    height: 133,
    gap: "12px",
    "& > :nth-child(3)": {
      marginTop: "8px",
    },
    ".modal-buttons": {
      display: "flex",
      gap: "12px",
      justifyContent: "flex-end",
    },
  };
});
