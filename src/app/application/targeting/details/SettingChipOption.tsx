import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

import colors from "@/assets/theme/base/colors";
import AlertModal from "@/components/Modal/Default";
import { residence } from "@/constants/application_option";
import { allOptions } from "@/constants/targeting";
import useModal from "@/hooks/useModal";
import { setTargetingDataField } from "@/store/targetingSlice";
import { useDispatch, useSelector } from "react-redux";

type TooltipOpenStates = {
  [key: string]: boolean;
};

const SettingChipOption = ({ optionName }: { optionName: string }) => {
  const dispatch = useDispatch();
  const optionState = useSelector(
    (state: RootState) => state.targeting[optionName]
  );
  const [alertTitle, setAlertTitle] = useState("");
  const {
    isModalOpen: isAlertOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal();
  const [tooltipOpenStates, setTooltipOpenStates] = useState<TooltipOpenStates>(
    {
      서울: false,
      경기: false,
      인천: false,
    }
  );
  const allOption = residence.options;
  const limit = allOptions[optionName].targeting_limit;

  const ascending = (a: number, b: number) => a - b;

  function handleOptionClick(idx: number) {
    if (optionState.data.includes(idx)) {
      dispatch(
        setTargetingDataField({
          field: optionName,
          data: optionState.data.filter((data: number) => data !== idx),
        })
      );
    } else if (limit && optionState.data.length >= limit) {
      setAlertTitle(`최대 ${limit}개 까지 선택할 수 있어요`);
      openAlertModal();
      return;
    } else {
      dispatch(
        setTargetingDataField({
          field: optionName,
          data: [...optionState.data, idx].sort(ascending),
        })
      );
    }
  }
  const renderTooltip = (group: string) => {
    switch (group) {
      case "서울":
        return tooltipSeoul();
      case "경기":
        return tooltipGyeonggi();
      case "인천":
        return tooltipIncheon();
      default:
        return null;
    }
  };
  const renderOptionButtons = (group: string) => {
    return Object.keys(allOption[group]).map((optionKey: string) => (
      <Button
        sx={{ height: "34px", width: "100%" }}
        key={optionKey}
        variant="contained"
        color={
          optionState.data.includes(Number(optionKey)) ? "primary" : "secondary"
        }
        onClick={() => handleOptionClick(Number(optionKey))}
      >
        <Typography
          variant="body2"
          color={
            optionState.data.includes(Number(optionKey)) ? "white" : "gray1"
          }
        >
          {allOption[group][optionKey]}
        </Typography>
      </Button>
    ));
  };

  const toggleTooltip = (group: string) => {
    setTooltipOpenStates((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };
  const handleCloseTooltip = () => {
    setTooltipOpenStates((prev) => {
      const newStates = { ...prev };
      Object.keys(newStates).forEach((key) => {
        newStates[key] = false;
      });
      return newStates;
    });
  };

  const isAnyTooltipOpen = Object.values(tooltipOpenStates).some(
    (state) => state
  );

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
        <Box className="button-box">
          {allOption["기타"] && (
            <Box className="button-box" key="기타">
              <Typography>{renderOptionButtons("기타")}</Typography>
            </Box>
          )}
          {Object.keys(allOption)
            .filter((group) => group !== "기타")
            .map((group: string) => (
              <Box className="button-box" key={group}>
                <Box className="tooltip-box">
                  <Typography variant="subtitle2">{group}</Typography>
                  {isAnyTooltipOpen ? (
                    <ClickAwayListener onClickAway={handleCloseTooltip}>
                      <Tooltip
                        title={renderTooltip(group)}
                        placement="bottom-end"
                        arrow
                        open={tooltipOpenStates[group] || false}
                        disableHoverListener
                      >
                        <Box
                          className="tooltip-content"
                          onClick={() => toggleTooltip(group)}
                        >
                          <Typography
                            className="tooltip-text"
                            variant="body3"
                            color="gray"
                          >
                            {group} 지역 상세보기
                          </Typography>
                        </Box>
                      </Tooltip>
                    </ClickAwayListener>
                  ) : (
                    <Tooltip
                      title={renderTooltip(group)}
                      placement="bottom-end"
                      arrow
                      open={tooltipOpenStates[group]}
                      onClick={() => toggleTooltip(group)}
                    >
                      <Box className="tooltip-content">
                        <Typography
                          className="tooltip-text"
                          variant="body3"
                          color="gray"
                        >
                          {group} 지역 상세보기
                        </Typography>
                      </Box>
                    </Tooltip>
                  )}
                </Box>
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
                      <Typography
                        variant="body2"
                        color={
                          optionState.data.includes(Number(optionKey))
                            ? "white"
                            : "gray1"
                        }
                      >
                        {allOption[group][optionKey]}
                      </Typography>
                    </Button>
                  ))}
                </Box>
              </Box>
            ))}
        </Box>
      </Root>
    </>
  );
};

