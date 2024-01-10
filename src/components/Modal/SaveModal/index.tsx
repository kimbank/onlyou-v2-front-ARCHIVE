import { Box, Button, Container, Typography } from "@mui/material";
import ModalFrame from "../ModalFrame";
import ModalButton from "../modalItem/ModalButton";
import ModalContent from "../modalItem/ModalContent";
import ModalTitle from "../modalItem/ModalTitle";
import { useRouter } from "next/navigation";

interface ModalProps {
  children?: React.ReactNode;
  open: any;
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
            매칭 신청서 작성을 중단하시겠어요?
          </Typography>
        </ModalTitle>
        <ModalContent>
          <Box className="modal-contents">
            <Typography variant="body2">
              이전 단계까지의 모든 내용이 저장되며,
              <br />
              언제든 이어 작성하실 수 있어요!
            </Typography>
          </Box>
        </ModalContent>
        <ModalButton>
          <Box className="modal-buttons">
            <Button variant="outlined" onClick={onClose}>
              <Typography variant="subtitle2">취소</Typography>
            </Button>
            <Button variant="contained" onClick={handleCompleteClick}>
              <Typography color="white" variant="subtitle2">
                저장하고 나가기
              </Typography>
            </Button>
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
    height: 114,
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
