"use client";

import { useState } from "react";

import useModal from "@/hooks/useModal";
import { Button, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SettingOptionModal from "./SettingOptionModal";

import Menu from "@/components/Button/Menu";
import { StepButton } from "@/components/Button/StepButton";
import { TargetDrawer } from "@/components/Drawer/TargetDrawer/TargetDrawer";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import { useSearchParams } from "next/navigation";
import Esitimate from "./Estimate";
import ModifyOptionModal from "./ModifyOptionModal";

const DetailsPage = () => {
  const [priority, setPriority] = useState<number>(0);
  const {
    isModalOpen: isSettingOpen,
    openModal: openSettingModal,
    closeModal: closeSettingModal,
  } = useModal();
  const {
    isModalOpen: isNextOpen,
    openModal: openNextModal,
    closeModal: closeNextModal,
  } = useModal();
  const {
    isModalOpen: isModifyOpen,
    openModal: openModifyModal,
    closeModal: closeModifyModal,
  } = useModal();
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);
  const searchParams = useSearchParams();
  const isInit = searchParams.get("type") === "init";
  const handleNext = () => {
    if (allGroupsSelected) {
      openNextModal();
    } else {
      alert("모든 그룹을 선택하세요.");
    }
  };

  function openSettingModalByPriority(priority: number) {
    setPriority(priority);
    openSettingModal();
  }
  function checkFillStatus(priority: number) {
    const options = Object.keys(targetingState).filter((field: string) => {
      return targetingState[field].priority === priority;
    });

    for (let option of options) {
      if (targetingState[option]?.data) {
        if (targetingState[option].data.length === 0) {
          return false;
        }
        if (
          targetingState[option].from === undefined &&
          targetingState[option].to === undefined
        ) {
          return true;
        }
      } else {
        if (
          targetingState[option].from === undefined &&
          targetingState[option].to === undefined
        ) {
          return false;
        }
      }
    }

    return true;
  }

  const fillStatus =
    checkFillStatus(0) &&
    checkFillStatus(1) &&
    checkFillStatus(2) &&
    checkFillStatus(3);

  const allGroupsSelected =
    checkFillStatus(1) && checkFillStatus(2) && checkFillStatus(3);

  return (
    <>
      <SettingOptionModal
        open={isSettingOpen}
        onClose={closeSettingModal}
        priority={priority}
      />
      <ModifyOptionModal open={isModifyOpen} onClose={closeModifyModal} />
      <ContentRoot id="content">
        <div className="content-title">
          {!isInit ? (
            <Typography variant="h1">조건 상세 설정 수정하기</Typography>
          ) : (
            <>
              <Typography variant="h1">
                각 조건을 상세히 지정해 주세요.
              </Typography>
              <Typography variant="body1">
                상세한 설정에 따라 예상 매칭 주기를 알려드려요
              </Typography>
            </>
          )}
        </div>
        <div className="content-body">
          {!isInit && (
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              onClick={openModifyModal}
            >
              <SwapHorizRoundedIcon
                sx={{ width: "18px", height: "18px", marginRight: "8px" }}
              />
              <Typography variant="subtitle2">우선순위 변경하기</Typography>
            </Button>
          )}
          <Menu
            color={checkFillStatus(0) ? "primary" : "secondary"}
            onClick={() => {
              openSettingModalByPriority(0);
              console.log("checkFillStatus", checkFillStatus(0));
            }}
            variant={checkFillStatus(0) ? "outlined" : "contained"}
          >
            <Typography>기본 반영 상세 조건</Typography>
          </Menu>
          <Menu
            color={checkFillStatus(1) ? "primary" : "secondary"}
            onClick={() => openSettingModalByPriority(1)}
            variant={checkFillStatus(1) ? "outlined" : "contained"}
          >
            <Typography> 1순위 상세 조건</Typography>
          </Menu>
          <Menu
            color={checkFillStatus(2) ? "primary" : "secondary"}
            onClick={() => openSettingModalByPriority(2)}
            variant={checkFillStatus(2) ? "outlined" : "contained"}
          >
            <Typography> 2순위 상세 조건</Typography>
          </Menu>
          <Menu
            color={checkFillStatus(3) ? "primary" : "secondary"}
            onClick={() => openSettingModalByPriority(3)}
            variant={checkFillStatus(3) ? "outlined" : "contained"}
          >
            <Typography> 3순위 상세 조건</Typography>
          </Menu>

          <Esitimate />
        </div>
      </ContentRoot>
      {isInit && (
        <StepButton
          prevText="이전"
          nextText="다음"
          prevHref="/application/targeting"
          onClick={handleNext}
          nextType="button"
          checkedStates={allGroupsSelected}
        />
      )}

      <TargetDrawer
        nextHref="/application/letter/select?type=init"
        open={isNextOpen}
        onClose={closeNextModal}
      />
    </>
  );
};

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
  };
});

export default DetailsPage;

{
  /* <MenuButton
            color={checkFillStatus(0) ? "primary" : "secondary"}
            endIcon={rightArrow}
            onClick={() => openSettingModalByPriority(1)}
            variant={checkFillStatus(1) ? "outlined" : "contained"}
          >
            1순위 상세 조건
          </MenuButton> */
}
{
  /* <MenuButton
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
          </MenuButton> */
}
