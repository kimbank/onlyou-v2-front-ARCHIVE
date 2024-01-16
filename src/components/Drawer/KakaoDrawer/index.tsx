import { Box, Button, styled, Typography } from "@mui/material";

import { useRouter } from "next/navigation";
import DrawerFrame from "../DrawerFrame";
import DrawerButton from "../DrawerItem/DrawerButton";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import colors from "@/assets/theme/base/colors";
import Kakao from "public/icons/kakao.svg";
import Image from "next/image";

const { gray5 } = colors;
interface DrawerProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  nextHref?: string;
  kakaoId?: string | null;
}

export const KakaoDrawer = ({
  children,
  open,
  onClose,
  nextHref,
  kakaoId,
}: DrawerProps) => {
  const router = useRouter();

  const handleCompleteClick = () => {
    navigator.clipboard.writeText(kakaoId as string);
  };

  return (
    <DrawerFrame open={open} onClose={onClose}>
      <KakaoDrawerRoot>
        <Typography
          variant="h1"
          sx={{ display: "inline", maxWidth: "calc(100% - 36px)" }}
        >
          매칭된 상대분의
          <br />
          카카오톡 아이디에요.
        </Typography>
        <Box className="kakao-box">
          <Box>
            <Image src={Kakao} width={15} height={13.75} alt="나이" />
          </Box>
          <Typography variant="body1">{kakaoId}</Typography>
        </Box>
        <CloseRoundedIcon
          sx={{ cursor: "pointer", fontSize: "28px" }}
          className="drawer-icon"
          onClick={onClose}
        />
      </KakaoDrawerRoot>
      <DrawerButton>
        <Button
          color="primary"
          variant="contained"
          onClick={handleCompleteClick}
          size="large"
        >
          <Typography variant="subtitle1">복사하기</Typography>
        </Button>
      </DrawerButton>
    </DrawerFrame>
  );
};

export default KakaoDrawer;

const KakaoDrawerRoot = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "0",
    gap: "16px",
    padding: "16px 0",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "480px",

    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    ".kakao-box": {
      display: "flex",
      flexDirection: "row",
      backgroundColor: gray5,
      padding: "8px 16px",
      gap: "8px",
      alignItems: "center",
      "&> div": {
        width: "20px",
        height: "20px",
        textAlign: "center",
        borderRadius: "4px",
        backgroundColor: "#FAE100",
      },
    },
    ".drawer-icon": {
      position: "absolute",
      top: "24px",
      right: "24px",
    },
  };
});
