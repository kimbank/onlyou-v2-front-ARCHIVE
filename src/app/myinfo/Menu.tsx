"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { styled, Box, Typography } from "@mui/material";
import MenuButton from "@/components/Button/MyinfoMenu";
import { FullDivider } from "../../components/Dividers/FullDivider";
import useModal from "@/hooks/useModal";
import { ModifyModal } from "./ModifyModal";

import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/store/home/modalSlice";
import { useMe } from "@/api/hooks/useMe";


const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const param = useSearchParams();

  const { isModalOpen, openModal, closeModal } = useModal();
  const [initialPriority, setInitialPriority] = React.useState(0);
  const { isError } = useMe('all');

  React.useEffect(() => {
    if (param.get('tab') === "modify") {
      openModal();
    }
  }, []);

  const openModalWithTab = (tabValue: number) => {
    // 탭 값을 설정하고 모달을 열기
    if (isError) {
      dispatch(
        showModal({
          title: "데이터를 불러오는데 실패했어요.",
          body: "매칭신청서를 아직 완성하지 않았거나, 서버에 문제가 생겼을 수 있어요. 다시 시도해주세요.",
          complete: "확인",
        })
      );
      return;
    }

    setInitialPriority(tabValue); // 탭 값을 설정하는 상태 추가
    openModal(); // 모달 열기
  };

  return (
    <>
      <ModifyModal
        initialPriority={initialPriority}
        open={isModalOpen}
        onClose={closeModal}
      />
      <MenuRoot>
        <Box className="menu-wrapper">
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            매칭 신청서 수정하기
          </Typography>
          <MenuButton
            variant="outlined"
            color="secondary"
            onClick={() => openModalWithTab(1)}
          >
            <Typography variant="body2" color="black">
              내 정보 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            onClick={() => router.push("/myinfo/targeting")}
          >
            <Typography variant="body2" color="black">
              이상형 정보 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            onClick={() => router.push("/myinfo/badge")}
          >
            <Typography variant="body2" color="black">
              인증 뱃지 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            onClick={() => router.push("/myinfo/photo")}
          >
            <Typography variant="body2" color="black">
              사진 수정하기
            </Typography>
          </MenuButton>
          <MenuButton
            variant="outlined"
            color="secondary"
            // href="/application/letter/write"
            onClick={() => router.push("/myinfo/letter")}
          >
            <Typography variant="body2" color="black">
              편지 수정하기
            </Typography>
          </MenuButton>
        </Box>
        {/* <FullDivider /> */}
        {/* <Box className="menu-wrapper">
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
        </Box> */}
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
