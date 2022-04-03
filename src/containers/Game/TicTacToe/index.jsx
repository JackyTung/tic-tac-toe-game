import React from "react";

import useTicTacToe from "@/hooks/useTicTacToe";

const CANVAS_SIZE = 360;

const TicTacToe = () => {
  const { canvasRef } = useTicTacToe({
    canvasSize: CANVAS_SIZE,
  });
  return (
    <div>
      <canvas
        id="mycanvas"
        ref={canvasRef}
        style={{ border: "1px solid #c3c3c3" }}
      />
    </div>
  );
};

export default TicTacToe;
