import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StepButtonProps {
  prevText?: string;
  prevHref?: string;
  nextText?: string;
  nextHref?: string;
  nextType?: "button" | "submit" | "reset";
  onClick?: () => void;
  checkedStates?: boolean;
  tips?: boolean;
}

export const StepButton = ({
  prevText,
  nextText,
  prevHref,
  nextHref,
  nextType,
  onClick,
  checkedStates,
  tips,
}: StepButtonProps) => {
  const router = useRouter();
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handlePrevClick = () => {
    if (prevHref) {
      router.push(`${prevHref}?type=init`);
    }
  };
  const handleNextClick = () => {
    if (nextHref) {
      router.push(`${nextHref}?type=init`);
    } else if (onClick) {
      onClick();
    }
  };

  //   const checkedCount = checkedStates?.filter(Boolean).length ?? 0;
  let isDisabled = !checkedStates; // 기본적으로는 checkedStates만 고려
  if (tips) {
    // Tipbox가 존재하는 경우 추가적인 조건 고려
    isDisabled = !(checkedStates && checkboxChecked);
  }
  return (
    <StepButtonRoot>
      {tips && (
        <Tipbox
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
      )}
      <Box className="button-box">
        <Button size="large" variant="outlined" onClick={handlePrevClick}>
          <Typography variant="subtitle1">{prevText}</Typography>
        </Button>
        <Button
          size="large"
          variant="contained"
          disabled={isDisabled}
          onClick={handleNextClick}
        >
          <Typography variant="subtitle1">{nextText}</Typography>
        </Button>
      </Box>
    </StepButtonRoot>
  );
};

import { styled } from "@mui/material";
import { Tipbox } from "../CheckBox/Tipbox";

const StepButtonRoot = styled("div")(({ theme }) => {
  return {
    position: "fixed",
    bottom: "0px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "480px",
    display: "flex",
    flexShrink: "0",
    background: "#FFF",
    borderTop: "1px solid #B2B0AE",
    padding: "12px 24px 20px 24px",
    justifyContent: "space-between",
    // tips적용
    flexDirection: "column",
    gap: "26px",
    ".button-box": {
      width: "100%",
      display: "flex",
      flexShrink: "0",
      flexDirection: "row",
      justifyContent: "center",
      gap: "17px",
    },
  };
});
