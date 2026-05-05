'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  ws: string;
  setWs: (ws: string) => void;
  range: string;
  setRange: (range: string) => void;
  density: string;
  setDensity: (density: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [ws, setWs] = useState('team');
  const [range, setRange] = useState('this_month');
  const [density, setDensity] = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppContext.Provider value={{ 
      ws, setWs, 
      range, setRange, 
      density, setDensity, 
      sidebarOpen, setSidebarOpen 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
