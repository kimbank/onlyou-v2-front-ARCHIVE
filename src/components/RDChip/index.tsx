import { CSSProperties } from "react";
import { RDChipRoot } from "./RDChipRoot";

interface RDChipProps {
  label: string;
  checked: boolean;
  onClick: () => void;
  style?: CSSProperties;
  colorB?: string;
}

export const RDChip = ({ label, checked, onClick, style ,colorB}: RDChipProps) => {
  return (
    <RDChipRoot
      label={label}
      checked={checked}
      onClick={onClick}
      style={style}
      colorB={colorB}
    />
  );
};
