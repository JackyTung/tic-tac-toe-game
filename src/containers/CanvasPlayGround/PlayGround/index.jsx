import React from "react";

import useDotAnimation from "@/hooks/useDotAnimation";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 450;

const PlayGround = () => {
  const { canvasRef, handleMouseMove } = useDotAnimation({
    canvasWidth: CANVAS_WIDTH,
    canvasHeight: CANVAS_HEIGHT,
  });

  return (
    <div>
      <canvas
        id="mycanvas"
        ref={canvasRef}
        style={{ border: "1px solid #c3c3c3" }}
        //onClick={handleClickGrid}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
};

export default PlayGround;
