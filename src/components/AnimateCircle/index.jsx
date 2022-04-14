import React from "react";

import { StyledContainer, StyledMultCircleContainer } from "./styles";

const AnimateCircle = () => {
  const handleClick = (e) => {
    e.target.style.fill = "red";
  };
  return (
    <StyledContainer>
      <svg viewBox="0 0 100 100">
        <circle fill="blue" cx="50" cy="50" r="40" onClick={handleClick} />
      </svg>
    </StyledContainer>
  );
};

export const AnimateMultiCircle = () => {
  return (
    <StyledMultCircleContainer>
      <svg width="800px" height="300px" viewBox="0 0 800 100">
        <circle className="shape" />
        <circle className="shape" />
        <circle className="shape" />
        <circle className="shape" />
        <circle className="shape" />
      </svg>
    </StyledMultCircleContainer>
  );
};

export default AnimateCircle;
