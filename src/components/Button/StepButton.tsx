import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RDCheckbox } from "../CheckBox/RDCheckBox";

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
        <RDCheckbox
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

const StepButtonRoot = styled("div")(({ theme }) => {
  return {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#FFF",
    maxWidth: "480px",
    borderTop: "1px solid #B2B0AE",
    padding: "24px",
    paddingTop: "12px",
    paddingBottom: "10px",
    gap: "10px",
    ".button-box": {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "10px",
    },
    ".prevButton": {},
    " .nextButton": {},
  };
});

