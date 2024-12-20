import * as React from 'react';
import Backdrop, { BackdropProps } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop(props: BackdropProps) {

  return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        {...props}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  );
}