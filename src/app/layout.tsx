'use client';

import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { AppProvider, useAppContext } from '@/lib/context';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ['400', '500', '600', '700', '800'],
});

function AppShell({ children }: { children: React.ReactNode }) {
  const { ws, setWs, sidebarOpen, setSidebarOpen, density } = useAppContext();
  const densityClass = density === 'compact' ? 'density-compact' : '';

  return (
    <div className={`app ${densityClass}`}>
      <div style={{ gridColumn: 1, width: 'var(--rail-w)', pointerEvents: 'none' }}></div>
      <Sidebar forceOpen={sidebarOpen} />
      
      <main className="main">
        <Topbar 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          crumbs={['Dashboard']}
        />
        <div >
          {children}
        </div>
      </main>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
