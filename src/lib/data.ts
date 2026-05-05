export const WS_TYPES: any = {
  personal: {
    key: 'personal',
    name: 'Personal',
    short: 'Personal',
    plans: [
      { id: 'free', name: 'Free',  ppm: 0,   color: '#94A3B8' },
      { id: 'plus', name: 'Plus',  ppm: 9,   color: '#F59E0B' },
      { id: 'pro',  name: 'Pro',   ppm: 19,  color: '#4F46E5' },
    ],
  },
  team: {
    key: 'team',
    name: 'Team',
    short: 'Team',
    plans: [
      { id: 'starter', name: 'Starter', ppm: 12, color: '#06B6D4' },
      { id: 'growth',  name: 'Growth',  ppm: 24, color: '#15BD6D' },
      { id: 'scale',   name: 'Scale',   ppm: 39, color: '#4F46E5' },
    ],
  },
  organization: {
    key: 'organization',
    name: 'Organization',
    short: 'Organization',
    plans: [
      { id: 'business',    name: 'Business',     ppm: 32, color: '#8B5CF6' },
      { id: 'enterprise',  name: 'Enterprise',   ppm: 58, color: '#4F46E5' },
      { id: 'enterpriseplus', name: 'Enterprise+', ppm: 89, color: '#1E2230' },
    ],
  },
};

export const WS_DATA: any = {
  personal: {
    workspaces: 18420,
    activeUsers: 18420,
    mrr: 142800,
    arr: 1713600,
    churn: 3.1,
    newClients: 642,
    renewal: 88.4,
    plans: [
      { ...WS_TYPES.personal.plans[0], count: 12120, mrr: 0       },
      { ...WS_TYPES.personal.plans[1], count: 4280,  mrr: 38520   },
      { ...WS_TYPES.personal.plans[2], count: 2020,  mrr: 38380   },
    ],
    modules: [
      { name: 'Notes',     pct: 92, color: '#4F46E5' },
      { name: 'Tasks',     pct: 78, color: '#15BD6D' },
      { name: 'Calendar',  pct: 64, color: '#F59E0B' },
      { name: 'Docs',      pct: 41, color: '#8B5CF6' },
      { name: 'Goals',     pct: 22, color: '#06B6D4' },
    ],
    series: [82,86,89,94,98,103,108,114,121,128,135,142],
  },
  team: {
    workspaces: 1142,
    activeUsers: 9840,
    mrr: 184600,
    arr: 2215200,
    churn: 2.4,
    newClients: 84,
    renewal: 94.2,
    plans: [
      { ...WS_TYPES.team.plans[0], count: 612, mrr: 64500  },
      { ...WS_TYPES.team.plans[1], count: 384, mrr: 86400  },
      { ...WS_TYPES.team.plans[2], count: 146, mrr: 33700  },
    ],
    modules: [
      { name: 'Projects',  pct: 96, color: '#4F46E5' },
      { name: 'Sprints',   pct: 82, color: '#15BD6D' },
      { name: 'Time Track', pct: 71, color: '#F59E0B' },
      { name: 'Chat',      pct: 88, color: '#8B5CF6' },
      { name: 'Calendar',  pct: 65, color: '#06B6D4' },
      { name: 'Docs',      pct: 58, color: '#EC4899' },
    ],
    series: [124,131,138,142,150,157,163,168,172,176,180,184],
  },
  organization: {
    workspaces: 218,
    activeUsers: 24800,
    mrr: 312400,
    arr: 3748800,
    churn: 1.4,
    newClients: 12,
    renewal: 97.6,
    plans: [
      { ...WS_TYPES.organization.plans[0], count: 132, mrr: 84200  },
      { ...WS_TYPES.organization.plans[1], count: 68,  mrr: 124600 },
      { ...WS_TYPES.organization.plans[2], count: 18,  mrr: 103600 },
    ],
    modules: [
      { name: 'CRM',          pct: 94, color: '#4F46E5' },
      { name: 'HR & People',  pct: 88, color: '#15BD6D' },
      { name: 'Payroll',      pct: 76, color: '#F59E0B' },
      { name: 'Recruitment',  pct: 71, color: '#8B5CF6' },
      { name: 'Performance',  pct: 64, color: '#06B6D4' },
      { name: 'Analytics',    pct: 82, color: '#EC4899' },
    ],
    series: [218,228,238,248,258,268,278,288,294,300,306,312],
  },
};

