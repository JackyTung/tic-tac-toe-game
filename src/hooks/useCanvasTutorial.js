import { useEffect, useRef } from "react";

const useCanvasTutorial = ({ canvasWidth, canvasHeight }) => {
  const canvasRef = useRef(null);

  const drawLine = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath(); // reset the context state
    // ctx.lineWidth
    // ctx.strokeColor
    ctx.moveTo(30, 70); // move(x,y) => start point of a line
    ctx.lineTo(300, 100); // lineTo(x,y) => end point of a line
    ctx.stroke();
  };

  const drawComplexLine = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath(); // reset the context state
    // ctx.lineWidth
    // ctx.strokeColor
    ctx.moveTo(30, 30); // move(x,y) => start point of a line
    ctx.lineTo(80, 80); // lineTo(x,y) => end point of a line
    ctx.lineTo(130, 30); // lineTo(x,y) => end point of a line
    ctx.lineTo(180, 80);
    ctx.lineTo(230, 30);
    ctx.stroke();
  };

  const drawLineJoin = () => {
    /*
      Line joins -> ctx.lineJoin = "miter|bevel|round"
    */
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath(); // reset the context state
    ctx.lineWidth = 20;
    ctx.lineJoin = "round";
    ctx.moveTo(30, 30);
    ctx.lineTo(130, 30);
    ctx.lineTo(130, 130);
    ctx.lineTo(30, 130);
    ctx.lineTo(30, 230);
    ctx.lineTo(130, 230);
    ctx.stroke();
  };

  const drawArc = () => {
    const radian = Math.PI / 180;
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    // arc (x,y, radius, startAngle, endAngle, counterClockWise)
    ctx.arc(100, 100, 50, 0 * radian, 360 * radian, false);
    ctx.stroke();
  };

  const drawRect = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.fillStyle = "blue";

    // x, y, w, h
    ctx.rect(50, 200, 100, 80); // fillRect, strokeRect
    ctx.stroke();
    ctx.fill();
  };

  const chessBoard = () => {
    const lightCellColor = "#ddb180";
    const darkCellColor = "#7c330c";
    const x = 125;
    const y = 50;
    const cellWidth = 50;
    const chessBoardWidth = 400;
    const ctx = canvasRef.current.getContext("2d");

    // Frame
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, chessBoardWidth, chessBoardWidth);

    // First row
    for (let i = 0; i < Math.floor(chessBoardWidth / cellWidth); i++) {
      for (let j = 0; j < Math.floor(chessBoardWidth / cellWidth); j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? lightCellColor : darkCellColor;
        ctx.fillRect(x + i * cellWidth, y + j * 50, cellWidth, cellWidth);
      }
    }
  };

  const drawGrid = () => {
    const ctx = canvasRef.current.getContext("2d");
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    ctx.strokeStyle = "lightgrey";
    ctx.beginPath();
    let s = 58;
    let pL = s;
    let pT = s;
    let pR = s;
    let pB = s;
    for (let x = pL; x <= width - pR; x += s) {
      ctx.moveTo(x, pT);
      ctx.lineTo(x, height - pB);
    }

    for (let y = pT; y <= height - pB; y += s) {
      ctx.moveTo(pL, y);
      ctx.lineTo(width - pR, y);
    }
    ctx.stroke();
  };

  const drawGridClear = () => {
    const ctx = canvasRef.current.getContext("2d");
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    ctx.strokeStyle = "lightgrey";
    ctx.beginPath();
    let s = 58;
    let nX = Math.floor(width / s) - 2;
    let nY = Math.floor(height / s) - 2;
    let pX = width - nX * s;
    let pY = height - nY * s;

    let pL = Math.ceil(pX / 2) - 0.5;
    let pT = Math.ceil(pY / 2) - 0.5;
    let pR = width - nX * s - pL;
    let pB = height - nY * s - pT;

    for (let x = pL; x <= width - pR; x += s) {
      ctx.moveTo(x, pT);
      ctx.lineTo(x, height - pB);
    }

    for (let y = pT; y <= height - pB; y += s) {
      ctx.moveTo(pL, y);
      ctx.lineTo(width - pR, y);
    }
    ctx.stroke();
  };

  const drawShape = (radius, inset, n) => {
    const ctx = canvasRef.current.getContext("2d");
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    ctx.beginPath();
    ctx.save();

    // translate to middle
    ctx.translate(width / 2, height / 2);
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < n; i++) {
      ctx.rotate(Math.PI / n);
      ctx.lineTo(0, 0 - radius * inset);
      ctx.rotate(Math.PI / n);
      ctx.lineTo(0, 0 - radius);
    }

    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //drawLine();
    //drawComplexLine();
    //drawLineJoin();
    //drawArc();
    //drawRect();
    //chessBoard();
    //drawGrid();
    //drawGridClear();
    drawShape(100, 0.6, 6);
  }, []);

  return {
    canvasRef,
  };
};

export default useCanvasTutorial;
