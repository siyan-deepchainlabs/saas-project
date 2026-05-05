"use client";

import React from "react";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RenewalRate } from "@/components/dashboard/RenewalRate";
import { CustomerLTV } from "@/components/dashboard/CustomerLTV";
import { PlanDonut } from "@/components/dashboard/PlanDonut";
import { SubscriptionCount } from "@/components/dashboard/SubscriptionCount";
import { ModulePopularity } from "@/components/dashboard/ModulePopularity";
import { RecentClients } from "@/components/dashboard/RecentClients";
import { ActivityPulse } from "@/components/dashboard/ActivityPulse";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { OpenTickets } from "@/components/dashboard/OpenTickets";
import { SystemHealth } from "@/components/dashboard/SystemHealth";

export default function DashboardPage() {
  return (
    <div className="p-[18px_22px_32px]">
      <div className="flex items-end justify-between mb-[16px] gap-[14px] flex-wrap">
        <div>
          <h1 className="font-plus-jakarta text-[19px] font-bold m-[0_0_3px] tracking-[-0.01em]">
            Good morning, <span className="text-[var(--primary-600)] font-semibold">John</span> 👋
          </h1>
          <p className="m-0 text-[var(--text-3)] text-[12.5px]">
            Track your platform's performance across workspaces, subscriptions,
            and revenue.
          </p>
        </div>
        <div className="flex items-center gap-[6px] flex-wrap">
          <button className="h-[28px] px-[10px] border bg-[var(--primary-50)] border-[var(--primary-100)] rounded-[7px] text-[11.5px] font-semibold text-[var(--primary-600)] inline-flex items-center gap-[6px] cursor-pointer transition-all duration-140">
            This Month
          </button>
          <button className="h-[28px] px-[10px] border border-[var(--border)] bg-white rounded-[7px] text-[11.5px] font-medium text-[var(--text-2)] inline-flex items-center gap-[6px] cursor-pointer transition-all duration-140 hover:border-[var(--primary)] hover:text-[var(--primary-600)]">
            Last Month
          </button>
          <button className="h-[28px] px-[10px] border border-[var(--border)] bg-white rounded-[7px] text-[11.5px] font-medium text-[var(--text-2)] inline-flex items-center gap-[6px] cursor-pointer transition-all duration-140 hover:border-[var(--primary)] hover:text-[var(--primary-600)]">
            This Quarter
          </button>
          <button className="h-[28px] px-[10px] border border-[var(--border)] bg-white rounded-[7px] text-[11.5px] font-medium text-[var(--text-2)] inline-flex items-center gap-[6px] cursor-pointer transition-all duration-140 hover:border-[var(--primary)] hover:text-[var(--primary-600)]">
            This Year
          </button>
        </div>
      </div>

      <KpiRow />

      {/* Row 2: Charts */}
      <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-[18px] mb-[18px]">
        <RevenueChart />
        <RenewalRate />
        <CustomerLTV />
      </div>

      {/* Row 3: Mix & Popularity */}
      <div className="grid grid-cols-3 gap-[18px] mb-[18px]">
        <PlanDonut />
        <SubscriptionCount />
        <ModulePopularity />
      </div>

      {/* Row 4: Lists 1 */}
      <div className="grid grid-cols-2 gap-[18px] mb-[18px]">
        <RecentClients />
        <RecentTransactions />
      </div>

      {/* Row 5: Lists 2 */}
      <div className="grid grid-cols-3 gap-[18px] mb-[18px]">
        <OpenTickets />
        <SystemHealth />
        <ActivityPulse />
      </div>
    </div>
  );
}
