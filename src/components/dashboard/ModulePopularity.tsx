"use client";

import React from "react";
import { WS_DATA, WS_TYPES } from "@/lib/data";

export function ModulePopularity() {
  const [ws, setWs] = React.useState("team");
  const d = (WS_DATA as any)[ws];

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] flex flex-col h-full">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">
            Module Popularity
          </h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">
            Adoption rate across {(WS_TYPES as any)[ws].name.toLowerCase()}{" "}
            workspaces
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
      <div className="px-4 pt-1 pb-4 flex flex-col flex-1">
        <div className="flex flex-col">
          {d.modules.map((m: any) => (
            <div className="flex items-center gap-[10px] py-[7px]" key={m.name}>
              <div className="w-[110px] text-[11.5px] font-semibold shrink-0 text-text">
                {m.name}
              </div>
              <div className="flex-1 h-[7px] bg-[var(--surface-2)] rounded-[4px] overflow-hidden">
                <span
                  className="block h-full rounded-[4px]"
                  style={{ width: m.pct + "%", background: m.color }}
                ></span>
              </div>
              <div className="text-[10.5px] font-bold text-[var(--text-2)] w-[38px] text-right">
                {m.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
