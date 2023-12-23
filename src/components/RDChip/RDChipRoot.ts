import colors from "@/assets/theme/base/colors";
import styled from "@emotion/styled";
import { Chip } from "@mui/material";

interface RDChipRootProps {
  checked: boolean;
  colorB?: string;
    }
const {
  white,
  // text,
  transparent,
  gray,
  light,
  secondary,
  disabled,
  info,
  primary,
} = colors;
export const RDChipRoot = styled(Chip)<RDChipRootProps>`
  background-color: ${(props) => (props.checked ? primary.main : info.focus)};
  color: ${(props) => (props.checked ? white.main : "black")};

  &:hover {
    background-color: info.main;
  }
  & .MuiChip-label {
    padding: 8px 12px;
    display: inline-flex;
    width: auto;
    borderRadius:20px;
  }
`;
