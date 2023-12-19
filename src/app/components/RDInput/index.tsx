import { FC, forwardRef } from "react";

import { Box, Input, Typography } from "@mui/material";

const RDInput: FC<any> = forwardRef(({ label, placeholder, ...props }, ref) => (
  <Box>
    <Typography variant="body2" sx={{ mb: 1, color: "#000000" }}>
      {label}
    </Typography>
    <Input placeholder={placeholder} {...props} ref={ref} />
  </Box>
));

RDInput.displayName = "RDInput";
export default RDInput;
