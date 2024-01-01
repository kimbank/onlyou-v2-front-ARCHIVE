import colors from "@/assets/theme/base/colors";
import styled from "@emotion/styled";
import { Chip } from "@mui/material";

interface RDChipRootProps {
  checked: boolean;
  colorB?: string;
    }
const { white, gray5, primary, primary_lighten3 } = colors;
export const RDChipRoot = styled(Chip)<RDChipRootProps>`
  background-color: ${(props) => (props.checked ? primary?.main : gray5)};
  color: ${(props) => (props.checked ? white : "black")};

  &:hover {
    background-color: primary_lighten3;
  }
  & .MuiChip-label {
    padding: 8px 12px;
    display: inline-flex;
    width: auto;
    borderradius: 20px;
  }
`;
