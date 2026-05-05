"use client";

import React from "react";
import { WS_DATA, WS_TYPES } from "@/lib/data";
import { Icons } from "@/components/Icons";

const money = (n: number) =>
  n >= 1e6
    ? `$${(n / 1e6).toFixed(2)}M`
    : n >= 1e3
      ? `$${(n / 1e3).toFixed(1)}k`
      : `$${n}`;

export function RenewalRate() {
  const [ws, setWs] = React.useState("team");
  const d = (WS_DATA as any)[ws],
    pct = d.renewal;
  const R = 44,
    cx = 55,
    cy = 55,
    st = 11,
    C = 2 * Math.PI * R,
    ln = (pct / 100) * C;

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">
            Renewal Rate
          </h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">
            Subscription renewal performance
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="inline-flex items-center bg-white border border-border rounded-[10px] p-[3px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] gap-[2px]">
            {(Object.entries(WS_TYPES) as [string, any][]).map(
              ([key, type]) => (
                <button
                  key={key}
                  className={`h-[22px] px-2 text-[10.5px] font-semibold rounded-[7px] cursor-pointer inline-flex items-center gap-[6px] transition-all duration-140 ${
                    ws === key
                      ? "bg-primary-50 text-primary-600"
                      : "bg-transparent text-text-2 hover:bg-surface-2"
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
      <div className="px-4 pt-[18px] pb-4">
        <div className="grid grid-cols-[140px_1fr] gap-3.5 items-center py-2 pb-2.5">
          <svg width="140" height="140" viewBox="0 0 110 110">
            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="#EFF1F5"
              strokeWidth={st}
            />
            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="#4F46E5"
              strokeWidth={st}
              strokeDasharray={`${ln} ${C - ln}`}
              transform={`rotate(-90 ${cx} ${cy})`}
              strokeLinecap="round"
            />
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dy="2"
              fontSize="20"
              fontWeight="700"
              fill="var(--text)"
              fontFamily="var(--font-plus-jakarta)"
            >
              {pct.toFixed(1)}%
            </text>
            <text
              x={cx}
              y={cy + 14}
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-3)"
              fontFamily="var(--font-plus-jakarta)"
            >
              Renewed
            </text>
          </svg>
          <div>
            <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
              <span>Renewed this month</span>
              <b className="text-[var(--text)] font-bold text-[11.5px]">
                {Math.round((d.workspaces * pct) / 100).toLocaleString()}
              </b>
            </div>
            <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
              <span>Pending renewal</span>
              <b className="text-[var(--text)] font-bold text-[11.5px]">
                {Math.round(d.workspaces * 0.04).toLocaleString()}
              </b>
            </div>
            <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
              <span>Cancelled</span>
              <b className="text-[var(--red)] font-bold text-[11.5px]">
                {Math.round(d.workspaces * (1 - pct / 100)).toLocaleString()}
              </b>
            </div>
            <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
              <span>Avg renewal value</span>
              <b className="text-[var(--text)] font-bold text-[11.5px]">
                {money(Math.round((d.mrr / d.workspaces) * 12))}
              </b>
            </div>
            <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] last:border-b-0">
              <span>Net Revenue Retention</span>
              <b className="text-[var(--green)] font-bold text-[11.5px]">
                112.4%
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
