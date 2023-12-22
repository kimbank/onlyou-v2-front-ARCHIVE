import { Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import RDButton from "../RDButton/RDButton";
import { Box, styled } from "@mui/material";


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
        <RDButton
          size="large"
          variant="contained"
          color="primary"
          className="button"
          onClick={handleNextClick}
        >
          <Typography>{submitText}</Typography>
        </RDButton>
    </SubmitNavButtonRoot>
  );
}


const SubmitNavButtonRoot = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF",
    maxWidth: "480px",
    borderTop: "1px solid #B2B0AE",
    padding: "12px 24px",
    margin : 'auto',
    "&.MuiBox-root":{
      margin:0,
    }
  };
});
