"use client";
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

const sizeMap = {
  sm: { cls: 'h-10 w-10', px: 40 },
  md: { cls: 'h-14 w-14', px: 56 },
  lg: { cls: 'h-20 w-20', px: 80 },
  xl: { cls: 'h-24 w-24', px: 96 },
};

function superellipsePath({ a = 512, b = 512, n = 5.6, steps = 128 }) {
  const pts = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const ct = Math.cos(t);
    const st = Math.sin(t);
    const x = Math.sign(ct) * a * Math.pow(Math.abs(ct), 2 / n);
    const y = Math.sign(st) * b * Math.pow(Math.abs(st), 2 / n);
    pts.push([x + a, y + b]);
  }
  const d = ['M', pts[0][0].toFixed(3), pts[0][1].toFixed(3)];
  for (let i = 1; i < pts.length; i++) d.push('L', pts[i][0].toFixed(3), pts[i][1].toFixed(3));
  d.push('Z');
  return d.join(' ');
}

export default function AppIcon({ size = 'sm', className = '' }) {
  const { resolvedTheme } = useTheme();
  const [supportsSquircle, setSupportsSquircle] = useState(false);
  const src = resolvedTheme === 'dark'
    ? '/RideMate-iOS-Dark-1024x1024@1x.png'
    : '/RideMate-iOS-Default-1024x1024@1x.png';

  useEffect(() => {
    try {
      // Prefer native CSS squircle if supported by the browser
      const ok = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('corner-shape: squircle');
      setSupportsSquircle(!!ok);
    } catch (_) {
      setSupportsSquircle(false);
    }
  }, []);

  const pathD = useMemo(() => superellipsePath({ n: 5.6 }), []);
  const conf = sizeMap[size] || sizeMap.sm;
  const widthPx = conf.px;

  if (supportsSquircle) {
    // Native CSS squircle path (user-provided formula)
    return (
      <div
        className={`relative overflow-hidden ring-1 ring-black/5 dark:ring-white/10 ${className}`}
        style={{
          // Use a fixed pixel width to match the Tailwind size and make the math deterministic
          ['--width']: `${widthPx}px`,
          width: 'var(--width)',
          aspectRatio: '1 / 1',
          // Native squircle rounding; browsers that support it will render Apple-like corners
          cornerShape: 'squircle',
          borderRadius: 'calc((var(--width) / 2) * 44.53125)',
          background: resolvedTheme === 'dark' ? '#0b1220' : '#ffffff',
        }}
        aria-label="RideMate App Icon"
      >
        <img
          src={src}
          alt="RideMate App Icon"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: 'scale(1.03)', transformOrigin: 'center' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5" />
      </div>
    );
  }

  // Fallback: SVG superellipse clip that closely matches Apple squircle
  return (
    <div
      className={`relative overflow-hidden ${conf.cls} aspect-square ${className}`}
      aria-label="RideMate App Icon"
    >
      <svg viewBox="0 0 1024 1024" className="absolute inset-0 h-full w-full" role="img" aria-label="RideMate App Icon">
        <defs>
          <clipPath id="clip-squircle" clipPathUnits="userSpaceOnUse">
            <path d={pathD} />
          </clipPath>
          <linearGradient id="shine-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={resolvedTheme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.25)'} />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <g clipPath="url(#clip-squircle)">
          <rect width="1024" height="1024" fill={resolvedTheme === 'dark' ? '#0b1220' : '#ffffff'} />
          <image
            href={src}
            width="1024"
            height="1024"
            preserveAspectRatio="xMidYMid slice"
            transform="translate(512 512) scale(1.01) translate(-512 -512)"
          />
          <rect width="1024" height="1024" fill="url(#shine-grad)" />
        </g>
        <path d={pathD} fill="none" stroke={resolvedTheme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'} strokeWidth="2" />
      </svg>
    </div>
  );
}