const Root = styled(Box)(() => {
  const { gray2 } = colors;
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    ".button-box": {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      gap: "12px",
      width: "100%",
    },
    ".button": {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "9px",
    },
    ".tooltip-box": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .MuiTooltip-tooltip": {
        display: "none",
        position: "relative",
      },
    },
    ".tooltip-content": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    ".tooltip": {
      marginBottom: "17px",
      display: "flex",
      justifyContent: "flex-start",
      gap: "4px",
    },
    ".tooltip-text": {
      textDecoration: "underline",
    },
  };
});

export const tooltipSeoul = () => {
  return (
    <TooltipTitleRoot>
      <Typography variant="body3">
        <strong>서울</strong>
      </Typography>
      <Divider />
      <Typography variant="body3">
        <strong>서울 동부</strong> : 동대문구, 중랑구, 광진구, 성동구, 강동구
        <br />
        <strong>서울 서부</strong> : 강서구, 영등포구, 양천구, 구로구, 금천구
        <br />
        <strong>서울 남부</strong> : 동작구, 관악구, 서초구, 강남구, 송파구
        <br />
        <strong>서울 북부</strong> : 강북구, 도봉구, 노원구, 성북구
        <br />
        <strong>서울 중부</strong> : 은평구, 종로구, 서대문구, 마포구, 중구,
        용산구
      </Typography>
    </TooltipTitleRoot>
  );
};

export const tooltipGyeonggi = () => {
  return (
    <TooltipTitleRoot>
      <Typography variant="body3">
        <strong>경기</strong>
      </Typography>
      <Divider />
      <Typography variant="body3">
        <strong>경기 북서부</strong> : 파주, 김포, 고양 <br />
        <strong>경기 북동부</strong> : 남양주, 가평, 구리 <br />
        <strong>경기 북부</strong> : 연천, 포천, 동두천, 양주, 의정부 <br />
        <strong>경기 남부</strong> : 평택, 안성, 오산, 화성, 용인 <br />
        <strong>경기 남서부</strong> : 부천, 광명, 시흥, 안산 <br />
        <strong>경기 남동부</strong> : 광주,이천, 여주, 양평, 하남 <br />
        <strong>경기 중부</strong> : 과천, 군포, 성남, 수원, 안양, 의왕
      </Typography>
    </TooltipTitleRoot>
  );
};

export const tooltipIncheon = () => {
  return (
    <TooltipTitleRoot>
      <Typography variant="body3">
        <strong>인천</strong>
      </Typography>
      <Divider />
      <Typography variant="body3">
        <strong>인천 서부</strong> : 서구, 동구, 중구, 남구, 연수구, 강화군,
        영종도 <br />
        <strong>인천 동부 </strong>: 계양구, 부평구, 남동구
      </Typography>
    </TooltipTitleRoot>
  );
};

const TooltipTitleRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "100%",

    ".content-box": {
      marginBottom: "4px",
    },
  };
});

export default SettingChipOption;