export const CLIENTS_BY_WS: any = {
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

export const TXNS_BY_WS: any = {
  personal: [
    { name: 'Sarah Chen',  meta: 'Monthly · Pro · 1 seat',     amt: '+$19',     dir: 'pos', icon: 'Card',    tone: 'violet', gw: 'Stripe',   tx: 'txn_4Hk29Lp', status: 'success' },
    { name: 'Marcus Webb', meta: 'Monthly · Plus · 1 seat',    amt: '+$9',      dir: 'pos', icon: 'Receipt', tone: 'amber',  gw: 'PayPal',   tx: 'PAY-8XQ41B7', status: 'success' },
    { name: 'Aisha Patel', meta: 'Plan upgrade · Plus → Pro',  amt: '+$10',     dir: 'pos', icon: 'Lightning', tone: 'green', gw: 'Stripe',  tx: 'txn_4Hk2Aj2', status: 'success' },
    { name: 'Yuki Sato',   meta: 'Refund · prorated',          amt: '-$6',      dir: 'neg', icon: 'Refresh', tone: 'red',    gw: 'Stripe',   tx: 'rfn_2KqP91L', status: 'refunded' },
    { name: 'Lena Müller', meta: 'Monthly · Plus · 1 seat',    amt: '+$9',      dir: 'pos', icon: 'Receipt', tone: 'violet', gw: 'Adyen',    tx: 'ADY-7P3Q1Z', status: 'pending' },
  ],
  team: [
    { name: 'Stripe Atlas', meta: 'Monthly · Scale · 84 seats × $39',   amt: '+$3,276', dir: 'pos', icon: 'Card',    tone: 'green', gw: 'Stripe',  tx: 'txn_5Mn82Tq', status: 'success' },
    { name: 'Linear Inc.',  meta: 'Monthly · Growth · 32 seats × $24',  amt: '+$768',   dir: 'pos', icon: 'Receipt', tone: 'violet', gw: 'Stripe', tx: 'txn_5Mn83Vw', status: 'success' },
    { name: 'Cal.com Team', meta: 'Seat expansion · +6 seats',          amt: '+$144',   dir: 'pos', icon: 'Lightning', tone: 'green', gw: 'Stripe', tx: 'txn_5Mn84Yz', status: 'success' },
    { name: 'Figma Labs',   meta: 'Refund · downgrade Scale → Growth',  amt: '-$1,240', dir: 'neg', icon: 'Refresh', tone: 'red',   gw: 'Stripe',  tx: 'rfn_3Lp02Mn', status: 'refunded' },
    { name: 'Vercel Edge',  meta: 'Monthly · Starter · 14 seats × $12', amt: '+$168',   dir: 'pos', icon: 'Bank',    tone: 'blue',  gw: 'Wire',    tx: 'WIRE-9821B', status: 'pending' },
  ],
  organization: [
    { name: 'Acme Corp',    meta: 'Annual · Enterprise+ · 480 seats',   amt: '+$512,640', dir: 'pos', icon: 'Card',    tone: 'green', gw: 'Wire',   tx: 'WIRE-7714X', status: 'success' },
    { name: 'Hooli Tech',   meta: 'Monthly · Enterprise · 312 × $58',   amt: '+$18,096',  dir: 'pos', icon: 'Receipt', tone: 'violet', gw: 'Stripe', tx: 'txn_6Op19Hk', status: 'success' },
    { name: 'Globex Inds.', meta: 'Seat expansion · +40 seats',         amt: '+$2,320',   dir: 'pos', icon: 'Lightning', tone: 'green', gw: 'Stripe', tx: 'txn_6Op20Lr', status: 'success' },
    { name: 'Initech LLC',  meta: 'Refund · cancellation',              amt: '-$2,688',   dir: 'neg', icon: 'Refresh', tone: 'red',   gw: 'Stripe',  tx: 'rfn_4Mq11Pq', status: 'refunded' },
    { name: 'Pied Piper',   meta: 'Monthly · Business · 64 × $32',      amt: '+$2,048',   dir: 'pos', icon: 'Bank',    tone: 'blue',  gw: 'Adyen',   tx: 'ADY-5T8K2L', status: 'failed' },
  ],
};
