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

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //drawLine();
    //drawComplexLine();
    //drawLineJoin();
    //drawArc();
    drawRect();
  }, []);

  return {
    canvasRef,
  };
};

export default useCanvasTutorial;
