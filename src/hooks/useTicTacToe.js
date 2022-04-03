import { useEffect, useRef, useState } from "react";

const useTicTacToe = ({ canvasSize }) => {
  const canvasRef = useRef(null);
  const gridSize = Math.floor(canvasSize / 3);

  const drawGrid = (context) => {
    for (let i = 1; i < 3; i++) {
      const x = i * gridSize;
      context.moveTo(x, 0);
      context.lineTo(x, canvasSize);
    }

    for (let i = 1; i < 3; i++) {
      const y = i * gridSize;
      context.moveTo(0, y);
      context.lineTo(canvasSize, y);
    }

    context.stroke();
  };

  const drawXO = (context) => {};

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    drawGrid(context);
  }, []);

  return {
    canvasRef,
    drawXO,
  };
};

export default useTicTacToe;
