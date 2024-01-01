
import { useState } from "react";
import { styled, Button, Chip, Typography, Box, Tooltip } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { setTargetingPriority, setTargetingDataField } from "@/store/targetingSlice";
import { allOptions, targetingAllOptions } from "@/constants/targeting";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AlertModal from "@/components/Modal/Default";
import useModal from "@/hooks/useModal";
import { tooltipTitle } from "@/app/(매칭신청서완성)/application/survey/detailSelect/Data/tooltipData";
import { residence } from "@/constants/application_option";

const SettingChipOption = ({ optionName }: { optionName: string }) => {
  const dispatch = useDispatch();
  const optionState = useSelector((state: RootState) => state.targeting[optionName]);
  const [alertTitle, setAlertTitle] = useState("");
  const { isModalOpen: isAlertOpen, openModal: openAlertModal, closeModal: closeAlertModal } = useModal();

  const allOption = residence.options;
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



     const [open, setOpen] = useState(false);

     const handleTooltipToggle = () => {
       setOpen(!open);
     };


       console.log("optionState", optionState);
     console.log("allOption", allOption);
      console.log("allOption2", Object.keys(allOption))

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
        <Box>
          <Tooltip
            className="tooltlp"
            title={tooltipTitle()}
            open={open}
            onClick={handleTooltipToggle}
            arrow
            placement="bottom-start"
          >
            <Box className="tooltip-text">
              <Button variant="text" size="large">
                <InfoOutlinedIcon />
                <Typography variant="body3">지역 상세 설명 보기</Typography>
              </Button>
            </Box>
          </Tooltip>
        </Box>
        <Box className="button-box">
          {Object.keys(allOption).map((group: string) => (
            <Box className="button-box" key={group}>
              <Typography variant="body2">{group}</Typography>
              <Box className="button">
              {Object.keys(allOption[group]).map((optionKey: string) => (
                <Button

                  key={optionKey}
                  variant="contained"
                  color={
                    optionState.data.includes(Number(optionKey))
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() => handleOptionClick(Number(optionKey))}
                >
                  {allOption[group][optionKey]}
                </Button>
              ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Root>
    </>
  );
}

const Root = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  ".button-box": {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "12px",
  },
  ".button": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "9px",
  },
});

export default SettingChipOption;