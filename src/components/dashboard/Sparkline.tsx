'use client';

import React from 'react';

export function Sparkline({ data, color = '#4F46E5', w = 56, h = 22 }: any) {
  if (!data?.length) return null;
  const mn = Math.min(...data), mx = Math.max(...data), r = mx - mn || 1, sx = w / (data.length - 1);
  const pts = data.map((v: number, i: number) => `${i * sx},${h - (v - mn) / r * (h - 4) - 2}`).join(' ');
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" points={pts} />
      <circle cx={(data.length - 1) * sx} cy={h - (data[data.length - 1] - mn) / r * (h - 4) - 2} r="2" fill={color} />
    </svg>
  );
}
