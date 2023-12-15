import { FC, forwardRef, ReactNode } from "react";

import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { RadioGroup } from "@mui/material";
interface RDRadioProps {
  name?: string;
  children?: ReactNode;
}

const RDRadio: FC<RDRadioProps> = forwardRef(
  ({ children, name, ...props }, ref) => (
    <RadioGroup name={name}>{children}</RadioGroup>
  )
);
RDRadio.displayName = "RDRadio";
export default RDRadio;
