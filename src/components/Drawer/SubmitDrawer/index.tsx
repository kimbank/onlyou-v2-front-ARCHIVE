import { Box, Button, styled, Typography } from "@mui/material";

import { useRouter } from "next/navigation";
import DrawerFrame from "../DrawerFrame";
import DrawerButton from "../DrawerItem/DrawerButton";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface DrawerProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  nextHref?: string;
}

export const SubmitDrawer = ({
  children,
  open,
  onClose,
  nextHref,
}: DrawerProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    if (nextHref) {
      router.push(nextHref);
    } else {
      router.push("/Complete");
    }
  };

  return (
    <DrawerFrame open={open} onClose={onClose}>
      <SubmitDrawerRoot>
        <Typography variant="h1" sx={{ display: "inline" }}>
          이제 회원님의
          <br />
          이상형을 알려주세요!
        </Typography>
        <Typography variant="body1" sx={{ display: "inline" }}>
          원하는 이상형 조건을 1, 2, 3순위 별로 선택해요
        </Typography>
        <CloseRoundedIcon
          sx={{ cursor: "pointer" }}
          className="drawer-icon"
          onClick={onClose}
        />
      </SubmitDrawerRoot>
      <DrawerButton>
        <Button
          color="primary"
          variant="contained"
          onClick={handleCompleteClick}
          size="large"
        >
          <Typography variant="subtitle1">이상형 정보 입력하기</Typography>
        </Button>
      </DrawerButton>
    </DrawerFrame>
  );
};

export default SubmitDrawer;

const SubmitDrawerRoot = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "0",
    gap: "16px",
    paddingTop: "16px",
    justifyContent: "flex-start",
    maxWidth: "480px",

    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },

    ".drawer-icon": {
      position: "absolute",
      top: "24px",
      right: "24px",
    },
  };
});
