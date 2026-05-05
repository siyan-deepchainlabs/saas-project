'use client';

import React from 'react';
import { Icons } from '@/components/Icons';

const HEALTH = [
  { name: 'API Gateway', status: 'ok', value: '99.98%', meter: 99.98, icon: 'Server', rt: '142ms' },
  { name: 'Database Cluster', status: 'ok', value: '99.95%', meter: 99.95, icon: 'Database', rt: '8ms' },
  { name: 'Background Jobs', status: 'warn', value: '98.20%', meter: 98.2, icon: 'Lightning', rt: 'queue 24' },
  { name: 'CDN / Edge', status: 'ok', value: '99.99%', meter: 99.99, icon: 'Globe', rt: '42ms' },
  { name: 'Email Service', status: 'ok', value: '99.92%', meter: 99.92, icon: 'Email', rt: '2.1s' }
];

export function SystemHealth() {
  const I = Icons as any;
  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] flex flex-col h-full min-h-[280px]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">System Health</h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">All systems operational · 5 services monitored</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <span className="inline-flex items-center gap-[4px] px-[7px] py-[2px] rounded-full text-[10.5px] font-bold leading-[1.4] bg-[var(--green-soft)] text-[#0E7B47] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[var(--green)]">
            Operational
          </span>
        </div>
      </div>
      <div className="px-4 pt-4 pb-4 flex flex-col flex-1">
        <div className="flex flex-col gap-[15px]">
          {HEALTH.map((h) => {
            const IC = I[h.icon] || I.Server;
            const statusColor = h.status === 'ok' ? 'var(--green)' : h.status === 'warn' ? 'var(--amber)' : 'var(--red)';
            const pulseRgba = h.status === 'ok' ? '21,189,109' : h.status === 'warn' ? '245,158,11' : '239,68,68';
            
            return (
              <div className="flex items-center justify-between gap-[10px]" key={h.name}>
                <div className="flex items-center gap-2 min-w-[150px]">
                  <span 
                    className="w-[7px] h-[7px] rounded-full shrink-0" 
                    style={{ 
                      background: statusColor,
                      boxShadow: `0 0 0 0 rgba(${pulseRgba},.45)`,
                      animation: `custom-pulse 1.6s infinite`
                    }}
                  ></span>
                  <IC size={13} className="text-[var(--text-3)]" />
                  <span className="text-[11.5px] font-medium text-text">{h.name}</span>
                  <span className="text-[10.5px] text-[var(--text-3)] ml-auto">{h.rt}</span>
                </div>
                <div className="flex-1 max-w-[140px] h-[5px] rounded-[3px] bg-[var(--surface-2)] overflow-hidden mx-4">
                  <span 
                    className="block h-full rounded-[3px]" 
                    style={{ width: `${(h.meter - 95) * 20}%`, background: statusColor }}
                  ></span>
                </div>
                <div className="text-[10.5px] font-bold text-[var(--text-2)] w-[50px] text-right">{h.value}</div>
              </div>
            );
          })}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes custom-pulse {
            0% { box-shadow: 0 0 0 0 rgba(21,189,109,.45); }
            70% { box-shadow: 0 0 0 6px rgba(21,189,109,0); }
            100% { box-shadow: 0 0 0 0 rgba(21,189,109,0); }
          }
        ` }} />

        <div className="mt-[64px] bg-[var(--primary-50)] rounded-lg p-[10px_10px_8px] flex items-center gap-2 text-[10.5px] text-[var(--primary-600)]">
          <Icons.Sparkle size={12} />
          <span>Last incident: 18 days ago · Avg uptime this quarter <b className="ml-1 font-bold text-[11px]">99.94%</b></span>
        </div>
      </div>
    </div>
  );
}


