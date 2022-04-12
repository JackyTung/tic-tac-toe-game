import { useEffect, useState } from "react";

const useCountdown = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    if (timeLeft <= 0) {
      setDelay(null);
    }
    if (delay !== null) {
      const intervalId = setInterval(() => {
        setTimeLeft((t) => (t > 0 ? t - 1 : 0));
      }, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay, timeLeft]);

  return {
    timeLeft,
  };
};

export default useCountdown;
