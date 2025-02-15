'use client';
import React, { useEffect, useRef } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { addMultipleItems } from "./redux/splice/testsplice";
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";

import "./page.css";
import genere_card from "./function/genere_card";

function Page() {
  const dispatch = useDispatch();
  const tabuser = useSelector((state: any) => state.test.tabuser);
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      let newCards = [];

      while (newCards.length < 4) {
        const newcarte = genere_card();

        // Vérifier si la carte existe déjà dans `tabuser` ou `newCards`
        const exists = [tabuser, newCards].find(
          (carte: any) =>
            carte.famille_aleatoire === newcarte.famille_aleatoire &&
            carte.valeur_aleatoire === newcarte.valeur_aleatoire
        );

        if (!exists) {
          newCards.push(newcarte);
        }
      }

      // Dispatch uniquement si des nouvelles cartes sont générées
      if (newCards.length > 0) {
        dispatch(addMultipleItems(newCards));
      }

      effectRan.current = true; // Empêche l'exécution multiple
    }
  }, [dispatch, tabuser]); // Exécute une seule fois au montage

  return (
    <PageLayout>
      <p>The Card Game</p>
      <div className="box_card">
        {tabuser.map((carte: any, index: number) => (
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
