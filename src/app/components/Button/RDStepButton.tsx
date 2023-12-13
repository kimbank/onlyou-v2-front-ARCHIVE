import { Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import RDButton from "../RDButton/RDButton";
import RDStepNavButtonRoot from "./RDStepNavButtonRoot";

interface RDStepNavButtonProps {
  prevText: string;
  prevHref: string;
  nextText: string;
  nextHref: string;
  nextType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const RDStepNavButton = ({
  prevText,
  nextText,
  prevHref,
  nextHref,
  nextType,
  onClick,
}: RDStepNavButtonProps) => {
  const router = useRouter();

  const handlePrevClick = () => {
    router.push(prevHref);
  };

  const handleNextClick = () => {
    router.push(nextHref);
  };

  return (
    <RDStepNavButtonRoot>
      <RDButton
        color="primary"
        size="large"
        variant="outlined"
        onclick={handlePrevClick}
      >
        <Typography variant="body2">{prevText}</Typography>
      </RDButton>
      <RDButton
        color="primary"
        size="large"
        variant="contained"
        onclick={handleNextClick}
      >
        <Typography variant="body2">{nextText}</Typography>
      </RDButton>
    </RDStepNavButtonRoot>
  );
};
