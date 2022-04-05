import { useEffect, useRef } from "react";

const useDotAnimation = ({ canvasSize }) => {
  const canvasRef = useRef(null);

  const drawO = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvasSize;
      const y = Math.random() * canvasSize;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    drawO();
  }, []);

  return {
    canvasRef,
  };
};

export default useDotAnimation;
