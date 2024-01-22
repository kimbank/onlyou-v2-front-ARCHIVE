
import { Button } from "@mui/material";
import BottomButtonRoot from "@/components/BottomButton/BottomButtonRoot";

interface BottomButtonProps {
  onNext?: () => void;
  onPrev?: () => void;
  nextText?: string;
  prevText?: string;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
}

const BottomButton = ({
  onNext = () => {},
  onPrev = () => {},
  nextText = "다음",
  prevText = "이전",
  isNextDisabled = false,
  isPrevDisabled = false,
}: BottomButtonProps) => {

  return (
    <BottomButtonRoot>
      {!isPrevDisabled &&
        <Button
          variant="outlined"
          size="large"
          onClick={onPrev}
        >
          {prevText}
        </Button>
      }
      <Button
        variant="contained"
        size="large"
        onClick={onNext}
        disabled={isNextDisabled}
      >
          {nextText}
      </Button>
    </BottomButtonRoot>
  )
}

export default BottomButton
