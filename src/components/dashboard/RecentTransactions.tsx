"use client";

import React from "react";
import { WS_TYPES } from "@/lib/data";
import { Icons } from "@/components/Icons";

const TXNS_BY_WS: any = {
  personal: [
    {
      name: "Sarah Chen",
      meta: "Monthly · Pro · 1 seat",
      amt: "+$19",
      dir: "pos",
      icon: "Card",
      tone: "violet",
      gw: "Stripe",
      tx: "txn_4Hk29Lp",
      status: "success",
    },
    {
      name: "Marcus Webb",
      meta: "Monthly · Plus · 1 seat",
      amt: "+$9",
      dir: "pos",
      icon: "Receipt",
      tone: "amber",
      gw: "PayPal",
      tx: "PAY-8XQ41B7",
      status: "success",
    },
    {
      name: "Aisha Patel",
      meta: "Plan upgrade · Plus → Pro",
      amt: "+$10",
      dir: "pos",
      icon: "Lightning",
      tone: "green",
      gw: "Stripe",
      tx: "txn_4Hk2Aj2",
      status: "success",
    },
    {
      name: "Yuki Sato",
      meta: "Refund · prorated",
      amt: "-$6",
      dir: "neg",
      icon: "Refresh",
      tone: "red",
      gw: "Stripe",
      tx: "rfn_2KqP91L",
      status: "refunded",
    },
    {
      name: "Lena Müller",
      meta: "Monthly · Plus · 1 seat",
      amt: "+$9",
      dir: "pos",
      icon: "Receipt",
      tone: "violet",
      gw: "Adyen",
      tx: "ADY-7P3Q1Z",
      status: "pending",
    },
  ],
  team: [
    {
      name: "Stripe Atlas",
      meta: "Monthly · Scale · 84 seats × $39",
      amt: "+$3,276",
      dir: "pos",
      icon: "Card",
      tone: "green",
      gw: "Stripe",
      tx: "txn_5Mn82Tq",
      status: "success",
    },
    {
      name: "Linear Inc.",
      meta: "Monthly · Growth · 32 seats × $24",
      amt: "+$768",
      dir: "pos",
      icon: "Receipt",
      tone: "violet",
      gw: "Stripe",
      tx: "txn_5Mn83Vw",
      status: "success",
    },
    {
      name: "Cal.com Team",
      meta: "Seat expansion · +6 seats",
      amt: "+$144",
      dir: "pos",
      icon: "Lightning",
      tone: "green",
      gw: "Stripe",
      tx: "txn_5Mn84Yz",
      status: "success",
    },
    {
      name: "Figma Labs",
      meta: "Refund · downgrade Scale → Growth",
      amt: "-$1,240",
      dir: "neg",
      icon: "Refresh",
      tone: "red",
      gw: "Stripe",
      tx: "rfn_3Lp02Mn",
      status: "refunded",
    },
    {
      name: "Vercel Edge",
      meta: "Monthly · Starter · 14 seats × $12",
      amt: "+$168",
      dir: "pos",
      icon: "Bank",
      tone: "blue",
      gw: "Wire",
      tx: "WIRE-9821B",
      status: "pending",
    },
  ],
  organization: [
    {
      name: "Acme Corp",
      meta: "Annual · Enterprise+ · 480 seats",
      amt: "+$512,640",
      dir: "pos",
      icon: "Card",
      tone: "green",
      gw: "Wire",
      tx: "WIRE-7714X",
      status: "success",
    },
    {
      name: "Hooli Tech",
      meta: "Monthly · Enterprise · 312 × $58",
      amt: "+$18,096",
      dir: "pos",
      icon: "Receipt",
      tone: "violet",
      gw: "Stripe",
      tx: "txn_6Op19Hk",
      status: "success",
    },
    {
      name: "Globex Inds.",
      meta: "Seat expansion · +40 seats",
      amt: "+$2,320",
      dir: "pos",
      icon: "Lightning",
      tone: "green",
      gw: "Stripe",
      tx: "txn_6Op20Lr",
      status: "success",
    },
    {
      name: "Initech LLC",
      meta: "Refund · cancellation",
      amt: "-$2,688",
      dir: "neg",
      icon: "Refresh",
      tone: "red",
      gw: "Stripe",
      tx: "rfn_4Mq11Pq",
      status: "refunded",
    },
    {
      name: "Pied Piper",
      meta: "Monthly · Business · 64 × $32",
      amt: "+$2,048",
      dir: "pos",
      icon: "Bank",
      tone: "blue",
      gw: "Adyen",
      tx: "ADY-5T8K2L",
      status: "failed",
    },
  ],
};

