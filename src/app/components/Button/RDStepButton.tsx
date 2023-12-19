import { Check, CheckBox } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Checkbox } from "../CheckBox/CheckBox";
import { RDCheckbox } from "../CheckBox/RDCheckBox";
import RDButton from "../RDButton/RDButton";
import RDStepNavButtonRoot from "./RDStepNavButtonRoot";

interface RDStepNavButtonProps {
  prevText: string;
  prevHref: string;
  nextText: string;
  nextHref?: string;
  nextType?: "button" | "submit" | "reset";
  onClick?: () => void;
  checkedStates?: boolean;
  tips?: boolean;
}

export const RDStepNavButton = ({
  prevText,
  nextText,
  prevHref,
  nextHref,
  nextType,
  onClick,
  checkedStates,
  tips,
}: RDStepNavButtonProps) => {
  const router = useRouter();
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handlePrevClick = () => {
    router.push(prevHref);
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
    <RDStepNavButtonRoot>
      {tips && (
        <RDCheckbox
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
      )}
      <Box className="button-box">
        <RDButton
          color="primary"
          size="large"
          variant="outlined"
          onClick={handlePrevClick}
        >
          <Typography variant="body1">{prevText}</Typography>
        </RDButton>
        <RDButton
          color="primary"
          size="large"
          variant="contained"
          disabled={!checkedStates}
          onClick={handleNextClick}
        >
          <Typography variant="body1">{nextText}</Typography>
        </RDButton>
      </Box>
    </RDStepNavButtonRoot>
  );
};
