import { useEffect, useRef } from "react";

const useDotAnimation = ({ canvasWidth, canvasHeight }) => {
  const canvasRef = useRef(null);
  let x = 200;
  let y = 200;
  let dx = 4;
  let dy = 4;
  let radius = 30;

  const drawO = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx;
    }

    if (y + radius > canvas.height || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    //drawO();
    animate();
  }, []);

  return {
    canvasRef,
  };
};

export default useDotAnimation;
