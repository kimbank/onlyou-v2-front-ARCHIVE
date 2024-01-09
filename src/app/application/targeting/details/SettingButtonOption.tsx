
import { useState } from "react";
import { styled, Button, Chip } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { setTargetingPriority, setTargetingDataField } from "@/store/targetingSlice";
import { allOptions, targetingAllOptions } from "@/constants/targeting";

import AlertModal from "@/components/Modal/Default";
import useModal from "@/hooks/useModal";

const SettingButtonOption = ({ optionName }: { optionName: string }) => {
  const dispatch = useDispatch();
  const optionState = useSelector((state: RootState) => state.targeting[optionName]);
  const [alertTitle, setAlertTitle] = useState("");
  const { isModalOpen: isAlertOpen, openModal: openAlertModal, closeModal: closeAlertModal } = useModal();

  const allOption = allOptions[optionName].options;
  const limit = allOptions[optionName].targeting_limit;

  const ascending = (a: number, b: number) => a - b;

  function handleOptionClick(idx: number) {
    if (optionState.data.includes(idx)) { // 이미 선택된 경우
      dispatch(setTargetingDataField({ field: optionName, data: optionState.data.filter((data: number) => data !== idx) }));
    } else if (limit && optionState.data.length >= limit) {
      setAlertTitle(`최대 ${limit}개 까지 선택할 수 있어요`);
      openAlertModal();
      return;
    } else { // 새롭게 선택하는 경우
      dispatch(setTargetingDataField({ field: optionName, data: [...optionState.data, idx].sort(ascending) }));
    }
  }

  console.log("optionState", optionState);

  return (
    <>
      <AlertModal
        title={alertTitle}
        complete={"이해했어요!"}
        isModalOpen={isAlertOpen}
        onModalClose={closeAlertModal}
        onComplete={closeAlertModal}
      />
      <Root>
        {Object.keys(allOption).map((option: string) => {
          const labelValue = allOption[option];
          return (
            <Chip
              key={option}
              label={typeof labelValue === "string" ? labelValue : ""}
              variant="filled"
              color={
                optionState.data.includes(Number(option))
                  ? "primary"
                  : "default"
              }
              onClick={() => handleOptionClick(Number(option))}
            />
          );
        })}
      </Root>
    </>
  );
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "9px",
});

export default SettingButtonOption;