import { Button } from "@mui/material";
import BottomButtonRoot from "@/components/BottomButton/BottomButtonRoot";

interface BottomButtonProps {
  onAccept?: () => void;
  onRefuse?: () => void;
  acceptText?: string;
  refuseText?: string;
}

const BottomButton = ({
  onAccept = () => {},
  onRefuse = () => {},
  acceptText = "다음",
  refuseText = "이전",
}: BottomButtonProps) => {
  return (
    <BottomButtonRoot>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={onRefuse}
      >
        {refuseText}
      </Button>

      <Button variant="contained" size="large" onClick={onAccept}>
        {acceptText}
      </Button>
    </BottomButtonRoot>
  );
};

export default BottomButton;
