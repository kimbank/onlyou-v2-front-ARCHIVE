import React from "react";
import { RootState } from "@/store/store";
import { showModal } from "@/store/home/modalSlice";
import { setTargetingPriority } from "@/store/targetingSlice";
import { useDispatch, useSelector } from "react-redux";

import BottomButton from "@/components/BottomButton/Next";
import { targetingCategories } from "@/constants/targeting";
import {
  Box,
  Button,
  Modal,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import CloseHeader from "@/components/Header/CloseHeader";
import useModal from "@/hooks/useModal";


const OptionModal = ({ open, onClose }: { open: any; onClose: any }) => {
  const [priority, setPriority] = React.useState(1);
  const dispatch = useDispatch();
  const targetingState = useSelector((state: RootState) => state.targeting);

  const titles = ["1순위 조건", "2순위 조건", "3순위 조건"];
  const conditions = ["최대 2개", "최대 4개", "최대 4개"];

  const handleTabsChange = (event: any, newValue: number) => {
    setPriority(newValue);
  };

  const [selectedOptionsByPriority, setSelectedOptionsByPriority] = React.useState<{
    [key: number]: string[];
  }>({});

  const handleOptionClick = (optionName: string) => {
    const currentOptionPriority = targetingState[optionName]?.priority;
    const maxOptions = priority === 1 ? 2 : 4;
    const currentSelectedOptions = selectedOptionsByPriority[priority] || [];
    const currentSelectedOptionsInRedux = Object.keys(targetingState).filter(
      (key) => targetingState[key].priority === priority
    );
    if (currentOptionPriority !== null) {
      dispatch(setTargetingPriority({ field: optionName, priority: null }));
      setSelectedOptionsByPriority({
        ...selectedOptionsByPriority,
        [priority]: currentSelectedOptions.filter(
          (option) => option !== optionName
        ),
      });
      return;
    }
    if (currentSelectedOptionsInRedux.length >= maxOptions) {
      dispatch(
        showModal({
          title: "알림",
          body: `${priority}순위 조건은 최대 ${maxOptions}개까지 선택 가능합니다.`,
          complete: "확인",
        })
      );
      return;
    }
    // if (currentSelectedOptions.length >= maxOptions) {
    //   const oldestOption = currentSelectedOptions[0];
    //   dispatch(setTargetingPriority({ field: oldestOption, priority: null }));
    //   setSelectedOptionsByPriority({
    //     ...selectedOptionsByPriority,
    //     [priority]: [...currentSelectedOptions.slice(1), optionName],
    //   });
    // } else if (currentSelectedOptionsInRedux.length >= maxOptions) {
    //   const oldestOption = currentSelectedOptionsInRedux[0];
    //   dispatch(setTargetingPriority({ field: oldestOption, priority: null }));
    //   setSelectedOptionsByPriority({
    //     ...selectedOptionsByPriority,
    //     [priority]: [...currentSelectedOptions.slice(1), optionName],
    //   });
    // } else {
    //   setSelectedOptionsByPriority({
    //     ...selectedOptionsByPriority,
    //     [priority]: [...currentSelectedOptions, optionName],
    //   });
    // }
    dispatch(setTargetingPriority({ field: optionName, priority: priority }));
  };

  React.useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("targeting", targetingState);
      console.log("targetingCategories", targetingCategories);
    }
  });

  return (
    <>
      <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
        <div id="page" style={{ height: "100vh" }}>
          <CloseHeader onClose={onClose} />
          <Root id="content">
            <Box className="title-box">
              <Typography variant="h1">{titles[priority - 1]}</Typography>
              <Typography variant="body1">
                꼭 맞춰줬으면 하는 조건을 &nbsp;
                <strong>"{conditions[priority - 1]}"</strong> &nbsp;
                골라주세요.
              </Typography>
            </Box>
            <Tabs
              variant="fullWidth"
              value={priority}
              onChange={handleTabsChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="1순위" value={1} />
              <Tab label="2순위" value={2} />
              <Tab label="3순위" value={3} />
            </Tabs>
            {/* <Typography variant="body2">
              *다른 회원 분들은 평균 6개의 조건을 설정했어요.
            </Typography> */}
            {Object.keys(targetingCategories).map((category: string, index: number) => {
              if (category === "default") return;
              return (
                <Box key={index} className="category-box">
                  <Typography variant="subtitle1">
                    {targetingCategories[category].label}
                  </Typography>
                  <Box className="options-box">
                    {targetingCategories[category].options.map(
                      (option: any, index: number) => {
                        const buttonPriority =
                          targetingState[option.name]?.priority;

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
                            key={index}
                            color={
                              buttonPriority !== priority
                                ? "secondary"
                                : "primary"
                            }
                            className={buttonStyle}
                            onClick={() => handleOptionClick(option.name)}
                          >
                            {buttonPriority &&
                              buttonPriority !== priority &&
                              `${buttonPriority} |${"\u00A0"}`}
                            <Typography
                              variant={
                                buttonPriority === priority ||
                                (buttonPriority && buttonPriority !== priority)
                                  ? "subtitle2"
                                  : "body2"
                              }
                            >
                              {option.label}
                            </Typography>
                          </Button>
                        );
                      }
                    )}
                  </Box>
                </Box>
              );
            })}
            {/* <button onClick={onClose}>닫기</button> */}
          </Root>
          <BottomButton>
            <Button variant="contained" size="large" onClick={onClose}>
              닫기
            </Button>
          </BottomButton>
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
  paddingBottom: "36px",

  ".title-box": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
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
  },
});

export default OptionModal;
