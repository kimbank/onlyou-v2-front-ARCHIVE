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
    router.push(prevHref);
  }
};
  const handleNextClick = () => {
    if (nextHref) {
      router.push(nextHref);
    } else if (onClick) {
      onClick();
    }
  };

  //   const checkedCount = checkedStates?.filter(Boolean).length ?? 0;
  return (
    <StepButtonRoot>
      {tips && (
        <Tipbox
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
      )}
      <Box className="button-box">
        <Button
          size="large"
          variant="outlined"
          onClick={handlePrevClick}
        >
          <Typography variant="body1">{prevText}</Typography>
        </Button>
        <Button
          size="large"
          variant="contained"
          disabled={!checkedStates}
          onClick={handleNextClick}
        >
          <Typography variant="body1">{nextText}</Typography>
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
    gap:"26px",
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

