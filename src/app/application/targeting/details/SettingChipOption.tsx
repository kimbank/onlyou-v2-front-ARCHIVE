import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import colors from "@/assets/theme/base/colors";
import { residence } from "@/constants/application_option";
import { allOptions } from "@/constants/targeting";
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
  const currentData = optionState.data || [];

  const [tooltipOpenStates, setTooltipOpenStates] = useState<TooltipOpenStates>(
    {
      서울: false,
      경기: false,
      인천: false,
    }
  );
  const [isEtcActive, setIsEtcActive] = useState(false);
  const [isOtherActive, setIsOtherActive] = useState(false);
  const allOption = residence.options;
  const limit = allOptions[optionName].targeting_limit;

  const ascending = (a: number, b: number) => a - b;

  function handleOptionClick(idx: number) {
    const isEtcOption = allOption["기타"][idx] !== undefined;

    let newData;
    if (currentData.includes(idx)) {
      newData = currentData.filter((data: number) => data !== idx);
    } else {
      if (isEtcOption) {
        newData = [idx];
      } else {
        newData = currentData.filter(
          (dataIdx: string) => allOption["기타"][dataIdx] === undefined
        );
        newData.push(idx);
      }
    }

    dispatch(
      setTargetingDataField({
        field: optionName,
        data: newData.sort(ascending),
      })
    );
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
    return Object.keys(allOption["기타"]).map(
      (optionKey: string, index: number) => (
        <Button
          key={index}
          sx={{ height: "34px", width: "100%" }}
          variant="contained"
          color={
            currentData.includes(Number(optionKey)) ? "primary" : "secondary"
          }
          onClick={() => handleOptionClick(Number(optionKey))}
        >
          <Typography
            variant={
              currentData.includes(Number(optionKey)) ? "subtitle2" : "body2"
            }
            color={currentData.includes(Number(optionKey)) ? "white" : "gray1"}
          >
            {allOption["기타"][optionKey]}
          </Typography>
        </Button>
      )
    );
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
  useEffect(() => {
    const isEtcChecked = currentData.some(
      (idx: string) => allOption["기타"][idx] !== undefined
    );
    setIsEtcActive(isEtcChecked);

    const isOtherChecked = currentData.some(
      (idx: string) => allOption["기타"][idx] === undefined
    );
    setIsOtherActive(isOtherChecked);
  }, [optionState.data]);

  return (
    <>
      <Root>
        <Box className="button-box">
          {allOption["기타"] && (
            <Box className="button-box" key="기타">
              <Typography>{renderOptionButtons("기타")}</Typography>
            </Box>
          )}
          {Object.keys(allOption)
            .filter((group) => group !== "기타")
            .map((group: string, index: number) => (
              <Box className="button-box" key={index}>
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
                        PopperProps={{
                          style: { zIndex:1500 },
                          container: document.getElementById("page") || document.body,
                        }}
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
                      PopperProps={{style:{zIndex:1500}}}
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
                  {Object.keys(allOption[group]).map(
                    (optionKey: string, index: number) => (
                      <Button
                        key={index}
                        variant="contained"
                        color={
                          currentData.includes(Number(optionKey))
                            ? "primary"
                            : "secondary"
                        }
                        onClick={() => handleOptionClick(Number(optionKey))}
                      >
                        <Typography
                          variant={
                            currentData.includes(Number(optionKey))
                              ? "subtitle2"
                              : "body2"
                          }
                          color={
                            currentData.includes(Number(optionKey))
                              ? "white"
                              : "gray1"
                          }
                        >
                          {allOption[group][optionKey]}
                        </Typography>
                      </Button>
                    )
                  )}
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
    zIndex: 3000,

    ".content-box": {
      marginBottom: "4px",
    },
  };
});

export default SettingChipOption;
