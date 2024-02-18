import React from 'react';
import { useRouter } from 'next/navigation';
import { styled, Collapse, Typography, Button } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

import useModal from '@/hooks/useModal';
import useMatchingStatus from '@/api/hooks/useMatchingStatus';


const NoticeModal = () => {
  const router = useRouter();
  const { openModal: openMe, isModalOpen: isOpenMe, closeModal: closeMe } = useModal();
  const { openModal: openLetter, isModalOpen: isOpenLetter, closeModal: closeLetter } = useModal();
  const { meComplete, letterComplete, isLoading, isError } = useMatchingStatus();

  React.useEffect(() => {
    if (isLoading || isError) return;
    // 매칭 상태가 매칭 대기 상태이고, 내 정보가 불완전한 경우 모달을 띄움
    if (meComplete === false) {
      openMe();
    }
    if (letterComplete === false) {
      openLetter();
    }
  }, [isLoading, isError, meComplete, letterComplete]);

  return (
    <>
      {
      !isLoading && !isError &&
        <Collapse in={isOpenMe} unmountOnExit>
          <NoticeModalRoot>
            <CloseIcon onClick={closeMe} />
            <Typography variant="body2">
              <strong>새롭게 추가되거나 변경된 조건이 있어요!</strong>
              <br />
              연봉, 근무 형태, 흡연 경력, 음주 생활, 외향/내향, 직관/현실, 감성/이성, 즉흥/계획, 성격 매력, 커리어와 가정 가치관, 자녀 가치관, 외적 매력, 문신 유무
            </Typography>
            <Button
              onClick={() => router.push("/myinfo?tab=modify")}
              variant="contained"
              color="primary"
            >
              내 정보 수정 바로가기
            </Button>
          </NoticeModalRoot>
        </Collapse>
      }
      {
        !isLoading && !isError &&
        <Collapse in={isOpenLetter} unmountOnExit>
          <NoticeModalRoot>
            <CloseIcon onClick={closeLetter} />
            <Typography variant="body2">
              <strong>편지 작성 방식이 변경되었어요!</strong>
              <br />
              이제 질문을 통해 작성할 수 있어요.
            </Typography>
            <Button
              onClick={() => router.push("/myinfo/letter")}
              variant="contained"
              color="primary"
            >
              편지 질문 추가
            </Button>
          </NoticeModalRoot>
        </Collapse>
      }
    </>
  )
}

const NoticeModalRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  backgroundColor: String(theme.palette.primary_lighten3),
  padding: "20px 16px 16px 16px",
  borderRadius: "6px",
  position: "relative",
  "&> button": {
    height: "34px !important",
  },
}));

const CloseIcon = styled(CloseRounded)(() => {
  return {
    position: "absolute",
    width: "20px",
    height: "20px",
    top: 0,
    right: 0,
    marginTop: "12px",
    marginRight: "16px",
    cursor: "pointer",
  };
});

export default NoticeModal;
