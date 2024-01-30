import Image from 'next/image';
import {
  styled,
  Box,
  Typography,
} from '@mui/material';
import Stopwatch from "public/icons/stopwatch.svg";
import React from 'react';
import useTimer from '@/hooks/useTimer';


const Timer = ({ expiryTimestamp }: { expiryTimestamp: string | Date}) => {
  const { restart, isRunning, hours, minutes, seconds } = useTimer(expiryTimestamp);

  React.useEffect(() => {
    restart(expiryTimestamp);
  }, [expiryTimestamp]);

  return (
    isRunning &&
    <TimerRoot>
      <Image src={Stopwatch} alt="timer" width={18} height={18} />
      <Typography color="warning" variant="body2">
        선택 마감까지 {hours}:{minutes}:{seconds}
      </Typography>
    </TimerRoot>
  );
}

const TimerRoot = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: "6px",
    "&> p": {
      color: "#FF4A31",
    },
  };
});

export default Timer;
