import Image from 'next/image';
import {
  Box,
  Typography,
} from '@mui/material';
import Stopwatch from "public/icons/stopwatch.svg";


const Timer = () => {

  return (
    <Box>
      <Image src={Stopwatch} alt="timer" width={18} height={18} />
      <Typography color="warning" variant="body2">
        선택 마감까지 99:99:99
      </Typography>
    </Box>
  );
}

export default Timer;
