"use client";

const sizeMap = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
  xl: 'h-24 w-24',
};

export default function AppIcon({ size = 'sm', className = '' }) {
  const src = '/RideMate-iOS-Default-1024x1024@1x.png';
  const sizeClass = sizeMap[size] || sizeMap.sm;

  return (
    <img
      src={src}
      alt="RideMate App Icon"
      className={`${sizeClass} ${className}`}
    />
  );
}
