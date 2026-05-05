'use client';

import React from 'react';
import { Icons } from '@/components/Icons';
import { WS_DATA } from '@/lib/data';
import { Sparkline } from './Sparkline';

const money = (n: number) => n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(1)}k` : `$${n}`;

function KpiCard({ label, value, unit, delta, dir, vs, ic, tone, spark, sc }: any) {
  const I = Icons as any;
  const IC = I[ic] || I.Dashboard;
  
  const bgClass = ({ 
    violet: 'bg-[var(--primary-50)]', 
    green: 'bg-[var(--green-soft)]', 
    blue: 'bg-[var(--blue-soft)]', 
    purple: 'bg-[var(--purple-soft)]', 
    amber: 'bg-[var(--amber-soft)]' 
  } as any)[tone];

  const fgClass = ({ 
    violet: 'text-[var(--primary-600)]', 
    green: 'text-[var(--green)]', 
    blue: 'text-[var(--blue)]', 
    purple: 'text-[var(--purple)]', 
    amber: 'text-[var(--amber)]' 
  } as any)[tone];

  return (
    <div className="bg-surface border border-border rounded-[12px] p-[14px_16px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] flex flex-col gap-2 relative overflow-hidden [.density-compact_&]:p-[11px_13px]">
      <div className="flex items-center justify-between">
        <div className="text-[var(--text-2)] text-[11.5px] font-semibold">{label}</div>
        <div className={`w-[30px] h-[30px] rounded-[8px] grid place-items-center ${bgClass} ${fgClass}`}>
          <IC size={15} />
        </div>
      </div>
      <div className="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] text-[var(--text)] font-plus-jakarta [.density-compact_&]:text-[19px]">
        {value}{unit && <span className="text-[13px] text-[var(--text-3)] font-semibold ml-[2px] font-sans"> {unit}</span>}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <span className={`inline-flex items-center gap-[3px] text-[10.5px] font-bold ${dir === 'up' ? 'text-[var(--green)]' : 'text-[var(--red)]'}`}>
            {dir === 'up' ? <Icons.ArrowUp size={10} /> : <Icons.ArrowDown size={10} />}
            {delta}
          </span>
          <span className="text-[var(--text-3)] text-[10.5px]"> &nbsp;{vs}</span>
        </div>
        <Sparkline data={spark} color={sc} />
      </div>
    </div>
  );
}

export function KpiRow() {
  const all = ['personal', 'team', 'organization'].map((k) => (WS_DATA as any)[k]);
  const sumMrr = all.reduce((s, d) => s + d.mrr, 0);
  const sumArr = all.reduce((s, d) => s + d.arr, 0);
  const sumWs = all.reduce((s, d) => s + d.workspaces, 0);
  const wAvg = all.reduce((s, d) => s + d.churn * d.workspaces, 0) / sumWs;
  const series = (WS_DATA as any).team.series.map((v: number, i: number) => v + (WS_DATA as any).personal.series[i] + (WS_DATA as any).organization.series[i]);
  
  return (
    <div className="grid grid-cols-5 gap-[18px] mb-[18px]">
      <KpiCard label="Monthly Recurring Revenue" value={money(sumMrr)} delta="+12.4%" dir="up" vs="vs last month" ic="Lightning" tone="violet" spark={series} sc="#4F46E5" />
      <KpiCard label="Annual Recurring Revenue" value={money(sumArr)} delta="+8.2%" dir="up" vs="vs last year" ic="Card" tone="green" spark={series.map((v: number) => v * 12)} sc="#15BD6D" />
      <KpiCard label="Total Active Workspaces" value={sumWs.toLocaleString()} delta={"+" + all.reduce((s, d) => s + d.newClients, 0)} dir="up" vs="this month" ic="Workspace" tone="blue" spark={series.map((v: number) => v * 100)} sc="#2377FC" />
      <KpiCard label="New Signups (30d)" value={all.reduce((s, d) => s + d.newClients, 0).toLocaleString()} delta="+18.7%" dir="up" vs="vs prev period" ic="UserPlus" tone="purple" spark={[42, 58, 71, 65, 82, 94, 108, 122, 135, 142]} sc="#8B5CF6" />
      <KpiCard label="Avg. Churn Rate" value={wAvg.toFixed(1)} unit="%" delta="-0.3%" dir="up" vs="improving" ic="AlertCircle" tone="amber" spark={[wAvg + 1, wAvg + .8, wAvg + .6, wAvg + .4, wAvg + .2, wAvg]} sc="#F59E0B" />
    </div>
  );
}

