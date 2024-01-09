import { useTimer as timerHook } from "react-timer-hook";
import utc2kst from "@/utils/utc2kst";

const useTimer = (
  expiryTimestamp: Date | string,
  onExpire?: () => void
  ) => {
  expiryTimestamp = utc2kst(expiryTimestamp);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = timerHook({ expiryTimestamp, onExpire: onExpire, autoStart: false });

  return {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart: (expiryTimestamp: Date | string) => restart(utc2kst(expiryTimestamp), true),
  };
};

export default useTimer;