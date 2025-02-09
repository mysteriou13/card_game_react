'use client';
import React, { useEffect, useRef } from "react";
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";
import { DataProvider, useCarte } from "./Context/DataContext";
import "./page.css";
import genere_card from "./function/genere_card";

function Page() {
  const { tab, addToTab } = useCarte();
  const effectRan = useRef(false); // Ref to track if effect has run

  useEffect(() => {
    if (!effectRan.current) {
      // Générer des cartes et les ajouter au contexte
      for (let a = 0; a <= 3; a++) {
        const carte = genere_card();
        
        // Ajouter l'objet carte avec les propriétés nécessaires dans le contexte
        addToTab({
          famille_aleatoire: carte.famille_aleatoire,
          valeur_aleatoire: carte.valeur_aleatoire,
          icone_carte: carte.icone_carte,
          img: carte.img
        });
      }
      effectRan.current = true; // Marquer que l'effet a été exécuté
    }
  }, [addToTab]); // L'effet ne s'exécute qu'une seule fois

  return (
    <PageLayout>
      <div className="box_card">
     
    </div>
      <p>The Card Game</p>
      <div className="box_card">
        {/* Affichage des cartes */}
        
        {tab.map((carte, index) => (
          <Carte
            key={index}
            data={{
              famille_aleatoire: carte.famille_aleatoire,
              valeur_aleatoire: carte.valeur_aleatoire,
              icone_carte: carte.icone_carte,
              img: carte.img
            }}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  );
}
