'use client';

import React from 'react';
import { WS_DATA, WS_TYPES } from '@/lib/data';
import { Icons } from '@/components/Icons';

const initials = (n: string) => n.split(' ').map((s) => s[0]).join('').slice(0, 2).toUpperCase();

const CLIENTS_BY_WS: any = {
  personal: [
    { name: 'Sarah Chen',     email: 'sarah.chen@gmail.com',    plan: 'Pro',     seats: 1, ppm: 19, mrr: 19,  joined: '2 days ago', status: 'success', tone: '#4F46E5' },
    { name: 'Marcus Webb',    email: 'mwebb@outlook.com',       plan: 'Plus',    seats: 1, ppm: 9,  mrr: 9,   joined: '3 days ago', status: 'success', tone: '#F59E0B' },
    { name: 'Aisha Patel',    email: 'aisha.p@icloud.com',      plan: 'Pro',     seats: 1, ppm: 19, mrr: 19,  joined: '4 days ago', status: 'warn',    tone: '#8B5CF6' },
    { name: 'Diego Ramos',    email: 'd.ramos@yahoo.com',       plan: 'Free',    seats: 1, ppm: 0,  mrr: 0,   joined: '5 days ago', status: 'success', tone: '#06B6D4' },
    { name: 'Lena Müller',    email: 'lena.m@protonmail.com',   plan: 'Plus',    seats: 1, ppm: 9,  mrr: 9,   joined: '1 week ago', status: 'success', tone: '#EC4899' },
  ],
  team: [
    { name: 'Linear Inc.',    email: 'ops@linear.app',          plan: 'Growth',  seats: 32,  ppm: 24, mrr: 768,   joined: '2 days ago', status: 'success', tone: '#15BD6D' },
    { name: 'Stripe Atlas',   email: 'admin@stripe.io',         plan: 'Scale',   seats: 84,  ppm: 39, mrr: 3276,  joined: '3 days ago', status: 'success', tone: '#4F46E5' },
    { name: 'Vercel Edge',    email: 'ops@linear.app',          plan: 'Starter', seats: 14,  ppm: 12, mrr: 168,   joined: '5 days ago', status: 'success', tone: '#06B6D4' },
    { name: 'Cal.com Team',   email: 'team@cal.com',            plan: 'Growth',  seats: 22,  ppm: 24, mrr: 528,   joined: '6 days ago', status: 'warn',    tone: '#F59E0B' },
    { name: 'Resend Studio',  email: 'billing@resend.com',      plan: 'Starter', seats: 9,   ppm: 12, mrr: 108,   joined: '1 week ago', status: 'success', tone: '#EC4899' },
  ],
  organization: [
    { name: 'Acme Corp',      email: 'finance@acmecorp.com',    plan: 'Enterprise+', seats: 480, ppm: 89, mrr: 42720, joined: '4 days ago', status: 'success', tone: '#4F46E5' },
    { name: 'Globex Industries', email: 'ap@globex.io',         plan: 'Enterprise',  seats: 220, ppm: 58, mrr: 12760, joined: '1 week ago', status: 'success', tone: '#8B5CF6' },
    { name: 'Initech LLC',    email: 'billing@initech.com',     plan: 'Business',    seats: 84,  ppm: 32, mrr: 2688,  joined: '1 week ago', status: 'warn',    tone: '#F59E0B' },
    { name: 'Hooli Tech',     email: 'finance@hooli.com',       plan: 'Enterprise',  seats: 312, ppm: 58, mrr: 18096, joined: '2 weeks ago', status: 'success', tone: '#15BD6D' },
    { name: 'Pied Piper',     email: 'admin@piedpiper.io',      plan: 'Business',    seats: 64,  ppm: 32, mrr: 2048,  joined: '2 weeks ago', status: 'success', tone: '#06B6D4' },
  ],
};

export function RecentClients() {
  const [ws, setWs] = React.useState('team');
  const rows = CLIENTS_BY_WS[ws] || CLIENTS_BY_WS.personal;
  const wsName = (WS_TYPES as any)[ws].short;

  return (
    <div className="bg-surface border border-border rounded-[12px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-[10px]">
        <div>
          <h3 className="m-0 text-[13px] font-semibold tracking-[-0.005em] text-[var(--text)] font-plus-jakarta">Recent Clients</h3>
          <div className="text-[var(--text-3)] text-[10.5px] mt-[2px] font-medium">Newly onboarded {wsName.toLowerCase()} accounts</div>
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
          <button className="h-7 px-2.5 border border-border bg-white rounded-[7px] text-[11.5px] font-medium text-[var(--text-2)] inline-flex items-center gap-1.5 cursor-pointer hover:border-primary hover:text-primary-600 transition-all duration-140">
            <Icons.Filter size={12} /> Filter
          </button>
        </div>
      </div>
      <div className="p-0">
        <div className="overflow-x-auto overflow-y-auto max-h-[360px]">
          <table className="w-full border-collapse border-spacing-0">
            <thead>
              <tr>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft first:border-l first:border-border-soft first:rounded-l-[7px] first:pl-3.5 last:border-r last:border-border-soft last:rounded-r-[7px] last:pr-3.5">Client</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">Plan</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">Seats</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">PRICING</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">MRR</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">TOTAL</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">Status</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft">Joined</th>
                <th className="text-left text-[9.5px] uppercase tracking-[0.06em] text-[var(--text-3)] font-bold p-[8px_10px] bg-[var(--surface-2)] border-y border-border-soft last:border-r last:border-border-soft last:rounded-r-[7px] last:pr-3.5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c: any) => (
                <tr key={c.name} className="group hover:bg-[var(--surface-2)]">
                  <td className="p-[9px_10px] first:pl-3.5 border-b border-border-soft group-last:border-b-0 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[7px] grid place-items-center font-bold text-[10.5px] shrink-0 font-plus-jakarta" style={{ background: c.tone + '22', color: c.tone }}>{initials(c.name)}</div>
                      <div className="info"><div className="font-semibold text-[12px]">{c.name}</div><div className="text-[var(--text-3)] text-[10.5px] mt-px">{c.email}</div></div>
                    </div>
                  </td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap">
                    <span className="inline-flex items-center px-[7px] py-[2px] rounded-[5px] text-[10.5px] font-bold bg-[var(--primary-50)] text-[var(--primary-600)]">{c.plan}</span>
                  </td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap font-semibold text-[11.5px]">{c.seats}</td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap text-[var(--text-2)] text-[11.5px]">${c.ppm}.00</td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap font-bold text-[11.5px]">${c.mrr.toLocaleString()}</td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap font-semibold text-[var(--text-2)] text-[11.5px]">${(c.mrr * 12).toLocaleString()}</td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-[4px] px-[7px] py-[2px] rounded-full text-[10.5px] font-bold leading-[1.4] ${
                      c.status === 'success' ? 'bg-[var(--green-soft)] text-[#0E7B47] before:bg-[var(--green)]' : 
                      'bg-[var(--amber-soft)] text-[#97580B] before:bg-[var(--amber)]'
                    } before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full`}>
                      {c.status === 'warn' ? 'Pending' : 'Active'}
                    </span>
                  </td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap text-[var(--text-3)] text-[11.5px]">{c.joined}</td>
                  <td className="p-[9px_10px] border-b border-border-soft group-last:border-b-0 whitespace-nowrap last:pr-3.5">
                    <button className="w-[26px] h-[26px] grid place-items-center border border-border bg-white rounded-[8px] text-[var(--text-2)] cursor-pointer transition-all duration-140 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 active:bg-primary-50 active:translate-y-[1px]">
                      <Icons.More size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

