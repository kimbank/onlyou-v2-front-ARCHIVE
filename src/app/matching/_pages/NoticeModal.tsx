import React from 'react';
import { styled, Collapse, Typography, Button } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

import useModal from '@/hooks/useModal';
import useMatchingStatus from '@/api/hooks/useMatchingStatus';

const NoticeModal = () => {
  const { openModal, isModalOpen, closeModal } = useModal();
  const { meComplete, isLoading, isError } = useMatchingStatus();

  React.useEffect(() => {
    // 매칭 상태가 매칭 대기 상태이고, 내 정보가 불완전한 경우 모달을 띄움
    if (meComplete === false) {
      openModal();
    }
  }, []);

  return (
    !isLoading && !isError &&
    <Collapse in={isModalOpen} unmountOnExit>
      <NoticeModalRoot>
        <CloseIcon onClick={closeModal} />
        <Typography variant="body2">
          새롭게 추가된 조건인
          <br />
          <strong>연봉, 외향/내향, 외적 매력, 내적 매력</strong>을
          채워주세요.
        </Typography>
        <Button variant="contained" color="primary">
          내 정보 수정 바로가기
        </Button>
      </NoticeModalRoot>
    </Collapse>
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
