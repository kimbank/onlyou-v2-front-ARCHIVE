import { styled, Box, Typography } from "@mui/material";

import MenuButton from "@/components/Button/MyinfoMenu";
import { FullDivider } from "../../components/Dividers/FullDivider";
import useModal from "@/hooks/useModal";
import { ModifyModal } from "./ModifyModal";

const Menu = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ModifyModal open={isModalOpen} onClose={closeModal} />
      <MenuRoot>
        <Box className="menu-wrapper">
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            매칭 신청서 수정하기
          </Typography>
          <MenuButton variant="outlined" color="secondary" onClick={openModal}>
            <Typography variant="body2" color="black">
              내 정보 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            href="/application/targeting"
          >
            <Typography variant="body2" color="black">
              이상형 정보 수정하기
            </Typography>
          </MenuButton>
          <MenuButton variant="outlined" color="secondary" href="/myinfo">
            <Typography variant="body2" color="black">
              인증 뱃지 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            href="/application/photo"
          >
            <Typography variant="body2" color="black">
              사진 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            href="/application/letter"
          >
            <Typography variant="body2" color="black">
              편지 수정하기
            </Typography>
          </MenuButton>
        </Box>
        <FullDivider />
        <Box className="menu-wrapper">
          <Typography
            variant="subtitle1"
            color="black"
            sx={{ marginBottom: "4px" }}
          >
            기타
          </Typography>
          <MenuButton variant="outlined" color="secondary" href="/myinfo">
            <Typography variant="body2" color="black">
              지인 차단
            </Typography>
          </MenuButton>
          <MenuButton variant="outlined" color="secondary" href="/myinfo">
            <Typography variant="body2" color="black">
              경고 점수 조회
            </Typography>
          </MenuButton>
        </Box>
      </MenuRoot>
    </>
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
