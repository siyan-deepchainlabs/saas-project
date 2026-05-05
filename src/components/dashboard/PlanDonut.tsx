"use client";

import React from "react";
import { WS_DATA, WS_TYPES } from "@/lib/data";

const money = (n: number) =>
  n >= 1e6
    ? `$${(n / 1e6).toFixed(2)}M`
    : n >= 1e3
      ? `$${(n / 1e3).toFixed(1)}k`
      : `$${n}`;

export function PlanDonut() {
  const [ws, setWs] = React.useState("team");
  const d = (WS_DATA as any)[ws],
    plans = d.plans,
    total = plans.reduce((s: number, p: any) => s + p.mrr, 0) || 1;
  const R = 46,
    cx = 58,
    cy = 58,
    st = 13,
    C = 2 * Math.PI * R;
  let acc = 0;

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] flex flex-col h-full">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">
            Subscription Mix
          </h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">
            Revenue split by plan tier
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
      <div className="px-4 py-3 flex-1">
        <div className="flex flex-row items-center gap-[30px] p-[0px_8px_4px_4px]">
          <div className="relative w-[168px] h-[168px] shrink-0">
            <svg width="100%" height="100%" viewBox="0 0 116 116">
              <circle
                cx={cx}
                cy={cy}
                r={R}
                fill="none"
                stroke="#EFF1F5"
                strokeWidth={st}
              />
              {plans.map((p: any) => {
                const ln = (p.mrr / total) * C,
                  off = -acc;
                acc += ln;
                return (
                  <circle
                    key={p.id}
                    cx={cx}
                    cy={cy}
                    r={R}
                    fill="none"
                    stroke={p.color}
                    strokeWidth={st}
                    strokeDasharray={`${ln} ${C - ln}`}
                    strokeDashoffset={off}
                    transform={`rotate(-90 ${cx} ${cy})`}
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
              <div className="font-plus-jakarta font-bold text-[20px] tracking-[-0.01em] text-[var(--text)]">
                {money(total)}
              </div>
              <div className="text-[10.5px] text-[var(--text-3)] mt-1 font-medium">
                Monthly
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            {plans.map((p: any) => (
              <div
                className="grid grid-cols-[10px_1fr_auto] items-center gap-2 text-[11px] py-[5px] border-b border-dashed border-border-soft last:border-b-0"
                key={p.id}
              >
                <span
                  className="w-[9px] h-[9px] rounded-[2px]"
                  style={{ background: p.color }}
                ></span>
                <div>
                  <div className="font-semibold text-[11.5px] text-[var(--text)]">
                    {p.name}
                  </div>
                  <div className="text-[10.5px] text-[var(--text-3)] mt-px font-medium">
                    {p.count.toLocaleString()} subs · ${p.ppm}/u/mo
                  </div>
                </div>
                <div className="font-bold text-[11.5px] text-[var(--text)]">
                  {money(p.mrr)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
