"use client";

import colors from "@/assets/theme/base/colors";
import { FormControlLabel, Radio, styled, Typography } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

interface option {
  id?: string;
  label?: string;
  value?: string;
}

interface optionsProps {
  options: option[];
  onChange: (value: string) => void;
}
const { primary, primary_lighten3, gray4, gray5 } = colors;

const RDRadioInput = ({ options, onChange }: optionsProps) => {
  const [selectedValue, setSelectedValue] = useState("");

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
        <LabelRoot
          key={index}
          className="radio-box"
          value={option.value}
          checked={selectedValue === option.value}
          control={<Radio />}
          label={
            <Typography variant="body1" className="typography-label">
              {option.label}
            </Typography>
          }
        />
      ))}
    </RadioGroup>
  );
};

export default RDRadioInput;

const LabelRoot = styled(FormControlLabel)(({ theme, checked }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "24px",
  marginBottom: "2px",
  marginLeft: 0,
  marginRight: 0,
  border: checked ? `1px solid ${primary}` : `1px solid ${gray4}`,
  borderRadius: "6px",
  backgroundColor: checked ? primary_lighten3 : "transparent",
  "&:hover": {
    backgroundColor: gray5,
  },
  "&:focus, &:focus-within": {
    backgroundColor: checked
      ? `${primary_lighten3} !important`
      : `${gray5} !important`,
    outline: `2px solid ${gray5} !important`,
  },
}));
