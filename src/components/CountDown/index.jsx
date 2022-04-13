import React from "react";

// Start with an initial value of 20 seconds
import useCountdown from "@/hooks/useCountdown";
import { formatTimeLeft } from "@/utils/countdown";
import { StyledContainer } from "./styles";

const CountDown = () => {
  const countdown = 20;
  const { timeLeft } = useCountdown({ seconds: countdown });

  const getDashArray = () => {
    let rawTimeFraction = timeLeft / countdown;
    rawTimeFraction = rawTimeFraction - (1 / countdown) * (1 - rawTimeFraction);
    const left = Math.floor(rawTimeFraction * 283);
    console.log("left", left);
    if (left <= 0) {
      return "0 283";
    }
    return `${left} 283`;
  };

  const getColor = () => {
    const left = timeLeft / countdown;
    if (left > 1 / 2) {
      return "green";
    }

    if (left > 1 / 4) {
      return "yellow";
    }

    if (left >= 0) {
      return "red";
    }

    return "transparent";
  };

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
            <path
              id="base-timer-path-remaining"
              strokeDasharray={getDashArray()}
              className="base-timer__path-remaining"
              color={getColor()}
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
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
