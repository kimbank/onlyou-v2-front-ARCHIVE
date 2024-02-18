import React from 'react';
import { useRouter } from 'next/navigation';
import { styled, Collapse, Typography, Button } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';


const NotificationCollapse = (
  { isModalOpen, closeModal }: { isModalOpen: boolean, closeModal: () => void }
) => {
  const router = useRouter();

  return (
    <Collapse in={isModalOpen} unmountOnExit>
      <NoticeModalRoot>
        <CloseIcon onClick={closeModal} />
        <Typography variant="body2">
          새롭게 추가된 조건인
          <br />
          <strong>연봉, 외향/내향, 외적 매력, 내적 매력</strong>을
          채워주세요.
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

export default NotificationCollapse;
