import { BottomNavigation, Button, Container, Typography } from "@mui/material";
import SubmitNavButtonRoot from "./\bSubmitNavButtonRoot";
import { useRouter } from "next/navigation";

interface SubmitNavButtonProps {
  submitText: string;
  submitHref: string;

  nextType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function SubmitNavButton({
  submitText,
  submitHref,
}: SubmitNavButtonProps) {
  const router = useRouter();

  const handleNextClick = () => {
    router.push(submitHref);
  };

  return (
    <SubmitNavButtonRoot>
      <Container className="button-box">
        <Button
          size="large"
          fullWidth
          variant="contained"
          className="prevButton"
          onClick={handleNextClick}
        >
          <Typography>{submitText}</Typography>
        </Button>
      </Container>
    </SubmitNavButtonRoot>
  );
}
