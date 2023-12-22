import { Container, Typography } from "@mui/material";
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

export const LetterModal = ({ children, open, onClose }: ModalProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    router.push("/Complete");
  };

  return (
    <ModalFrame open={open} onClose={onClose}>
      <LetterModalRoot>
        <ModalTitle>
          <Typography variant="h5">매칭 신청서 완성</Typography>
        </ModalTitle>
        <ModalContent>
          <Container className="modal-contents">
            <Typography variant="body2">정말 제출 하시겠어요?</Typography>
            <Typography variant="body2">
              매칭신청서는 내정보 탭에서 언제든 수정할 수 있어요.
            </Typography>
          </Container>
        </ModalContent>
        <ModalButton>
          <Container className="modal-buttons">
            <RDButton color="primary" variant="outlined">
              다시작성하기
            </RDButton>
            <RDButton
              color="primary"
              variant="contained"
              onClick={handleCompleteClick}
            >
              제출하기
            </RDButton>
          </Container>
        </ModalButton>
      </LetterModalRoot>
    </ModalFrame>
  );
};

import { styled } from "@mui/material";

const LetterModalRoot = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    gap: "11px",
    ".modal-contents": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
    },
    ".modal-buttons": {
      width: "100%",
      padding: 0,
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
    },
  };
});
