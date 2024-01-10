import { styled, Box, Typography } from "@mui/material";

import MenuButton from "@/components/Button/MyinfoMenu";

const Menu = () => {
  return (
    <MenuRoot>
      <Box className="menu-wrapper">
        <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
          매칭 신청서 수정하기
        </Typography>
        <MenuButton href="/application/me">
          내 정보 수정하기
        </MenuButton>
        <MenuButton href="/application/targeting">
          이상형 정보 수정하기
        </MenuButton>
        <MenuButton href="/myinfo">
          인증 뱃지 수정하기
        </MenuButton>
        <MenuButton href="/application/photo">
          사진 수정하기
        </MenuButton>
        <MenuButton href="/application/letter">
          편지 수정하기
        </MenuButton>
      </Box>

      <Box className="menu-wrapper">
        <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
          기타
        </Typography>
        <MenuButton href="/myinfo">
          지인 차단
        </MenuButton>
        <MenuButton href="/myinfo">
          경고 점수 조회
        </MenuButton>
      </Box>
    </MenuRoot>
  );
};

const MenuRoot = styled("div")({
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",

  ".menu-wrapper": {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
  },
});

export default Menu;
