import { Typography } from "@mui/material";
import RDButton from "../../RDButton/RDButton";
import ModalFrame from "../ModalFrame";
import ModalButton from "../modalItem/ModalButton";
import ModalContent from "../modalItem/ModalContent";
import ModalTitle from "../modalItem/ModalTitle";

interface ModalProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const LetterModal = ({ children, open, onClose }: ModalProps) => {
  return (
    <ModalFrame open={open} onClose={onClose}>
      <ModalTitle>
        <Typography variant="h5">매칭 신청서 완성</Typography>
      </ModalTitle>
      <ModalContent>
        <Typography variant="body3">
          정말 제출 하시겠어요? 매칭신청서는 내정보 탭에서 언제든 수정할 수
          있어요.
        </Typography>
      </ModalContent>
      <ModalButton>
        <RDButton color="primary" variant="outlined">
          다시작성하기
        </RDButton>
        <RDButton color="primary" variant="contained">
          제출하기
        </RDButton>
      </ModalButton>
    </ModalFrame>
  );
};
