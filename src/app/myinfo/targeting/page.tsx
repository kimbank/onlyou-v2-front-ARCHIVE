"use client";

import { useEffect, useRef, useState } from "react";

import useModal from "@/hooks/useModal";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Step,
  StepConnector,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Menu from "@/components/Button/Menu";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";

import { putTargeting } from "@/api/putTargeting";
import Loading from "@/components/loading";

import useTargeting from "@/api/hooks/useTargeting";
import SettingOptionModal from "@/app/application/targeting/details/SettingOptionModal";
import Estimate from "@/components/Estimate/Estimate";
import CloseHeader from "@/components/Header/CloseHeader";
import { TargetingModal } from "@/components/Modal/TargetingModal";
import {
  setTargetingDataField,
  setTargetingPriority,
  setTargetingRangeField,
} from "@/store/targetingSlice";
import ModifyOptionModal from "./ModifyOptionModal";
import { useRouter } from "next/navigation";

interface TargetingData {
  [key: string]: any;
}

const TargetingPage = () => {
  const [isPutTargetingLoading, setIsPutTargetingLoading] =
    useState<boolean>(false);
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
  const router = useRouter();
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);
  const [prevData, setPrevData] = useState<TargetingData>({});
  const [hasPriorityChanged, setHasPriorityChanged] = useState(false);

  const { targetingData, isLoading, mutate } = useTargeting();

  const hasChanged = Object.keys(targetingData || {}).some((key) => {
    return targetingData[key]?.data !== prevData[key]?.data;
  });

  // const hasPriorityChanged = Object.keys(targetingData || {}).some((key) => {
  //   const currentPriority = targetingData[key]?.priority;
  //   const previousPriority = prevData[key]?.priority;
  //   return currentPriority !== previousPriority;
  // });

  const handleNext = async () => {
    if (hasPriorityChanged) {
      openNextModal();
      return;
    }
    if (allGroupsSelected) {
      setIsPutTargetingLoading(true);
      let targetingData = {};
      for (const field of Object.keys(targetingState)) {
        if (typeof targetingState[field]?.priority !== "number") continue;
        if (targetingState[field].data) {
          const defaultOption = {
            data: targetingState[field]?.data,
            priority: targetingState[field]?.priority,
          };
          targetingData = {
            ...targetingData,
            [field]: defaultOption,
          };
        } else {
          const rangeOption = {
            from: targetingState[field]?.from,
            to: targetingState[field]?.to,
            priority: targetingState[field]?.priority,
          };
          targetingData = {
            ...targetingData,
            [field]: rangeOption,
          };
        }
      }
      const res = await putTargeting(targetingData);
      if (res.status >= 200 && res.status < 300) {
        console.log("저장완료");
        router.push("/myinfo");
        mutate();
      } else if (res.status === 400) {
        alert("1순위 2개, 2순위 4개, 3순위 4개만 선택 가능합니다.");
      } else {
        alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      }
      setIsPutTargetingLoading(false);
    } else {
      alert("모든 그룹을 선택해주세요.");
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

    for (const option of options) {
      const cur = targetingState[option];
      if (cur?.data) {
        // 일반 필드
        if (targetingState[option].data.length < 1) {
          return false;
        }
      } else {
        // 범위형 필드
        if (cur.from === undefined || cur.to === undefined) {
          return false;
        }
      }
    }

    return true;
  }

  const allGroupsSelected =
    checkFillStatus(1) && checkFillStatus(2) && checkFillStatus(3);

  useEffect(() => {
    console.log("hasPriorityChanged", hasPriorityChanged);
    if (isLoading) {
      return;
    }
    if (typeof targetingData?.fillStatus === "number") {
      const dataKeys = Object.keys(targetingData);
      console.log("dataKeys", dataKeys);
      for (const key of Object.keys(targetingState)) {
        const value = targetingData[key];
        if (dataKeys.includes(key)) {
          if (key === "birthYear" || key === "height") {
            dispatch(
              setTargetingRangeField({
                field: key,
                from: value?.from,
                to: value?.to,
              })
            );
          }
          dispatch(setTargetingDataField({ field: key, data: value?.data }));
          if (value?.priority >= 1 && value?.priority <= 3) {
            dispatch(
              setTargetingPriority({ field: key, priority: value?.priority })
            );
          }
        }
      }
    }
    console.log("targetingData", targetingData);
  }, [isLoading, hasPriorityChanged, targetingData]);

  return (
    <>
      {isPutTargetingLoading && <Loading />}
      <TargetingModal open={isNextOpen} onClose={closeNextModal} />
      <ModifyOptionModal
        open={isModifyOpen}
        onClose={closeModifyModal}
        targetingState={targetingState}
        setHasPriorityChanged={setHasPriorityChanged}
      />
      <SettingOptionModal
        open={isSettingOpen}
        onClose={closeSettingModal}
        priority={priority}
      />
      <CloseHeader onClose={handleNext} />
      <ContentRoot id="content">
        <div className="content-title">
          <Typography variant="h1">조건 상세 설정 수정하기</Typography>
        </div>
        <div className="content-body">
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

          <Stepper
            activeStep={0}
            orientation="vertical"
            sx={{ width: "100%" }}
            connector={null}
          >
            <StepperStep>
              <CheckCircle
                color={checkFillStatus(0) ? "primary" : "disabled"}
              />
              <Box className="menu-box">
                {!checkFillStatus(0) && (
                  <Typography variant="body3" color="gray2">
                    *추가된 조건을 상세하게 설정해 주세요.
                  </Typography>
                )}
                <Menu
                  color={checkFillStatus(0) ? "primary" : "secondary"}
                  onClick={() => openSettingModalByPriority(0)}
                  variant={checkFillStatus(0) ? "outlined" : "contained"}
                >
                  <Typography
                    variant={checkFillStatus(0) ? "subtitle1" : "body1"}
                  >
                    기본 반영 상세 조건
                  </Typography>
                </Menu>
              </Box>
            </StepperStep>
            <StepperConnector
              color={checkFillStatus(0) ? "primary" : "secondary"}
            />
            <StepperStep>
              <CheckCircle
                color={checkFillStatus(1) ? "primary" : "disabled"}
              />
              <Box className="menu-box">
                {!checkFillStatus(1) && (
                  <Typography variant="body3" color="gray2">
                    *추가된 조건을 상세하게 설정해 주세요.
                  </Typography>
                )}
                <Menu
                  color={checkFillStatus(1) ? "primary" : "secondary"}
                  onClick={() => openSettingModalByPriority(1)}
                  variant={checkFillStatus(1) ? "outlined" : "contained"}
                >
                  <Typography
                    variant={checkFillStatus(1) ? "subtitle1" : "body1"}
                  >
                    1순위 상세 조건
                  </Typography>
                </Menu>
              </Box>
            </StepperStep>
            <StepperConnector
              color={checkFillStatus(1) ? "primary" : "secondary"}
            />

            <StepperStep>
              <CheckCircle
                color={checkFillStatus(2) ? "primary" : "disabled"}
              />
              <Box className="menu-box">
                {!checkFillStatus(2) && (
                  <Typography variant="body3" color="gray2">
                    *추가된 조건을 상세하게 설정해 주세요.
                  </Typography>
                )}
                <Menu
                  color={checkFillStatus(2) ? "primary" : "secondary"}
                  onClick={() => openSettingModalByPriority(2)}
                  variant={checkFillStatus(2) ? "outlined" : "contained"}
                >
                  <Typography
                    variant={checkFillStatus(2) ? "subtitle1" : "body1"}
                  >
                    2순위 상세 조건
                  </Typography>
                </Menu>
              </Box>
            </StepperStep>
            <StepperConnector
              color={checkFillStatus(2) ? "primary" : "secondary"}
            />
            <StepperStep>
              <CheckCircle
                color={checkFillStatus(3) ? "primary" : "disabled"}
              />
              <Box className="menu-box">
                {!checkFillStatus(3) && (
                  <Typography variant="body3" color="gray2">
                    *추가된 조건을 상세하게 설정해 주세요.
                  </Typography>
                )}
                <Menu
                  color={checkFillStatus(3) ? "primary" : "secondary"}
                  onClick={() => openSettingModalByPriority(3)}
                  variant={checkFillStatus(3) ? "outlined" : "contained"}
                >
                  <Typography
                    variant={checkFillStatus(3) ? "subtitle1" : "body1"}
                  >
                    3순위 상세 조건
                  </Typography>
                </Menu>
              </Box>
            </StepperStep>
          </Stepper>

          <Estimate />
        </div>
      </ContentRoot>
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

const StepperStep = styled(Step)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  ".menu-box": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
});

const StepperConnector = styled(StepConnector)(({ theme, color }) => {
  return {
    ".MuiStepConnector-line": {
      borderColor:
        color === "primary"
          ? theme.palette.primary.main
          : theme.palette.gray4?.main,
    },
  };
});

export default TargetingPage;
