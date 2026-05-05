"use client";

import React from "react";
import { WS_DATA, WS_TYPES } from "@/lib/data";
import { Icons } from "@/components/Icons";

export function CustomerLTV() {
  const [ws, setWs] = React.useState("team");
  const d = (WS_DATA as any)[ws];
  const ltv = Math.round((d.mrr / d.workspaces) * 24);
  const cac = Math.round(ltv * 0.18);
  const payback = (cac / (d.mrr / d.workspaces)).toFixed(1);
  const ratio = (ltv / cac).toFixed(1);

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">
            Lifetime Value
          </h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">
            LTV / CAC efficiency
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
      <div className="px-4 pt-[10px] pb-4">
        <div className="flex items-baseline gap-[6px] mb-1">
          <div className="text-[24px] font-bold tracking-[-0.01em] text-[var(--text)] font-plus-jakarta">
            ${ltv.toLocaleString()}
          </div>
          <span className="inline-flex items-center gap-[3px] font-bold text-[11px] text-[var(--green)]">
            <Icons.ArrowUp size={10} />
            +9.4%
          </span>
        </div>
        <div className="text-[10.5px] text-[var(--text-3)] mb-3.5">
          Avg per workspace · 24-mo projection
        </div>

        <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
          <span className="text-[10.5px]">Avg. acquisition cost</span>
          <b className="text-[var(--text)] font-bold text-[11.5px]">
            ${cac.toLocaleString()}
          </b>
        </div>

        <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
          <span>LTV : CAC ratio</span>
          <b className="text-[var(--green)] font-bold text-[11.5px]">
            {ratio}×
          </b>
        </div>

        <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] border-b border-dashed border-border-soft">
          <span>Payback period</span>
          <b className="text-[var(--text)] font-bold text-[11.5px]">
            {payback} mo
          </b>
        </div>

        <div className="text-[10.5px] text-[var(--text-3)] flex justify-between gap-2 py-[5px] last:border-b-0">
          <span>Expansion revenue</span>
          <b className="text-[var(--green)] font-bold text-[11.5px]">+12.4%</b>
        </div>
      </div>
    </div>
  );
}
