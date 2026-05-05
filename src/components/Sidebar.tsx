"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "./Icons";
import { LogoMark } from "@/assets/logo-mark";
import { KazenticText } from "@/assets/kazentic";
import { cn } from "@/lib/utils";

const NAV = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "Dashboard",
    path: "/dashboard",
  },
  { id: "clients", label: "Clients", icon: "Clients", path: "/clients" },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: "Workspace",
    path: "/workspaces",
  },
  { id: "billing", label: "Billing", icon: "Billing", path: "/billing" },
  {
    id: "support",
    label: "Support",
    icon: "Support",
    path: "/support",
    badge: 12,
  },
  { id: "reports", label: "Reports", icon: "Reports", path: "/reports" },
  { id: "plans", label: "Plans", icon: "Plan", path: "/plans" },
  { id: "templates", label: "Templates", icon: "Email", path: "/templates" },
  {
    id: "management",
    label: "Management",
    icon: "Management",
    children: [
      {
        id: "employees",
        label: "Employees",
        icon: "Employees",
        path: "/employees",
      },
      { id: "rbac", label: "Access Control", icon: "Roles", path: "/rbac" },
      {
        id: "maintenance",
        label: "Maintenance",
        icon: "Wrench",
        path: "/maintenance",
      },
    ],
  },
];

interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
  children?: NavItem[];
}

function NavLeaf({
  item,
  active,
  sub = false,
  railOpen,
}: {
  item: NavItem;
  active: boolean;
  sub?: boolean;
  railOpen: boolean;
}) {
  const router = useRouter();
  const IconC = (Icons as any)[item.icon] || Icons.Dashboard;
  return (
    <div
      className={cn(
        "relative flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-text-2 font-medium text-[12px] cursor-pointer transition-[background,color] duration-140 select-none whitespace-nowrap mb-1 hover:bg-surface-2 hover:text-text",
        sub && "py-[5px] text-[11.5px] opacity-85 hover:opacity-100",
        active &&
          !sub &&
          "bg-primary-50 text-primary-600 font-semibold before:content-[''] before:absolute before:-left-2.5 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-r-[3px] before:bg-primary-600",
        active &&
          sub &&
          "opacity-100 bg-transparent text-primary-600 font-semibold before:content-[''] before:absolute before:-left-7 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-r-[3px] before:bg-primary-600",
      )}
      onClick={() => router.push(item.path)}
      title={item.label}
    >
      <IconC
        className={cn(
          "shrink-0",
          sub ? "w-[15px] h-[15px]" : "w-[17px] h-[17px]",
        )}
        size={sub ? 15 : 17}
      />
      <span
        className={cn(
          "transition-[opacity,transform] duration-180 delay-[80ms]",
          railOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1",
        )}
      >
        {item.label}
      </span>
      {item.badge ? (
        <span
          className={cn(
            "ml-auto bg-red text-white text-[9.5px] font-bold px-1.5 py-px rounded-full transition-opacity duration-180 delay-[80ms]",
            railOpen ? "opacity-100" : "opacity-0",
          )}
        >
          {item.badge}
        </span>
      ) : null}
    </div>
  );
}

function NavGroup({
  item,
  pathname,
  expanded,
  onToggle,
  railOpen,
}: {
  item: NavItem;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  railOpen: boolean;
}) {
  const IconC = (Icons as any)[item.icon] || Icons.Dashboard;
  const childActive = item.children?.some((c) => pathname.startsWith(c.path));
  const showChildren = railOpen && expanded;

  return (
    <div className="relative mb-0.5">
      <div
        className={cn(
          "relative flex items-center justify-between gap-2.5 px-2.5 py-[7px] rounded-lg text-text-2 font-medium text-[12px] cursor-pointer transition-[background,color] duration-140 select-none whitespace-nowrap mb-1 hover:bg-surface-2 hover:text-text",
          childActive && "text-text",
          childActive &&
            !showChildren &&
            "bg-primary-50 text-primary-600 font-semibold before:content-[''] before:absolute before:-left-2.5 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-r-[3px] before:bg-primary-600",
        )}
        onClick={onToggle}
        title={item.label}
      >
        <div className="flex items-center gap-2.5">
          <IconC className="w-[17px] h-[17px] shrink-0" size={17} />
          <span
            className={cn(
              "transition-[opacity,transform] duration-180 delay-[80ms]",
              railOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1",
            )}
          >
            {item.label}
          </span>
        </div>
        <Icons.Chevron
          className={cn(
            "ml-auto transition-[opacity,transform] duration-200",
            railOpen ? "opacity-50 delay-[80ms]" : "opacity-0",
          )}
          size={11}
          style={{ transform: showChildren ? "rotate(90deg)" : "rotate(0deg)" }}
        />
      </div>
      <div
        className={cn(
          "transition-all duration-220 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden",
          showChildren
            ? "max-h-[500px] opacity-100 mt-0.5 mb-1.5"
            : "max-h-0 opacity-0",
        )}
      >
        <div className="pl-7 mb-1">
          {item.children?.map((c) => (
            <NavLeaf
              key={c.id}
              item={c}
              active={pathname.startsWith(c.path)}
              sub={true}
              railOpen={railOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({
  forceOpen = false,
}: {
  forceOpen?: boolean;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [hovered, setHovered] = useState(false);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  const railOpen = forceOpen || hovered;

  return (
    <aside
      className={cn(
        "bg-white border-r border-border fixed inset-y-0 left-0 z-50 transition-[width] duration-220 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col overflow-hidden",
        railOpen ? "w-[220px] shadow-lg" : "w-[60px]",
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-2.5 h-[48px] px-3.5  shrink-0 overflow-hidden border-b border-border-soft transition-all duration-200">
        <LogoMark className="w-[26px] h-[26px] shrink-0" />
        <div
          className={cn(
            "transition-[opacity,transform] duration-180 delay-[80ms] shrink-0 overflow-hidden",
            railOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1",
          )}
        >
          <KazenticText className="h-[16px] w-[80px] shrink-0 fill-[var(--text)]" />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-2.5 pt-2 pb-3 [scrollbar-width:thin] [scrollbar-color:#d8dbe2_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#d8dbe2] [&::-webkit-scrollbar-thumb]:rounded-full">
        {NAV.map((it) => {
          if (it.children) {
            return (
              <NavGroup
                key={it.id}
                item={it as any}
                pathname={pathname}
                expanded={!!expanded[it.id]}
                onToggle={() => toggle(it.id)}
                railOpen={railOpen}
              />
            );
          }
          const active =
            it.path === "/dashboard"
              ? pathname === "/dashboard" || pathname === "/"
              : pathname.startsWith(it.path);
          return (
            <NavLeaf
              key={it.id}
              item={it as any}
              active={active}
              railOpen={railOpen}
            />
          );
        })}
      </nav>
      <button
        className="fixed bottom-5 left-5 w-10 h-10 rounded-full bg-[#1e2230] text-white grid place-items-center cursor-pointer z-100 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-transform duration-140 border-none font-bold text-base hover:scale-110"
        title="Tweaks"
      >
        N
      </button>
    </aside>
  );
}
