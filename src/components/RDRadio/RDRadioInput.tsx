import { Radio, Typography } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { StyledFormControlLabel } from "./RDRadioRoot";

interface option {
  id?: string;
  label?: string;
  value?: string;
}

interface optionsProps {
  options: option[];
  onChange: (value: string) => void;
}

const RDRadioInput = ({ options, onChange }: optionsProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  console.log("selectedValue", selectedValue);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <RadioGroup
      value={selectedValue}
      onChange={handleChange}
      sx={{ gap: "8px" }}
    >
      {options.map((option, index) => (
        <StyledFormControlLabel
          key={index}
          className="radio-box"
          value={option.value}
          checked={selectedValue === option.value}
          control={<Radio />}
          label={
            <Typography variant="body1" sx={{ paddingRight: "8px" }}>
              {option.label}
            </Typography>
          }
        />
      ))}
    </RadioGroup>
  );
};

export default RDRadioInput;
