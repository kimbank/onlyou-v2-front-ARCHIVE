"use client";

import { Select, MenuItem, FormControl } from "@mui/material";
import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import { Slider } from "@mui/material";
import { Radio } from "@mui/material";

const placeholder = "선택하세요";
const options = ["op1", "op2", "op3"];

export function TextInput({ buttonName, placeholder, setValue, disabled = false }) {
  return (
      <Container disableGutters sx={{
          display: 'grid',
          gap: 1
      }}>
          <Typography className='input-title'>
          {buttonName}
          </Typography>
          <Input placeholder={placeholder} onChange={(e) => setValue(e.target.value)} disabled={disabled} />
      </Container>
  );
}
