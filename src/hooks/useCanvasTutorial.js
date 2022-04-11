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

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    //drawLine();
    drawComplexLine();
  }, []);

  return {
    canvasRef,
  };
};

export default useCanvasTutorial;
