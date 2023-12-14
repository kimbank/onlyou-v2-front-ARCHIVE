import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import RDButton from "../RDButton/RDButton";
import RDStepNavButtonRoot from "./RDStepNavButtonRoot";

interface RDStepNavButtonProps {
  prevText: string;
  prevHref: string;
  nextText: string;
  nextHref?: string;
  nextType?: "button" | "submit" | "reset";
  onClick?: () => void;
  checkedStates?: boolean[];
}

export const RDStepNavButton = ({
  prevText,
  nextText,
  prevHref,
  nextHref,
  nextType,
  onClick,
  checkedStates,
}: RDStepNavButtonProps) => {
  const router = useRouter();

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

  const checkedCount = checkedStates?.filter(Boolean).length ?? 0;
  return (
    <RDStepNavButtonRoot>
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
        disabled={checkedCount < 3}
        onClick={handleNextClick}
      >
        <Typography variant="body1">{nextText}</Typography>
      </RDButton>
    </RDStepNavButtonRoot>
  );
};
