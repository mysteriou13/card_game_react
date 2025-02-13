'use client';
import React, { useEffect, useRef } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store'; // Importez votre store Redux
import { addMultipleItems } from "./redux/splice/testsplice"; // Importez l'action Redux
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";

import "./page.css";
import genere_card from "./function/genere_card";

function Page() {
  const dispatch = useDispatch(); // Assurez-vous que `dispatch` est bien défini ici
  const tabuser = useSelector((state: any) => state.test.tabuser); // Utilisation de `useSelector` pour récupérer les cartes du store
  const effectRan = useRef(false); // Ref to track if effect has run

  useEffect(() => {
    if (!effectRan.current) {
      // Générer des cartes
      const newCards = [];
      for (let a: number = 0; a < 4; a++) {
        const newcarte = genere_card();
        const found = newCards.find((carte:any) => carte.famille_aleatoire == newcarte.famille_aleatoire &&
       carte.valeur_aleatoire == newcarte.valeur_aleatoire);

         if(!found){
        newCards.push(newcarte);
         }
         
      }
  
      // Si on a moins de 4 cartes, on peut ajouter des cartes manquantes ici (en cas d'erreur dans la génération)
      if (newCards.length === 4) {
        // Dispatch des cartes générées à Redux
        dispatch(addMultipleItems(newCards)); // Envoi des cartes à Redux
      } else {
        console.error("Erreur : il manque des cartes dans newCards");
      }
  
      effectRan.current = true; // Marquer que l'effet a été exécuté
    }
  }, [dispatch]); // L'effet se déclenche une seule fois (lors du montage)
  

  return (
    <PageLayout>
      <p>The Card Game</p>
      <div className="box_card">
        {/* Rendering des cartes */}
        {tabuser.map((carte: { famille_aleatoire: string; valeur_aleatoire: string; icone_carte: string; img: string; }, index: React.Key) => (
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
    <Provider store={store}>
      <Page />
    </Provider>
  );
}
