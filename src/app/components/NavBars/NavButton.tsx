import { Button, Container, Typography } from "@mui/material";
import { NavButtonStyles } from "./NavButtonStyles";
import Link from "next/link";
import StepNavButtonRoot from "./StepNavButtonRoot";
import { MainHalfButton } from "../Button/Button";
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
}
interface StepNavButtonProps {
  prevText: string;
  onPrevClick?: () => void;
  prevHref: string;
  nextText: string;
  onNextClick?: () => void;
  nextHref: string;
  nextType?: "button" | "submit" | "reset";
}

export const StepNavButton = ({
  prevText,
  nextText,
  prevHref,
  nextHref,
  nextType = "button",
}: StepNavButtonProps) => (
  <StepNavButtonRoot>
    <Link href={prevHref} passHref>
      <Button sx={{ width: 220 }} variant="contained" className="prevButton">
        <Typography>{prevText}</Typography>
      </Button>
    </Link>
    <Link href={nextHref} passHref>
      <Button
        size="large"
        sx={{ width: 220 }}
        className="nextButton"
        fullWidth
        color="primary"
        variant="contained"
        type={nextType}
      >
        <Typography>{nextText}</Typography>
      </Button>
    </Link>
  </StepNavButtonRoot>
);
// interface StepNavButtonProps {
//     prevText: string;
//     nextText: string;
//     prevHref: string;
//     nextHref: string;
//     nextType?: "button" | "submit" | "reset";
//   }

// export const PrevNavButton = ({ onClick, href, children }: ButtonProps) => (
//   <Link href={href || "#"} passHref>
//     <Button
//       color="secondary"
//       variant="contained"
//       sx={NavButtonStyles.prevButton}
//       onClick={onClick}
//     >
//       <Typography>{children}</Typography>
//     </Button>
//   </Link>
// );

// export const NextNavButton = ({
//   onClick,
//   href,
//   children,
//   type,
// }: ButtonProps) => (
//   <Link href={href || "#"} passHref>
//     <Button
//       color="primary"
//       variant="contained"
//       sx={NavButtonStyles.nextButton}
//       onClick={onClick}
//       type={type}
//     >
//       <Typography>{children}</Typography>
//     </Button>
//   </Link>
// );

// export const StepNavButton = ({
//   prevText,
//   nextText,
//   onPrevClick,
//   onNextClick,
//   prevHref,
//   nextHref,
//   nextType = "button",
// }: StepNavButtonProps) => (
//   <StepNavButtonRoot>
//     <PrevNavButton href={prevHref} onClick={onPrevClick}>
//       {prevText}
//     </PrevNavButton>
//     <NextNavButton href={nextHref} onClick={onNextClick} type={nextType}>
//       {nextText}
//     </NextNavButton>
//   </StepNavButtonRoot>
// );

export const ReTurnNavButton = ({ children }: ButtonProps) => {
  return (
    <Container>
      <Button>
        <Typography>{children}</Typography>
      </Button>
    </Container>
  );
};
