'use client';
import React, { useEffect, useRef } from "react";
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";
import { DataProvider, useCarte } from "./Context/DataContext";
import "./page.css";
import genere_card from "./function/genere_card";

function Page() {
  const { tabuser, addToTab } = useCarte();
  const effectRan = useRef(false); // Ref to track if effect has run

  useEffect(() => {

      // Add cards until there are exactly 4 cards
      for (let a: number = 0; a < 4; a++) {
        const carte = genere_card();
        
        // Adding the card to the state only if it's unique
        addToTab({
          famille_aleatoire: carte.famille_aleatoire,
          valeur_aleatoire: carte.valeur_aleatoire,
          icone_carte: carte.icone_carte,
          img: carte.img
        });
      }
      effectRan.current = true; // Mark that the effect has run
    
  }, [addToTab]); // Run the effect only once

  return (
    <PageLayout>
      <p>The Card Game</p>
      <div className="box_card">
        {/* Rendering cards */}
        {tabuser.map((carte, index) => (
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
