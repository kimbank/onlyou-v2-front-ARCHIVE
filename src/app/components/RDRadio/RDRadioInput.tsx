import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { StyledFormControlLabel } from "./RDRadioRoot";

interface option {
  value: string;
  label: string;
}

interface optionsProps {
  options: option[];
}

const RDRadioInput = ({ options }: optionsProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup value={selectedValue} onChange={handleChange}>
      {options.map((option, index) => (
        <StyledFormControlLabel
          key={index}
          className="radio-box"
          value={option.value}
          checked={selectedValue === option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default RDRadioInput;
