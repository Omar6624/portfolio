// "use client";

// import { useEffect, useRef } from "react";

// export default function Background() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     canvas.width = width;
//     canvas.height = height;

//     // Example animation (particles)
//     let particles: { x: number; y: number; vx: number; vy: number }[] = [];

//     for (let i = 0; i < 100; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: Math.random() * 2 - 1,
//         vy: Math.random() * 2 - 1,
//       });
//     }
//   }, []);

//   return <canvas ref={canvasRef} className="" />;
// }
