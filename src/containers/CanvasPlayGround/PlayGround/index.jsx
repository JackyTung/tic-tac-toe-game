import React from "react";

import useDotAnimation from "@/hooks/useDotAnimation";

const CANVAS_SIZE = 600;

const PlayGround = () => {
  const { canvasRef } = useDotAnimation({ canvasSize: CANVAS_SIZE });

  return (
    <div>
      <canvas
        id="mycanvas"
        ref={canvasRef}
        style={{ border: "1px solid #c3c3c3" }}
        //onClick={handleClickGrid}
      />
    </div>
  );
};

export default PlayGround;
