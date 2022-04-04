import React from "react";

const TicTacToe = ({ canvasRef, handleClickGrid }) => {
  return (
    <div>
      <canvas
        id="mycanvas"
        ref={canvasRef}
        style={{ border: "1px solid #c3c3c3" }}
        onClick={handleClickGrid}
      />
    </div>
  );
};

export default TicTacToe;
