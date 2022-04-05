import { useEffect, useRef } from "react";

const MAX_RADIUS = 60;
const MIN_RADIUS = 5;

const useDotAnimation = ({ canvasWidth, canvasHeight }) => {
  const canvasRef = useRef(null);
  //let x = 200;
  //let y = 200;
  //let dx = 4;
  //let dy = 4;
  //let radius = 30;
  const circleArray = [];
  const colorArray = ["#ffaa33", "#99ffaa", "#00ff00", "#4411aa"];
  const mouse = {
    x: undefined,
    y: undefined,
  };

  const drawO = (x, y, radius, color) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  };

  function Circle(x, y, dx, dy, radius) {
    const canvas = canvasRef.current;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {
      drawO(this.x, this.y, this.radius, this.color);
    };

    this.update = function () {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50 &&
        this.radius < MAX_RADIUS
      ) {
        this.radius += 1;
      } else if (this.radius > MIN_RADIUS) {
        this.radius -= 1;
      }

      this.draw();
    };
  }

  /*
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
  */

  const initCircles = () => {
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      const dx = Math.random() - 0.5;
      const dy = Math.random() - 0.5;
      const radius = 30;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }
  };

  const updateCircles = () => {
    requestAnimationFrame(updateCircles);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let circle of circleArray) {
      circle.update();
    }
  };

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    //drawO();
    // animate();

    initCircles();
    updateCircles();
  }, []);

  return {
    canvasRef,
    handleMouseMove,
  };
};

export default useDotAnimation;