export function RecentTransactions() {
  const [ws, setWs] = React.useState("team");
  const I = Icons as any,
    rows = TXNS_BY_WS[ws] || TXNS_BY_WS.personal;
  const total = rows.reduce((s: number, t: any) => {
    const v = t.amt
      ? parseFloat(t.amt.replace(/[^\d.-]/g, "")) * (t.dir === "neg" ? -1 : 1)
      : 0;
    return s + v;
  }, 0);

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">Recent Transactions</h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">
            Last 24 hours · Net{" "}
            <b style={{ color: total >= 0 ? "var(--green)" : "var(--red)" }} className="font-plus-jakarta">
              {total >= 0 ? "+" : ""}${total.toLocaleString()}
            </b>
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
                      ? 'bg-primary-50 text-primary-600' 
                      : 'bg-transparent text-text-2 hover:bg-surface-2'
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
      <div
        className="px-4 pt-1 pb-4 scroll-y overflow-y-auto"
        style={{ maxHeight: 360 }}
      >
        {rows.map((t: any, i: number) => {
          const IC = I[t.icon] || I.Dashboard;
          
          const bgClass = ({ 
            green: 'bg-green-soft', 
            violet: 'bg-primary-50', 
            red: 'bg-red-soft', 
            blue: 'bg-blue-soft', 
            amber: 'bg-amber-soft' 
          } as any)[t.tone];

          const fgClass = ({ 
            green: 'text-green', 
            violet: 'text-primary-600', 
            red: 'text-red', 
            blue: 'text-blue', 
            amber: 'text-amber' 
          } as any)[t.tone];

          return (
            <div className="grid grid-cols-[28px_1fr_auto] gap-[10px] items-center py-[9px] border-b border-border-soft last:border-b-0" key={i}>
              <div className={`w-[28px] h-[28px] rounded-[7px] grid place-items-center shrink-0 ${bgClass} ${fgClass}`}>
                <IC size={14} />
              </div>
              <div className="activity-meta">
                <div className="text-[11.5px] font-medium text-text">
                  <b className="font-bold">{t.name}</b>{" "}
                  <span className={`inline-flex items-center gap-[4px] px-[7px] py-[2px] rounded-full text-[10.5px] font-bold leading-[1.4] ml-1.5 ${
                    t.status === 'success' ? 'bg-[var(--green-soft)] text-[#0E7B47] before:bg-[var(--green)]' : 
                    t.status === 'refunded' ? 'bg-[var(--blue-soft)] text-[#15539E] before:bg-[var(--blue)]' :
                    'bg-[var(--amber-soft)] text-[#97580B] before:bg-[var(--amber)]'
                  } before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full`}>
                    {t.status.charAt(0).toUpperCase() + t.status.slice(1)}
                  </span>
                </div>
                <div className="text-[10.5px] text-text-3 mt-[2px] flex flex-wrap items-center gap-[7px]">
                  {t.meta}
                  <span className="w-[3px] h-[3px] rounded-full bg-muted shrink-0"></span>
                  {t.gw}
                  <span className="w-[3px] h-[3px] rounded-full bg-muted shrink-0"></span>
                  <span
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: 10.5,
                    }}
                  >
                    {t.tx}
                  </span>
                </div>
              </div>
              <div className="font-bold text-[11.5px]">
                <span className={t.dir === "pos" ? "text-green" : "text-red"}>{t.amt}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

