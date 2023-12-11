import { Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import StepNavButtonRoot from "./StepNavButtonRoot";

interface StepNavButtonProps {
  prevText: string;
  prevHref: string;
  nextText: string;
  nextHref: string;
  nextType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const StepNavButton = ({
  prevText,
  nextText,
  prevHref,
  nextHref,
  nextType,
  onClick,
}: StepNavButtonProps) => {
  const router = useRouter();

  const handlePrevClick = () => {
    router.push(prevHref);
  };

  const handleNextClick = () => {
    router.push(nextHref);
  };

  return (
    <StepNavButtonRoot>
      <Container className="button-box">
        <Button
          size="large"
          fullWidth
          variant="contained"
          className="prevButton"
          onClick={handlePrevClick}
        >
          <Typography>{prevText}</Typography>
        </Button>
        <Button
          size="large"
          className="nextButton"
          fullWidth
          color="primary"
          variant="contained"
          type={nextType}
          onClick={nextType === "submit" ? onClick : handleNextClick}
        >
          <Typography>{nextText}</Typography>
        </Button>
      </Container>
    </StepNavButtonRoot>
  );
};
