import { Button } from "@mui/material";

interface BottomButtonProps {
  onNext?: () => void;
  saveText?: string;
  isSaveDisabled?: boolean;
  onClose: () => void;
}

const BottomButton = ({
  onNext = () => {},
  saveText = "다음",
  isSaveDisabled = false,
  onClose,
}: BottomButtonProps) => {
  return (
    <BottomButtonRoot>
      <Button
        variant="contained"
        size="large"
        onClick={onClose}
        disabled={isSaveDisabled}
      >
        {saveText}
      </Button>
    </BottomButtonRoot>
  );
};

export default BottomButton;

import { styled } from "@mui/material";

const BottomButtonRoot = styled("div")({
  position: "fixed",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: "10",
  width: "100%",
  height: "84px",
  maxWidth: "480px",
  backgroundColor: "#fff",
  borderTop: "1px solid #D3D6DB",
  padding: "12px 24px 20px 24px",

  display: "flex",

  "& .MuiButton-root": {
    minWidth: "",
    width: "100%",
  },
});
