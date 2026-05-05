'use client';

import React from 'react';
import { Icons } from './Icons';
import { cn } from '@/lib/utils';

interface TopbarProps {
  onToggleSidebar?: () => void;
  crumbs?: string[];
  crumbIcon?: keyof typeof Icons;
  searchPlaceholder?: string;
}

export default function Topbar({ 
  onToggleSidebar, 
  crumbs = ['Dashboard'], 
  crumbIcon = 'Home', 
  searchPlaceholder = "Search clients, invoices, tickets..." 
}: TopbarProps) {
  const I = Icons;
  const CrumbIcon = (I as any)[crumbIcon] || I.Home;

  return (
    <header className="sticky top-0 h-[48px] bg-white/85 backdrop-blur-md backdrop-saturate-180 border-b border-border-soft flex items-center px-[22px] gap-3.5 z-40">
      <div className="flex items-center gap-[7px] text-text-3 text-[11.5px]">
        <div 
          className="w-[26px] h-[26px] rounded-[7px] border border-border grid place-items-center bg-white cursor-pointer"
          onClick={onToggleSidebar} 
          title="Toggle sidebar"
        >
          <CrumbIcon size={14} />
        </div>
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <I.Chevron size={11} className="text-muted" />}
            <b className="text-[#272b39] font-semibold text-[12.5px]">{c}</b>
          </React.Fragment>
        ))}
      </div>

      <div className="flex-1 max-w-[360px] mx-auto relative">
        <I.Search size={15} className="absolute left-2.5 top-[8.5px] text-text-3" />
        <input 
          className="w-full h-8 border border-border bg-surface-2 rounded-lg px-9 pr-9 pl-8 text-[12px] text-text outline-none transition-[border-color,background,box-shadow] duration-140 focus:bg-white focus:border-primary focus:ring-[3px] focus:ring-primary/10"
          placeholder={searchPlaceholder} 
        />
        <span className="absolute right-1.5 top-[7px] text-[9px] font-bold text-text-3 bg-white border border-border px-1.25 py-0.5 rounded-[4px]">⌘K</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg border border-border bg-white grid place-items-center text-text-2 cursor-pointer relative transition-[background,color] duration-140 hover:bg-primary-50 hover:text-primary-600" title="Notifications">
          <I.Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-[7px] h-[7px] rounded-full bg-red border-2 border-white"></span>
        </div>
        <div className="flex items-center gap-2 pt-[3px] pr-[9px] pb-[3px] pl-[3px] border border-border rounded-full bg-white cursor-pointer hover:bg-surface-2">
          <div className="w-[26px] h-[26px] rounded-full bg-linear-to-br from-[#fca5a5] to-[#f472b6] text-white grid place-items-center font-bold text-[10.5px]">JD</div>
          <div className="text-[11.5px] font-semibold leading-none">
            John Doe
            <small className="block font-medium text-text-3 text-[9.5px] mt-[3px]">Super Admin</small>
          </div>
          <I.Chevron size={12} className="rotate-90 text-text-3" />
        </div>
      </div>
    </header>
  );
}
