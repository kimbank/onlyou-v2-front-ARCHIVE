import Image from "next/image";
import LogoOutlined from "public/icons/logo_outlined.svg";

import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTargetingPriority } from "@/store/targetingSlice";
import { RootState } from "@/store/store";

import { styled, Modal, Typography, Box, Button, Divider } from "@mui/material";
import EmptyHeader from "@/components/Header/EmptyHeader";

import { targetingCategories, targetingAllOptions } from "@/constants/targeting";

import AlertModal from "@/components/Modal/Default";
import useModal from "@/hooks/useModal";

import EstimateResult from "./EstimateResult";
import ButtonOption from "./SettingButtonOption";
import SliderOption from "./SettingSliderOption";
import BottomConainer from "@/components/BottomButton/Container";

import jongsung from "@/utils/jongsung";
import SettingChipOption from "./SettingChipOption";



const SettingOptionModal = ({ open, onClose, priority }: { open: any, onClose: any, priority: number }) => {
  const { isModalOpen: isAlertOpen, openModal: openAlertModal, closeModal: closeAlertModal } = useModal();
  const [alertTitle, setAlertTitle] = useState("");
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  
  const categoryTitle = priority === 0 ? "기본 반영 조건 상세 설정" :`${priority}순위 반영 조건 상세 설정`;
  function optionTitle(optionName: string) {
    const hangeul = targetingAllOptions[optionName].label;
    const type = targetingAllOptions[optionName].targeting;

    if (type === "slider") {
      return `선호하는 ${hangeul}의 구간을 설정해주세요.`;
    }
    if (type === "radio") {
      return `선호하는 ${hangeul}${jongsung(hangeul)} 하나 설정해주세요.`;
    }
    if (type === "button") {
      return `선호하는 ${hangeul}${jongsung(hangeul)} 모두 선택해주세요.`;
    }
    return hangeul;
  }

  const RenderOptions = () => {
    const options = Object.keys(targetingState).filter((field: string) => {
      return targetingState[field].priority === priority;
    });
    return options.map((option: string, idx: number) => (
      <>
        {idx !== 0 && <Divider />}
        <OptionItem key="option" onClick={() => {}}>
          <Typography variant="subtitle1">
            {/* {targetingAllOptions[option].label} */}
            {optionTitle(option)}
          </Typography>
          <span>
            {targetingAllOptions[option].targeting === "slider" ? (
              <SliderOption optionName={targetingAllOptions[option].name} />
            ) : targetingAllOptions[option].targeting === "radio" ? (
              <>Error</>
            ) : targetingAllOptions[option].targeting === "button" ? (
              <ButtonOption optionName={targetingAllOptions[option].name} />
            ) : targetingAllOptions[option].targeting === "chip" ? (
              <SettingChipOption optionName={targetingAllOptions[option].name} />
            ) : (
              <></>
            )}
          </span>
        </OptionItem>
      </>
    ));
  }

  return (
    <>
      <AlertModal title={alertTitle} complete={"이해했어요!"} isModalOpen={isAlertOpen} onModalClose={closeAlertModal} onComplete={closeAlertModal} />
      <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
        <div id="page" style={{ height: "100vh" }}>
          <EmptyHeader />
          <Root id="content">
            <Typography variant="h1">
              {categoryTitle}
            </Typography>
            <RenderOptions />
            <BottomConainer sx={{ flexDirection: "column" }}>
              <ResultBox>
                <Image src={LogoOutlined} alt="logo" />
                <EstimateResult open={false} collapse={true} />
              </ResultBox>
              <GapDiv />
              <Button onClick={onClose} size="large">
                저장
              </Button>
            </BottomConainer>
          </Root>
        </div>
      </Modal>
    </>
  )
}

const Root = styled("div")({
  height: "calc(100vh - 146px)",
  backgroundColor: "#fff",
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  overflowX: 'hidden',
  overflowY: 'scroll',
  // paddingBottom: '36px',

  ".bottom-button": {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "72px",
    borderRadius: "0",
  }
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

export default SettingOptionModal;
