"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import ProgressHeader from "@/components/Header/ProgressHeader";

import { useSelector, useDispatch } from 'react-redux';
import { targetingCategories, targetingOptions } from "@/constants/targeting";
import SettingOptionModal from "./SettingOptionModal";
import { ChevronRightRounded } from "@mui/icons-material";
import useModal from "@/hooks/useModal";
import { styled, Button, Typography, Drawer } from "@mui/material";

import TestDrawer from "@/components/Drawer";

import BottomButton from "@/components/BottomButton/Container";
import Esitimate from "./Estimate";
import Menu from "@/components/Button/Menu";
import { StepButton } from "@/components/Button/StepButton";

const DetailsPage = () => {
  const [priority, setPriority] = useState<number>(0);
  const { isModalOpen: isSettingOpen, openModal: openSettingModal, closeModal: closeSettingModal } = useModal();
  const { isModalOpen: isNextOpen, openModal: openNextModal, closeModal: closeNextModal } = useModal();
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  function openSettingModalByPriority(priority: number) {
    setPriority(priority);
    openSettingModal();
  }

  const rightArrow = <ChevronRightRounded style={{fontSize :"24px"}} />;
  function checkFillStatus(priority: number) {
    const options = Object.keys(targetingState).filter((field: string) => {
      return targetingState[field].priority === priority;
    });
    for (let option of options) {
      if (targetingState[option]?.data) { // default option
        if (targetingState[option].data.length === 0) {
          return false;
        }
      } else { // range option
        if (!targetingState[option].from || !targetingState[option].to) {
          return false;
        }
      }
    }
    return true;
  }

  const fillStatus = checkFillStatus(0) && checkFillStatus(1) && checkFillStatus(2) && checkFillStatus(3);
  function handleNext() {
    if (fillStatus) {
      if (isNextOpen) {
        closeNextModal();
        window.location.href = "/application/LetterSelect";
        return;
      }
      // alert("다음 페이지로 이동합니다.");
      openNextModal();
    } else {
      alert("모든 조건을 선택해주세요.");
    }
  }

const allGroupsSelected =
  checkFillStatus(1) && checkFillStatus(2) && checkFillStatus(3);

  return (
    <>
      <SettingOptionModal
        open={isSettingOpen}
        onClose={closeSettingModal}
        priority={priority}
      />
      <ContentRoot id="content">
        <div className="content-title">
          <Typography variant="h1">각 조건을 상세히 지정해 주세요.</Typography>
          <Typography variant="body1">
            상세한 설정에 따라 예상 매칭 주기를 알려드려요
          </Typography>
        </div>
        <div className="content-body">
          <MenuButton
            color={checkFillStatus(0) ? "primary" : "secondary"}
            endIcon={rightArrow}
            onClick={() => openSettingModalByPriority(0)}
            variant={checkFillStatus(0) ? "outlined" : "contained"}
          >
            기본 반영 상세 조건
          </MenuButton>
          <MenuButton
            color={checkFillStatus(0) ? "primary" : "secondary"}
            endIcon={rightArrow}
            onClick={() => openSettingModalByPriority(1)}
            variant={checkFillStatus(1) ? "outlined" : "contained"}
          >
            1순위 상세 조건
          </MenuButton>
          <Menu
            color={checkFillStatus(0) ? "primary" : "secondary"}
            onClick={() => openSettingModalByPriority(1)}
            variant={checkFillStatus(1) ? "outlined" : "contained"}
          >
            1순위 상세 조건
          </Menu>
          <MenuButton
            size="large"
            color={checkFillStatus(0) ? "primary" : "secondary"}
            endIcon={rightArrow}
            onClick={() => openSettingModalByPriority(2)}
            variant={checkFillStatus(2) ? "outlined" : "contained"}
          >
            2순위 상세 조건
          </MenuButton>
          <MenuButton
            color={checkFillStatus(0) ? "primary" : "secondary"}
            endIcon={rightArrow}
            onClick={() => openSettingModalByPriority(3)}
            variant={checkFillStatus(3) ? "outlined" : "contained"}
          >
            3순위 상세 조건
          </MenuButton>
          <Esitimate />
        </div>
      </ContentRoot>
      <StepButton
        prevText="이전"
        nextText="다음"
        prevHref="/apply/targeting"
        onClick={handleNext}
        nextType="button"
        checkedStates={allGroupsSelected}
      />
      <TestDrawer
        title={
          <>
            이제 마지막 단계에요
            <br />
            조금만 힘내요!
          </>
        }
        body={<>딱 맞는 이상형 꼭 찾아드릴게요.</>}
        open={isNextOpen}
        complete="편지 작성하기"
        onComplete={handleNext}
        onClose={closeNextModal}
        // sx={nextModalSX}
      ></TestDrawer>
    </>
  );
}

const ContentRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  ".content-title": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  
  ".content-body": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
});

const MenuButton = styled(Button)((props) => {
  return {
    width: "100%",
    height: "64px",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "16px",

    fontSize: "16px",
    fontWeight: props.variant === "outlined" ? "600" : "400",
  }
});

export default DetailsPage;
