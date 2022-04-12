import React from "react";

// Start with an initial value of 20 seconds
import useCountdown from "@/hooks/useCountdown";
import { formatTimeLeft } from "@/utils/countdown";
import { StyledContainer } from "./styles";

const CountDown = () => {
  const { timeLeft } = useCountdown({ seconds: 20 });

  return (
    <StyledContainer>
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
          {formatTimeLeft(timeLeft)}
        </span>
      </div>
    </StyledContainer>
  );
};

export default CountDown;
