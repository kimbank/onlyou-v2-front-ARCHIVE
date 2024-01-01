import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTargetingPriority } from "@/store/targetingSlice";
import { RootState } from "@/store/store";

import { styled, Modal, Typography, Box, Tabs, Tab, Button } from "@mui/material";
import EmptyHeader from "@/components/Header/EmptyHeader";
import BottomButton from "@/components/BottomButton/Next";
import { targetingCategories } from "@/constants/targeting";

import AlertModal from "@/components/Modal/Default";
import useModal from "@/hooks/useModal";


const OptionModal = ({ open, onClose }: { open: any, onClose: any }) => {
  const [priority, setPriority] = useState(1);
  const { isModalOpen: isAlertOpen, openModal: openAlertModal, closeModal: closeAlertModal } = useModal();
  const [alertTitle, setAlertTitle] = useState("");
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  const handleTabsChange = (event: any, newValue: number) => {
    setPriority(newValue);
  };

  const handleOptionClick = (optionName: string) => {
    const currentPriorityCount = Object.keys(targetingState).filter((field: string) => {
      return targetingState[field].priority === priority;
    });
    const targetingOption = targetingState[optionName];
    if (targetingOption.priority === priority) {
      dispatch(setTargetingPriority({ field: optionName, priority: null }));
    } else {
      if (priority === 1 && currentPriorityCount.length >= 2) {
        setAlertTitle("1순위는 최대 2개까지 선택할 수 있어요");
        openAlertModal();
        // alert("1순위는 최대 2개까지 선택할 수 있습니다.");
        return;
      } else if (currentPriorityCount.length >= 4) {
        setAlertTitle(`${priority}순위는 최대 4개까지 선택할 수 있어요`);
        openAlertModal();
        // alert(`${priority}순위는 최대 4개까지 선택할 수 있습니다.`);
        return;
      }
      dispatch(setTargetingPriority({ field: optionName, priority: priority }));
    }
  };

  return (
    <>
    <AlertModal title={alertTitle} complete={"이해했어요!"} isModalOpen={isAlertOpen} onModalClose={closeAlertModal} onComplete={closeAlertModal} />
    <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
      <div id="page" style={{ height: "100vh" }}>
        <EmptyHeader />
        <Root id="content">
          <Box className="title-box">
            <Typography variant="h1">1순위 반영 조건</Typography>
            <Typography variant="body1">꼭 맞춰줬으면 하는 조건을 <strong>'최대 2개’</strong> 골라주세요</Typography>
          </Box>
          <Tabs
            variant="fullWidth"
            value={priority}
            onChange={handleTabsChange}
            textColor="primary"
            indicatorColor="primary">
              <Tab label="1순위" value={1} />
              <Tab label="2순위" value={2} />
              <Tab label="3순위" value={3} />
          </Tabs>
          <Typography variant="body2">*다른 회원 분들은 평균 6개의 조건을 설정했어요.</Typography>
          {
            Object.keys(targetingCategories).map((category: string) => {
              if (category === "default")
              return;
              return (
                <Box key={category} className="category-box">
                  <Typography variant="subtitle1">{targetingCategories[category].label}</Typography>
                  <Box className="options-box">
                    {
                      targetingCategories[category].options.map((option: any) => {
                        const buttonPriority = targetingState[option.name].priority;
                        let buttonStyle = "";
                        if (buttonPriority === priority) {
                          buttonStyle = "btn-selected";
                        } else if (buttonPriority !== null) {
                          buttonStyle = "btn-prior-selected";
                        } else {
                          buttonStyle = "btn-plain";
                        }
                        return (
                          <Button
                            color={
                              buttonPriority !== priority
                                ? "secondary"
                                : "primary"
                            }
                            key={option.name}
                            className={buttonStyle}
                            onClick={() => handleOptionClick(option.name)}
                          >
                            {buttonPriority &&
                              buttonPriority !== priority &&
                              `${buttonPriority} | `}{" "}
                            {option.label}
                          </Button>
                        );
                      })
                    }
                  </Box>
                </Box>
              )}
            )
          }
          {/* <button onClick={onClose}>닫기</button> */}
        </Root>
        <BottomButton>
          <Button variant="contained" size="large" onClick={onClose}>저장하기</Button>
        </BottomButton>
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
  paddingBottom: '36px',

  ".title-box": {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  ".category-box": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  ".options-box": {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  // "& .MuiButton-sizeMedium": {
  //   fontSize: "14px",
  //   padding: "8px 12px",
  // },

  // ".btn-plain": {
  //   backgroundColor: "#F1F3F6",
  //   color: "#5C5F63 !important",
  //   fontWeight: "400",
  //   border: "1px solid #F1F3F6",
  // },
  ".btn-prior-selected": {
    backgroundColor: "#fff !important",
    color: "#f70 !important",
    fontWeight: "700",
    border: "1px solid #F70",
  },

  "& .MuiTabs-root": {
    width: "calc(100% + 24*2)",
    margin: "0 -24px",
    overflow: "unset",
  },

  "& .MuiTab-root": {
    fontWeight: "400",
    borderBottom: "1px solid #D3D6DB",
  },

  "& .Mui-selected": {
    fontWeight: "700",
  },

  "& .MuiTabs-indicator": {
    height: "4px",
  }
});

export default OptionModal;
