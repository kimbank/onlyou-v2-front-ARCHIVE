import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTargetingPriority } from "@/store/targetingSlice";
import { RootState } from "@/store/store";

import { styled, Modal, Typography, Box, Tabs, Tab, Button } from "@mui/material";
import EmptyHeader from "@/components/Header/EmptyHeader";
import BottomButton from "@/components/BottomButton/Next";
import { targetingCategories } from "@/constants/targeting";


const OptionModal = ({ open, onClose }: { open: any, onClose: any }) => {
  const [priority, setPriority] = useState(1);
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  const handleTabsChange = (event: any, newValue: number) => {
    setPriority(newValue);
  };

  const handleOptionClick = (optionName: string) => {
    const targetingOption = targetingState[optionName];
    if (targetingOption.priority === priority) {
      dispatch(setTargetingPriority({ field: optionName, priority: null }));
    } else {
      dispatch(setTargetingPriority({ field: optionName, priority: priority }));
    }
  };

  return (
    <Modal open={open} onClose={onClose} id="root">
      <div id="page">
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
            Object.keys(targetingCategories).map((category: string) => (
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
                          key={option.name}
                          className={buttonStyle}
                          onClick={() => handleOptionClick(option.name)}>
                            {buttonPriority && buttonPriority !== priority && `${buttonPriority} | `} {option.label}
                        </Button>
                      )
                    })
                  }
                </Box>
              </Box>
            ))
          }
          {/* <button onClick={onClose}>닫기</button> */}
        </Root>
        <BottomButton>
          <Button variant="outlined" onClick={onClose}>저장하기</Button>
        </BottomButton>
      </div>
    </Modal>
  )
}

const Root = styled("div")({
  height: "100vh",
  backgroundColor: "#fff",
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

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

  "& .MuiButton-sizeMedium": {
    fontSize: "14px",
    padding: "8px 12px",
  },

  ".btn-plain": {
    backgroundColor: "#F1F3F6",
    color: "#5C5F63 !important",
    fontWeight: "400",
    border: "1px solid #F1F3F6",
  },

  ".btn-selected": {
    backgroundColor: "#F70",
    color: "#fff",
    fontWeight: "700",
    border: "1px solid #F70",
  },

  ".btn-prior-selected": {
    backgroundColor: "#fff",
    color: "#f70",
    fontWeight: "700",
    border: "1px solid #F70",
  },

  "& .MuiTabs-root": {
    width: "calc(100% + 24*2)",
    margin: "0 -24px",
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
