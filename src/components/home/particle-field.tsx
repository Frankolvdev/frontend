"use client";

import { useEffect, useRef } from "react";

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;

    const particles = Array.from({ length: 64 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      radius: 0.5 + Math.random() * 1.8,
      speed: 0.00008 + Math.random() * 0.00022,
      drift: Math.random() * Math.PI * 2,
      red: index % 5 === 0,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth;
      pointerY = event.clientY / window.innerHeight;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.y -= particle.speed * 16;
        particle.x += Math.sin(time * particle.speed + particle.drift) * 0.00015;

        if (particle.y < -0.03) {
          particle.y = 1.03;
          particle.x = Math.random();
        }

        const x = particle.x * width + (pointerX - 0.5) * 18 * particle.radius;
        const y = particle.y * height + (pointerY - 0.5) * 12 * particle.radius;
        const gradient = context.createRadialGradient(x, y, 0, x, y, particle.radius * 6);

        gradient.addColorStop(
          0,
          particle.red ? "rgba(255, 38, 72, .75)" : "rgba(126, 169, 255, .55)",
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, particle.radius * 6, 0, Math.PI * 2);
        context.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
