import React from "react";

import useCanvasTutorial from "@/hooks/useCanvasTutorial";
import { StyledContainer } from "./styles";
const CanvasTutorial = () => {
  const { canvasRef } = useCanvasTutorial({
    canvasWidth: 650,
    canvasHeight: 500,
  });
  return (
    <StyledContainer>
      <canvas
        id="mycanvas"
        ref={canvasRef}
        style={{ border: "1px solid #c3c3c3" }}
      />
    </StyledContainer>
  );
};

export default CanvasTutorial;
