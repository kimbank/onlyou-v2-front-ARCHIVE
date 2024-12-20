"use client";

import { useState } from "react";

import useModal from "@/hooks/useModal";
import { CheckCircle } from "@mui/icons-material";
import {
  Button,
  Step,
  StepConnector,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SettingOptionModal from "./SettingOptionModal";

import Menu from "@/components/Button/Menu";
import { TargetDrawer } from "@/components/Drawer/TargetDrawer/TargetDrawer";
import { useRouter, useSearchParams } from "next/navigation";

import { putTargeting } from "@/api/putTargeting";
import Loading from "@/components/loading";

import BottomNextButton from "@/components/BottomButton/Next";
import Estimate from "@/components/Estimate/Estimate";

const DetailsPage = () => {
  const router = useRouter();
  const param = useSearchParams();
  const isInit = param.get("type") === "init";
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
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  if (targetingState?._step < 1) {
    if (isInit) {
      router.push("/application/targeting?type=init");
    } else {
      router.push("/application/targeting");
    }
  }

  const handleNext = async () => {
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
        openNextModal();
      } else if (res.status === 400) {
        alert("1순위 2개, 2순위 4개, 3순위 4개만 선택 가능합니다.");
      } else {
        alert("저장에 실패했습니다. 관리자에게 문의해주세요.");
      }
      setIsPutTargetingLoading(false);
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

  const fillStatus =
    checkFillStatus(0) &&
    checkFillStatus(1) &&
    checkFillStatus(2) &&
    checkFillStatus(3);

  const allGroupsSelected =
    checkFillStatus(1) && checkFillStatus(2) && checkFillStatus(3);

  return (
    <>
      {isPutTargetingLoading && <Loading />}
      <SettingOptionModal
        open={isSettingOpen}
        onClose={closeSettingModal}
        priority={priority}
      />
      <ContentRoot id="content">
        <div className="content-title">
          <Typography variant="h1">상세 조건을 모두 채워주세요.</Typography>
          <Typography variant="body1">
            상세한 설정에 따라 예상 매칭 주기를 알려드려요
          </Typography>
        </div>
        <div className="content-body">
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
              <Menu
                color={checkFillStatus(0) ? "primary" : "secondary"}
                onClick={() => {
                  openSettingModalByPriority(0);
                }}
                variant={checkFillStatus(0) ? "outlined" : "contained"}
              >
                <Typography>기본 반영 상세 조건</Typography>
              </Menu>
            </StepperStep>
            <StepperConnector
              color={checkFillStatus(0) ? "primary" : "secondary"}
            />
            <StepperStep>
              <CheckCircle
                color={checkFillStatus(1) ? "primary" : "disabled"}
              />
              <Menu
                color={checkFillStatus(1) ? "primary" : "secondary"}
                onClick={() => openSettingModalByPriority(1)}
                variant={checkFillStatus(1) ? "outlined" : "contained"}
              >
                <Typography> 1순위 상세 조건</Typography>
              </Menu>
            </StepperStep>
            <StepperConnector
              color={checkFillStatus(1) ? "primary" : "secondary"}
            />
            <StepperStep>
              <CheckCircle
                color={checkFillStatus(2) ? "primary" : "disabled"}
              />
              <Menu
                color={checkFillStatus(2) ? "primary" : "secondary"}
                onClick={() => openSettingModalByPriority(2)}
                variant={checkFillStatus(2) ? "outlined" : "contained"}
              >
                <Typography> 2순위 상세 조건</Typography>
              </Menu>
            </StepperStep>
            <StepperConnector
              color={checkFillStatus(2) ? "primary" : "secondary"}
            />
            <StepperStep>
              <CheckCircle
                color={checkFillStatus(3) ? "primary" : "disabled"}
              />
              <Menu
                color={checkFillStatus(3) ? "primary" : "secondary"}
                onClick={() => openSettingModalByPriority(3)}
                variant={checkFillStatus(3) ? "outlined" : "contained"}
              >
                <Typography> 3순위 상세 조건</Typography>
              </Menu>
            </StepperStep>
          </Stepper>

          {/* <Estimate /> */}
        </div>
      </ContentRoot>
      <BottomNextButton>
        <Button
          size="large"
          variant="outlined"
          onClick={() => router.push("/application/targeting")}
        >
          이전
        </Button>
        <Button size="large" onClick={handleNext} disabled={!fillStatus}>
          다음
        </Button>
      </BottomNextButton>

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

const StepperStep = styled(Step)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
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

export default DetailsPage;
