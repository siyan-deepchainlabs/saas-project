import React, { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'stroke' | 'fill' | 'strokeWidth' | 'viewBox' | 'xmlns'> {
  size?: number;
  stroke?: number;
}

const I = ({ size = 20, stroke = 1.6, children, ...rest }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth={stroke} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...rest as any}
  >
    {children}
  </svg>
);

export const Icons = {
  Dashboard: (p: IconProps) => <I {...p}><rect x="3" y="3" width="7" height="9" rx="1.6"/><rect x="14" y="3" width="7" height="5" rx="1.6"/><rect x="14" y="12" width="7" height="9" rx="1.6"/><rect x="3" y="16" width="7" height="5" rx="1.6"/></I>,
  Clients: (p: IconProps) => <I {...p}><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.7-3 3-4.6 5.5-4.6S14 16 14.7 19"/><circle cx="17" cy="9" r="2.4"/><path d="M15 14.6c2.6.2 4.4 1.8 5 4.4"/></I>,
  Workspace: (p: IconProps) => <I {...p}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M9 4v14"/></I>,
  Subscription: (p: IconProps) => <I {...p}><path d="M21 12a9 9 0 1 1-3.5-7.1"/><path d="M21 4v4h-4"/></I>,
  Coupon: (p: IconProps) => <I {...p}><path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z"/><path d="M9 8v8" strokeDasharray="2 2"/></I>,
  Billing: (p: IconProps) => <I {...p}><path d="M4 7c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"/><path d="M4 11h16M8 16h3"/></I>,
  Support: (p: IconProps) => <I {...p}><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></I>,
  Reports: (p: IconProps) => <I {...p}><path d="M3 20h18"/><path d="M6 16V9M11 16V5M16 16v-7M21 16v-3"/></I>,
  Plan: (p: IconProps) => <I {...p}><path d="M12 2 4 6v6c0 4.5 3.4 8.6 8 10 4.6-1.4 8-5.5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></I>,
  Email: (p: IconProps) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></I>,
  Platform: (p: IconProps) => <I {...p}><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2.5"/></I>,
  Roles: (p: IconProps) => <I {...p}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/><path d="M9 11.5h6M12 8.5v6"/></I>,
  Employees: (p: IconProps) => <I {...p}><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.7-3.4 3.4-5.5 7-5.5s6.3 2.1 7 5.5"/></I>,
  Audit: (p: IconProps) => <I {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 14h8M8 17h5"/></I>,
  Settings: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></I>,
  Search: (p: IconProps) => <I {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></I>,
  Bell: (p: IconProps) => <I {...p}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></I>,
  Plus: (p: IconProps) => <I {...p}><path d="M12 5v14M5 12h14"/></I>,
  Home: (p: IconProps) => <I {...p}><path d="m3 11 9-8 9 8"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></I>,
  Chevron: (p: IconProps) => <I {...p}><path d="m9 18 6-6-6-6"/></I>,
  ArrowUp: (p: IconProps) => <I {...p}><path d="m6 9 6-6 6 6"/><path d="M12 3v18"/></I>,
  ArrowDown: (p: IconProps) => <I {...p}><path d="M12 21V3"/><path d="m6 15 6 6 6-6"/></I>,
  More: (p: IconProps) => <I {...p}><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></I>,
  Filter: (p: IconProps) => <I {...p}><path d="M3 5h18l-7 9v6l-4-2v-4L3 5Z"/></I>,
  Calendar: (p: IconProps) => <I {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></I>,
  Download: (p: IconProps) => <I {...p}><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></I>,
  Refresh: (p: IconProps) => <I {...p}><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M3 21v-5h5M21 3v5h-5"/></I>,
  Receipt: (p: IconProps) => <I {...p}><path d="M5 3h14v18l-3-2-3 2-3-2-3 2-2-1V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/></I>,
  Card: (p: IconProps) => <I {...p}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 16h2"/></I>,
  Bank: (p: IconProps) => <I {...p}><path d="m3 10 9-6 9 6"/><path d="M5 10v8M19 10v8M9 10v8M15 10v8M3 21h18"/></I>,
  Server: (p: IconProps) => <I {...p}><rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7h.01M7 17h.01"/></I>,
  Cloud: (p: IconProps) => <I {...p}><path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6 2A4 4 0 0 0 6 18h11Z"/></I>,
  Database: (p: IconProps) => <I {...p}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></I>,
  Globe: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></I>,
  Lightning: (p: IconProps) => <I {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></I>,
  CheckCircle: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></I>,
  XCircle: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></I>,
  AlertCircle: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></I>,
  Sparkle: (p: IconProps) => <I {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></I>,
  UserPlus: (p: IconProps) => <I {...p}><circle cx="9" cy="8" r="4"/><path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/><path d="M19 8v6M22 11h-6"/></I>,
  Star: (p: IconProps) => <I {...p}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></I>,
  Eye: (p: IconProps) => <I {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></I>,
  Copy: (p: IconProps) => <I {...p}><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></I>,
  Edit: (p: IconProps) => <I {...p}><path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6"/><path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5Z"/></I>,
  Trash: (p: IconProps) => <I {...p}><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/><path d="M10 11v6M14 11v6"/></I>,
  X: (p: IconProps) => <I {...p}><path d="M18 6 6 18M6 6l12 12"/></I>,
  Send: (p: IconProps) => <I {...p}><path d="m22 2-11 11M22 2l-7 20-4-9-9-4 20-7Z"/></I>,
  Archive: (p: IconProps) => <I {...p}><rect x="3" y="3" width="18" height="5" rx="1.6"/><path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M10 12h4"/></I>,
  Grid: (p: IconProps) => <I {...p}><rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/></I>,
  List: (p: IconProps) => <I {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></I>,
  Tag: (p: IconProps) => <I {...p}><path d="M20.6 13.4 12 22l-9-9 8.6-8.6A2 2 0 0 1 13 4h7v7a2 2 0 0 1-.4 2.4Z"/><circle cx="16.5" cy="7.5" r="1.2"/></I>,
  Management: (p: IconProps) => <I {...p}><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/><path d="M3 21h18"/></I>,
  Wrench: (p: IconProps) => <I {...p}><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.83 2.83 0 1 1-4-4l9.4-9.4a4 4 0 0 0-1 5"/></I>,
  Users: (p: IconProps) => <I {...p}><circle cx="9" cy="8" r="3.6"/><path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/><circle cx="17" cy="9" r="2.6"/><path d="M22 19c0-2.8-2.1-5-4.6-5.5"/></I>,
  Phone: (p: IconProps) => <I {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></I>,
  Activity: (p: IconProps) => <I {...p}><path d="M3 12h4l3-9 4 18 3-9h4"/></I>,
  Ban: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/></I>,
  Paperclip: (p: IconProps) => <I {...p}><path d="m21 12-9 9a5 5 0 0 1-7-7l9.5-9.5a3.5 3.5 0 0 1 5 5L10 19a2 2 0 0 1-3-3l8.5-8.5"/></I>,
  Smile: (p: IconProps) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></I>,
  Image: (p: IconProps) => <I {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></I>,
  Mic: (p: IconProps) => <I {...p}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></I>,
  Reply: (p: IconProps) => <I {...p}><path d="m9 17-5-5 5-5"/><path d="M4 12h11a5 5 0 0 1 5 5v3"/></I>,
  Headset: (p: IconProps) => <I {...p}><path d="M3 14a9 9 0 0 1 18 0v4a3 3 0 0 1-3 3h-1v-7h4M3 14v4a3 3 0 0 0 3 3h1v-7H3"/></I>,
  Pin: (p: IconProps) => <I {...p}><path d="m12 17 .01 5M9 3l3 3 3-3M7 8l5 5 5-5M5 13c2 1 4 1 7 1s5 0 7-1l-2 5H7l-2-5Z"/></I>,
  ExternalLink: (p: IconProps) => <I {...p}><path d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></I>,
};
