'use client';

import React from 'react';
import { Icons } from '@/components/Icons';

export function ActivityPulse() {
  const I = Icons as any;
  const items = [
    { icon: 'UserPlus', label: 'New signups today', value: '+42', tone: 'green', delta: '+18%' },
    { icon: 'Card', label: 'Successful payments', value: '$28.4k', tone: 'violet', delta: '+6.2%' },
    { icon: 'XCircle', label: 'Failed payments', value: '7', tone: 'red', delta: '-2 vs avg' },
    { icon: 'Refresh', label: 'Plan upgrades', value: '14', tone: 'blue', delta: '+5' },
    { icon: 'AlertCircle', label: 'Cancellations', value: '3', tone: 'amber', delta: '-1' }
  ];

  const fallback = { UserPlus: I.Employees || I.Clients };

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">Today's Activity</h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">Real-time pulse · last 24 hours</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <span className="inline-flex items-center gap-[4px] px-[7px] py-[2px] rounded-full text-[10.5px] font-bold leading-[1.4] bg-blue-soft text-[#15539E] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-blue">
            Live
          </span>
        </div>
      </div>
      <div className="px-4 pt-1 pb-4">
        {items.map((it: any, i: number) => {
          const IC = I[it.icon] || fallback[it.icon as keyof typeof fallback] || I.Sparkle;
          
          const bgClass = ({ 
            green: 'bg-green-soft', 
            violet: 'bg-primary-50', 
            red: 'bg-red-soft', 
            blue: 'bg-blue-soft', 
            amber: 'bg-amber-soft' 
          } as any)[it.tone];

          const fgClass = ({ 
            green: 'text-green', 
            violet: 'text-primary-600', 
            red: 'text-red', 
            blue: 'text-blue', 
            amber: 'text-amber' 
          } as any)[it.tone];

          return (
            <div className="grid grid-cols-[28px_1fr_auto] gap-[10px] items-center py-[9px] border-b border-border-soft last:border-b-0" key={i}>
              <div className={`w-[28px] h-[28px] rounded-[7px] grid place-items-center shrink-0 ${bgClass} ${fgClass}`}>
                <IC size={14} />
              </div>
              <div className="activity-meta">
                <div className="text-[11.5px] font-medium text-text">
                  <b className="font-bold">{it.label}</b>
                </div>
                <div className="text-[10.5px] text-text-3 mt-[2px] flex flex-wrap items-center gap-[7px]">
                  vs yesterday 
                  <span className="text-green font-semibold ml-1">{it.delta}</span>
                </div>
              </div>
              <div className="font-bold text-[11.5px]">
                <span className="text-text">{it.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

