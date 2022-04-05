import React from "react";

import PlayGround from "./PlayGround/index.jsx";
import { StyledContent, StyledTitle } from "./styles";

const CanvasPlayGround = () => {
  return (
    <div>
      <StyledTitle>Canvas play ground</StyledTitle>
      <StyledContent>
        <PlayGround />
      </StyledContent>
    </div>
  );
};

export default CanvasPlayGround;
