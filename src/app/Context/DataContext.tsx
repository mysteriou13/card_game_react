'use client';
import { AnyAaaaRecord } from "node:dns";
import React, { createContext,useContext, useState, ReactNode } from "react";

interface DataContextType {
  tabuser: string[];
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
 const [tabuser, setTab] = useState(() => {
  const initialTab = [];
  return initialTab;
});
   
  
const addToTab = (item: { 
  famille_aleatoire: string; 
  valeur_aleatoire: string; 
  icone_carte: string; 
  img: string; 
}) => {
  setTab((pretab) => {
    // Vérifie si l'élément existe déjà
    const existingItem = pretab.find(
      (element) => 
        element.famille_aleatoire === item.famille_aleatoire &&
        element.valeur_aleatoire === item.valeur_aleatoire
    );

    // Si l'élément n'existe pas et que le tableau a moins de 4 éléments
    if (!existingItem && pretab.length < 4) {
      return [...pretab, item]; // Ajoute le nouvel élément
    }

    // Si le tableau a déjà 4 éléments ou si l'élément existe déjà
    return pretab; // Ne rien changer
  });
};






  return (
    <TabContext.Provider value={{ tabuser, addToTab }}>
      {children}
    </TabContext.Provider>
  );
}


