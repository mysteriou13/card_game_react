'use client';
import React, { createContext,useContext, useState, ReactNode } from "react";

interface DataContextType {
  tab: string[];
  addToTab: (item: any) => void;
}

const TabContext = createContext<DataContextType>(undefined);

export const useCarte = ():DataContextType => {
    
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};



export function DataProvider({ children }: { children: ReactNode }) {
 const [tab, setTab] = useState(() => {
  const initialTab = [];
  return initialTab;
});
   
  
  const addToTab = (item: any) => {
    setTab((prevTab) => [...prevTab, item]);
  };

  return (
    <TabContext.Provider value={{ tab, addToTab }}>
      {children}
    </TabContext.Provider>
  );
}


