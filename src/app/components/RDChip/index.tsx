import { RDChipRoot } from "./RDChipRoot";

interface RDChipProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

export const RDChip = ({ label, checked, onClick }: RDChipProps) => {
  return <RDChipRoot label={label} checked={checked} onClick={onClick} />;
};
