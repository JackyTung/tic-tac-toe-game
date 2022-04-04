import { useEffect, useRef } from "react";

const useTicTacToe = ({ canvasSize }) => {
  const canvasRef = useRef(null);
  const gridSize = Math.floor(canvasSize / 3);
  const gridArray = new Array(gridSize * gridSize);

  // useRef to prevent rerender
  const player = useRef("1");

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

  const getCanvasMousePosition = (event) => {
    const canvas = canvasRef.current;
    var rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const drawX = (gridX, gridY) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "#f1be32";
    context.lineWidth = 10;

    context.beginPath();

    const offset = 30;
    const xCordinate = gridX * gridSize;
    const yCordinate = gridY * gridSize;
    context.moveTo(xCordinate + offset, yCordinate + offset);
    context.lineTo(
      xCordinate + gridSize - offset,
      yCordinate + gridSize - offset
    );

    context.moveTo(xCordinate + offset, yCordinate + gridSize - offset);
    context.lineTo(xCordinate + gridSize - offset, yCordinate + offset);

    context.stroke();
  };

  const drawO = (gridX, gridY) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const halfSectionSize = 0.5 * gridSize;
    const xCordinate = gridX * gridSize;
    const yCordinate = gridY * gridSize;
    const centerX = xCordinate + halfSectionSize;
    const centerY = yCordinate + halfSectionSize;
    const radius = (gridSize - 50) / 2;
    const startAngle = 0 * Math.PI;
    const endAngle = 2 * Math.PI;

    context.lineWidth = 10;
    context.strokeStyle = "#01bBC2";
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.stroke();
  };

  const handleClickGrid = (event) => {
    const canvasMousePosition = getCanvasMousePosition(event);
    const gridX = Math.floor(canvasMousePosition.x / gridSize);
    const gridY = Math.floor(canvasMousePosition.y / gridSize);
    const arrayIndex = gridX + gridY * 3;
    if (gridArray[arrayIndex]) {
      return;
    }

    if (player.current === "1") {
      drawO(gridX, gridY);
      gridArray[arrayIndex] = "O";
      player.current = "2";
    } else {
      drawX(gridX, gridY);
      gridArray[arrayIndex] = "X";
      player.current = "1";
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    drawGrid(context);
  }, []);

  return {
    canvasRef,
    handleClickGrid,
  };
};

export default useTicTacToe;
