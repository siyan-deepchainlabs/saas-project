"use client";

import React from "react";
import { WS_DATA, WS_TYPES } from "@/lib/data";

export function SubscriptionCount() {
  const [ws, setWs] = React.useState("team");
  const d = (WS_DATA as any)[ws],
    max = Math.max(...d.plans.map((p: any) => p.count)),
    tot = d.plans.reduce((s: number, p: any) => s + p.count, 0);

  return (
    <div className="bg-(--surface) border border-(--border) rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between pt-[12px] px-[16px] pb-[8px] gap-[10px]">
        <div>
          <h3 className="m-0 font-plus-jakarta text-[13px] font-semibold tracking-[-0.005em]">
            Subscription Count
          </h3>
          <div className="text-(--text-3) text-[10.5px] mt-[2px] font-medium">
            {tot.toLocaleString()} active subscriptions
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="inline-flex items-center bg-white border border-(--border) rounded-[10px] p-[3px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] gap-[2px]">
            {(Object.entries(WS_TYPES) as [string, any][]).map(
              ([key, type]) => (
                <button
                  key={key}
                  className={`h-[22px] px-[8px] text-[10.5px] font-semibold rounded-[7px] cursor-pointer inline-flex items-center gap-[6px] transition-colors duration-140 ${
                    ws === key
                      ? "bg-(--primary-50) text-(--primary-600)"
                      : "bg-transparent text-(--text-2) hover:bg-(--surface-2)"
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
      <div className="p-[10px_16px_16px]">
        {d.plans.map((p: any) => (
          <div
            className="grid grid-cols-[32px_1fr_auto] items-center gap-[10px] py-[8px] border-b border-dashed border-(--border-soft) last:border-b-0"
            key={p.id}
          >
            <div
              className="w-[32px] h-[32px] rounded-[8px] grid place-items-center font-bold text-[11px] font-plus-jakarta"
              style={{ background: p.color + "22", color: p.color }}
            >
              {p.name.slice(0, 1)}
            </div>
            <div>
              <div className="font-semibold text-[12px]">
                {p.name}{" "}
                <span className="text-(--text-3) font-medium">
                  · ${p.ppm}/u/mo
                </span>
              </div>
              <div className="h-[5px] rounded-[3px] bg-(--surface-2) overflow-hidden mt-[5px] w-full">
                <span
                  className="block h-full rounded-[3px]"
                  style={{
                    width: (p.count / max) * 100 + "%",
                    background: p.color,
                  }}
                ></span>
              </div>
            </div>
            <div className="text-right font-bold text-[12px]">
              {p.count.toLocaleString()}
              <span className="block text-(--text-3) text-[10.5px] font-medium mt-[2px]">
                {((p.count / tot) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
