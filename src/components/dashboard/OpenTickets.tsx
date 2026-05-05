'use client';

import React from 'react';
import { WS_DATA, WS_TYPES } from '@/lib/data';

const TICKETS_BY_WS: any = {
  personal: [
    { id: 'T-2841', t: 'Cannot sync notes across devices', client: 'Sarah Chen', ago: '12 min ago', pri: 'med', cat: 'Bug' },
    { id: 'T-2840', t: 'Request: dark mode for mobile', client: 'Marcus Webb', ago: '46 min ago', pri: 'low', cat: 'Feature' },
    { id: 'T-2839', t: 'Billing: charged twice this month', client: 'Aisha Patel', ago: '2 hr ago', pri: 'high', cat: 'Billing' },
    { id: 'T-2838', t: 'How do I export my data?', client: 'Diego Ramos', ago: '3 hr ago', pri: 'low', cat: 'How-to' }
  ],
  team: [
    { id: 'T-2841', t: 'Cannot export reports in CSV format', client: 'Linear Inc.', ago: '12 min ago', pri: 'high', cat: 'Bug' },
    { id: 'T-2840', t: 'Request: 2FA via authenticator app', client: 'Vercel Edge', ago: '46 min ago', pri: 'med', cat: 'Feature' },
    { id: 'T-2839', t: 'Invoice #INV-9921 missing line items', client: 'Cal.com Team', ago: '2 hr ago', pri: 'high', cat: 'Billing' },
    { id: 'T-2838', t: 'How to invite a team member?', client: 'Resend Studio', ago: '3 hr ago', pri: 'low', cat: 'How-to' },
    { id: 'T-2837', t: 'API rate limits returning 429', client: 'Stripe Atlas', ago: '5 hr ago', pri: 'med', cat: 'API' }
  ],
  organization: [
    { id: 'T-2841', t: 'SSO integration with Okta failing', client: 'Acme Corp', ago: '8 min ago', pri: 'high', cat: 'Auth' },
    { id: 'T-2840', t: 'Custom contract terms request', client: 'Hooli Tech', ago: '34 min ago', pri: 'med', cat: 'Sales' },
    { id: 'T-2839', t: 'Seat allocation report inaccurate', client: 'Globex Inds.', ago: '1 hr ago', pri: 'high', cat: 'Billing' },
    { id: 'T-2838', t: 'Audit log retention period', client: 'Initech LLC', ago: '4 hr ago', pri: 'low', cat: 'Compliance' }
  ]
};

export function OpenTickets() {
  const [ws, setWs] = React.useState('team');
  const rows = TICKETS_BY_WS[ws] || TICKETS_BY_WS.personal;
  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">Open Support Tickets</h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">{rows.length} awaiting · avg first response 2h 14m</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="inline-flex items-center bg-white border border-border rounded-[10px] p-[3px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] gap-[2px]">
            {(Object.entries(WS_TYPES) as [string, any][]).map(([key, type]) => (
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
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 pt-1 pb-4 [.density-compact_&]:pb-3">
        {rows.map((t: any) => (
          <div className="grid grid-cols-[28px_1fr_auto] items-center gap-[10px] py-[9px] border-b border-border-soft last:border-b-0" key={t.id}>
            <div className={`w-[28px] h-[28px] rounded-[7px] grid place-items-center font-bold text-[10.5px] shrink-0 ${
              t.pri === 'high' ? 'bg-[var(--red-soft)] text-[var(--red)]' : 
              t.pri === 'med' ? 'bg-[var(--amber-soft)] text-[var(--amber)]' : 
              'bg-[var(--blue-soft)] text-[var(--blue)]'
            }`}>
              {t.pri === 'high' ? 'P1' : t.pri === 'med' ? 'P2' : 'P3'}
            </div>
            <div>
              <div className="text-[12px] font-semibold flex items-center">
                {t.t} 
                <span className={`inline-flex items-center gap-[4px] px-[7px] py-[2px] rounded-full text-[10.5px] font-bold leading-[1.4] ml-1.5 ${
                  t.pri === 'high' ? 'bg-[var(--red-soft)] text-[#B42727] before:bg-[var(--red)]' : 
                  t.pri === 'med' ? 'bg-[var(--amber-soft)] text-[#97580B] before:bg-[var(--amber)]' : 
                  'bg-[var(--blue-soft)] text-[#15539E] before:bg-[var(--blue)]'
                } before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full`}>
                  {t.pri === 'high' ? 'High' : t.pri === 'med' ? 'Medium' : 'Low'}
                </span>
              </div>
              <div className="text-[10.5px] text-[var(--text-3)] mt-[2px] flex items-center gap-[5px]">
                <span>{t.id}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-[var(--muted)]"></span>
                <span>{t.client}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-[var(--muted)]"></span>
                <span>{t.cat}</span>
              </div>
            </div>
            <div className="text-[var(--text-3)] text-[10.5px] font-medium">{t.ago}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

