import Image from 'next/image';
import {
  styled,
  Box,
  Typography,
} from '@mui/material';
import Stopwatch from "public/icons/stopwatch.svg";
import React from 'react';
import useTimer from '@/hooks/useTimer';


const Timer = ({
  timerText,
  expiryTimestamp,
  onExpire
}: {
  timerText: string,
  expiryTimestamp: string | Date,
  onExpire?: () => void
}) => {
  const { restart, isRunning, hours, minutes, seconds } = useTimer(expiryTimestamp, onExpire);

  React.useEffect(() => {
    restart(expiryTimestamp);
  }, [expiryTimestamp]);

  return (
    isRunning &&
    <TimerRoot>
      <Image src={Stopwatch} alt="timer" width={18} height={18} />
      <Typography color="warning" variant="body2">
        {timerText} {hours}:{minutes}:{seconds}
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
