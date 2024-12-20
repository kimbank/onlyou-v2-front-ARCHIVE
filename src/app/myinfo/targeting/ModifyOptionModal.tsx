import React from "react";
import { RootState } from "@/store/store";
import {
  setTargetingDataField,
  setTargetingPriority,
} from "@/store/targetingSlice";
import { showModal } from "@/store/home/modalSlice";
import { useDispatch, useSelector } from "react-redux";

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
import BottomButton from "@/components/BottomButton/Next";


interface ModifyOptionModalProps {
  open: boolean;
  onClose: () => void;
  targetingState: RootState["targeting"];
  setHasPriorityChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModifyOptionModal = ({
  open,
  onClose,
  targetingState,
  setHasPriorityChanged,
}: ModifyOptionModalProps) => {
  const [priority, setPriority] = React.useState(1);
  const dispatch = useDispatch();

  const titles = ["1순위 조건", "2순위 조건", "3순위 조건"];
  const conditions = ["최대 2개", "최대 4개", "최대 4개"];
  const [selectedOptionsByPriority, setSelectedOptionsByPriority] = React.useState<{
    [key: number]: string[];
  }>({});
  const [temporaryState, setTemporaryState] = React.useState(targetingState);

  const handleTabsChange = (event: any, newValue: number) => {
    setPriority(newValue);
  };

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
    setTemporaryState(targetingState);
  }, [targetingState, open]);

  const handleSaveChanges = () => {
    Object.keys(temporaryState).forEach((key) => {
      const item = temporaryState[key];
      if (item.priority !== targetingState[key].priority) {
        dispatch(setTargetingPriority({ field: key, priority: item.priority }));
      }
    });

    onClose(); // 모달 닫기
  };

  return (
    <>
      <Modal open={open} onClose={onClose} id="root" sx={{ height: "100vh" }}>
        <div id="page" style={{ height: "100vh" }}>
          <CloseHeader href="details/" onClose={onClose} />
          <Root id="content">
            <Box className="title-box">
              <Typography variant="h1">{titles[priority - 1]}</Typography>
              <Typography variant="body1">
                꼭 맞춰줬으면 하는 조건을
                <strong>"{conditions[priority - 1]}"</strong>
                골라주세요.,
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
            {Object.keys(targetingCategories).map(
              (category: string, index: number) => {
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
                            targetingState[option.name].priority;
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
                              key={index}
                              className={buttonStyle}
                              onClick={() => handleOptionClick(option.name)}
                            >
                              {buttonPriority &&
                                buttonPriority !== priority &&
                                `${buttonPriority} |${"\u00A0"}`}
                              <Typography
                                variant={
                                  buttonPriority === priority ||
                                  (buttonPriority &&
                                    buttonPriority !== priority)
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
              }
            )}
          </Root>
          <BottomButton>
            <Button
              variant="contained"
              size="large"
              onClick={handleSaveChanges}
            >
              <Typography variant="subtitle1">변경 완료</Typography>
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

export default ModifyOptionModal;
