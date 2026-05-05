"use client";

import React from "react";
import { WS_DATA, WS_TYPES } from "@/lib/data";

export function RevenueChart() {
  const [ws, setWs] = React.useState("team");
  const d = (WS_DATA as any)[ws];
  const months = [
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
  ];
  const mrr = d.series,
    newRev = mrr.map((v: number, i: number) => Math.round(v * 0.16 + i * 0.4));
  const W = 720,
    H = 240,
    P = { l: 50, r: 16, t: 14, b: 44 };
  const iW = W - P.l - P.r,
    iH = H - P.t - P.b,
    max = Math.max(...mrr) * 1.15;
  const xa = (i: number) => P.l + (i / (months.length - 1)) * iW,
    ya = (v: number) => P.t + iH - (v / max) * iH;
  const lp = (a: number[]) =>
    a
      .map((v, i) => `${i ? "L" : "M"} ${xa(i).toFixed(1)} ${ya(v).toFixed(1)}`)
      .join(" ");
  const ap = (a: number[]) =>
    `${lp(a)} L ${xa(a.length - 1)} ${P.t + iH} L ${P.l} ${P.t + iH} Z`;
  const ticks = [0, max * 0.25, max * 0.5, max * 0.75, max];

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between pt-[12px] px-[16px] pb-[8px] gap-[10px]">
        <div>
          <h3 className="m-0 font-plus-jakarta text-[13px] font-semibold tracking-[-0.005em]">
            Recurring Revenue Trend
          </h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">
            Monthly recurring + new revenue · last 12 months
          </div>
        </div>
        <div className="flex items-center gap-[14px]">
          <div className="flex items-center gap-[14px]">
            <div className="flex items-center gap-[6px] text-[11px] font-medium text-[var(--text-2)]">
              <span className="w-[8px] h-[8px] rounded-[2px]" style={{ background: "#4F46E5" }}></span>
              Recurring
            </div>
            <div className="flex items-center gap-[6px] text-[11px] font-medium text-[var(--text-2)]">
              <span className="w-[8px] h-[8px] rounded-[2px]" style={{ background: "#15BD6D" }}></span>
              New
            </div>
          </div>
          <div
            style={{ width: 0.5, height: 22, background: "var(--border)" }}
          ></div>
          <div className="inline-flex items-center bg-white border border-[var(--border)] rounded-[10px] p-[3px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] gap-[2px]">
            {(Object.entries(WS_TYPES) as [string, any][]).map(
              ([key, type]) => (
                <button
                  key={key}
                  className={`h-[22px] px-[8px] text-[10.5px] font-semibold rounded-[7px] cursor-pointer inline-flex items-center gap-[6px] transition-colors duration-140 ${
                    ws === key
                      ? "bg-primary-50 text-primary-600"
                      : "bg-transparent text-[var(--text-2)] hover:bg-surface-2"
                  }`}
                  onClick={() => setWs(key as any)}
                >
                  {type.short}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="p-[4px_5px_5px] relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ display: "block", maxHeight: 260 }}
        >
          <defs>
            <linearGradient id="mf" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nf" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#15BD6D" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#15BD6D" stopOpacity="0" />
            </linearGradient>
          </defs>
          {ticks.map((v, i) => (
            <g key={i}>
              <line
                x1={P.l}
                x2={W - P.r}
                y1={ya(v)}
                y2={ya(v)}
                stroke="#EFF1F5"
                strokeDasharray="3 4"
              />
              <text
                x={P.l - 6}
                y={ya(v) + 3}
                fontSize="11"
                fill="#8A8F9C"
                textAnchor="end"
              >
                ${Math.round(v)}k
              </text>
            </g>
          ))}
          {months.map((m, i) => (
            <text
              key={m}
              x={xa(i)}
              y={H - 16}
              fontSize="11.5"
              fill="#8A8F9C"
              textAnchor="middle"
            >
              {m}
            </text>
          ))}
          <path d={ap(mrr)} fill="url(#mf)" />
          <path d={ap(newRev)} fill="url(#nf)" />
          <path
            d={lp(mrr)}
            fill="none"
            stroke="#4F46E5"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d={lp(newRev)}
            fill="none"
            stroke="#15BD6D"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {(() => {
            const i = mrr.length - 1,
              v = mrr[i];
            return (
              <g>
                <circle
                  cx={xa(i)}
                  cy={ya(v)}
                  r="4.5"
                  fill="white"
                  stroke="#4F46E5"
                  strokeWidth="2"
                />
                <rect
                  x={xa(i) - 116}
                  y={ya(v) - 40}
                  width="112"
                  height="32"
                  rx="7"
                  fill="#1E2230"
                />
                <text
                  x={xa(i) - 60}
                  y={ya(v) - 25}
                  fontSize="9"
                  fill="#B6BCC9"
                  textAnchor="middle"
                >
                  Apr Recurring
                </text>
                <text
                  x={xa(i) - 60}
                  y={ya(v) - 12}
                  fontSize="12"
                  fontWeight="700"
                  fill="white"
                  textAnchor="middle"
                >
                  ${v}k
                </text>
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}
