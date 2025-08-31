"use client";
import { useRef } from 'react';

export default function Tilt({ children, className = '', max = 12, scale = 1.02 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * (max * 2);
    const ry = (0.5 - px) * (max * 2);
    el.style.transform = `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      className={className}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transition: 'transform 150ms ease-out', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
