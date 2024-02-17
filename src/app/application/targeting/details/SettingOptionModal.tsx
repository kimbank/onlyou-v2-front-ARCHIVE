import Image from "next/image";
import LogoOutlined from "public/icons/logo_outlined.svg";

import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EmptyHeader from "@/components/Header/EmptyHeader";
import CloseHeader from "@/components/Header/CloseHeader";
import { Box, Button, Divider, Modal, styled, Typography } from "@mui/material";

import AlertModal from "@/components/Modal/Default";
import useModal from "@/hooks/useModal";

import BottomConainer from "@/components/BottomButton/Container";

import ButtonOption from "./SettingButtonOption";
import SliderOption from "./SettingSliderOption";

import { targetingAllOptions } from "@/constants/targeting";
import jongsung from "@/utils/jongsung";
import SettingChipOption from "./SettingChipOption";
import EstimateResult from "@/components/Estimate/EstimateResult";


const SettingOptionModal = ({
  open,
  onClose,
  priority,
}: {
  open: any;
  onClose: any;
  priority: number;
}) => {
  const {
    isModalOpen: isAlertOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal();
  const [alertTitle, setAlertTitle] = useState("");
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  const categoryTitle =
    priority === 0
      ? "기본 반영 조건 상세 설정"
      : `${priority}순위 반영 조건 상세 설정`;
  function optionTitle(optionName: string) {
    const option = targetingAllOptions[optionName];
    const hangeul = option.label;
    const type = option.targeting;

    if (type === "slider") {
      return (
        <>
          <strong>
            선호하는 {hangeul}의 구간을 설정해주세요.
          </strong>
        </>
      )
    }
    if (type === "chip") {
      return (
        <>
          <strong>
            선호하는 {hangeul}
            {jongsung(hangeul)} 모두 설정해주세요.
          </strong>
        </>
      );
    }
    if ("options" in option && type === "button") {
      const optionsCount = Object.keys(option.options || {}).length;
      const limit =
        option.targeting_limit !== undefined
          ? option.targeting_limit
          : optionsCount;
      if (limit === 1) {
        return (
          <>
            <strong>
              선호하는 {hangeul}{jongsung(hangeul)} 선택해주세요.
            </strong>
          </>
        );
      } else if (limit <= optionsCount - 2) {
        return (
          <>
            <strong>
              선호하는 {hangeul}
              {jongsung(hangeul)} 최대 <strong>{limit}개</strong> 선택해주세요.
            </strong>
          </>
        );
      } else {
        return (
          <>
            <strong>
              선호하는 {hangeul}
              {jongsung(hangeul)} <strong>모두</strong> 선택해주세요.
            </strong>
          </>
        );
      }
    }
    return hangeul;
  }

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      Object.entries(targetingAllOptions).forEach(([optionName, option]) => {
        if ("options" in option && option.targeting === "button") {
          const optionsCount = Object.keys(option.options || {}).length;
          const limit =
            option.targeting_limit !== undefined
              ? option.targeting_limit
              : optionsCount;

          console.log(
            `옵션명: ${optionName}, limit: ${limit}, optionsCount: ${
              optionsCount - 1
            }`
          );
        }
      });
    }
  }, []);
  const RenderOptions = () => {
    const options = Object.keys(targetingState).filter((field: string) => {
      return targetingState[field].priority === priority;
    });

    if (options.length === 0) {
      return (
        <EmptyBox>
          <Typography variant="body1" color="gray3">
            선택한 {priority}순위 조건이 없어요
          </Typography>
          <Image src="/icons/empty.svg" alt="empty" width={84} height={84} />
        </EmptyBox>
      );
    }

    return options.map((option: string, idx: number) => (
      <>
        {idx !== 0 && <Divider />}
        <OptionItem key={idx} onClick={() => {}}>
          <Typography variant="body1">
            {/* {targetingAllOptions[option].label} */}
            {optionTitle(option)}
          </Typography>
          <span>
            {targetingAllOptions[option].targeting === "slider" ? (
              <SliderOption optionName={targetingAllOptions[option].name} />
            ) : targetingAllOptions[option].targeting === "button" ? (
              <ButtonOption optionName={targetingAllOptions[option].name} />
            ) : targetingAllOptions[option].targeting === "chip" ? (
              <SettingChipOption
                optionName={targetingAllOptions[option].name}
              />
            ) : (
              <></>
            )}
          </span>
        </OptionItem>
      </>
    ));
  };

  return (
    <>
      <AlertModal
        title={alertTitle}
        complete={"이해했어요!"}
        isModalOpen={isAlertOpen}
        onModalClose={closeAlertModal}
        onComplete={closeAlertModal}
      />
      <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
        <div id="page" style={{ height: "100vh" }}>
          <CloseHeader onClose={onClose} />
          <Root id="content">
            <Typography variant="h1">
              {categoryTitle}
            </Typography>
            <RenderOptions />
            <BottomConainer sx={{ flexDirection: "column" }}>
              {/* <ResultBox>
                <Image src={LogoOutlined} alt="logo" />
                <EstimateResult open={false} collapse={true} />
              </ResultBox>
              <GapDiv /> */}
              <Button onClick={() => {}} size="large">
                저장하기
              </Button>
            </BottomConainer>
          </Root>
        </div>
      </Modal>
    </>
  );
};

const Root = styled("div")({
  height: "calc(100vh - 146px)",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  overflowX: "hidden",
  overflowY: "scroll",
  // paddingBottom: '36px',

  ".bottom-button": {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "72px",
    borderRadius: "0",
  },
});

const OptionItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const ResultBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
});

const GapDiv = styled("div")({
  height: "12px",
  width: "100%",
});

const EmptyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: "20px",
});

export default SettingOptionModal;
