'use client';
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";
import { addMultipleItems } from "./redux/splice/testsplice";
import "./page.css";
import genere_datacard from "./function/genere_datacard";

function Page() {
  const dispatch = useDispatch();
  const tabuser = useSelector((state: any) => state.test.tabuser);
  const tabcreate = useSelector((state: any) => state.test.tabcreate);

  const [nbtour, setNbtour] = useState(0);

  function next() {
    // Vérifie qu'on n'a pas atteint 51 cartes
    if (tabcreate.length !== 51) {
      setNbtour((prev) => prev + 1); // Incrémente le tour

      let newCards: any[] = [];

      // Générer 4 cartes uniques
      while (newCards.length < 4) {
        const newcarte = genere_datacard();

        // Vérifie si la carte existe déjà dans `tabuser` ou `newCards`
        const existInTabuser = tabuser.some(
          (carte: any) =>
            carte.famille_aleatoire === newcarte.famille_aleatoire &&
            carte.valeur_aleatoire === newcarte.valeur_aleatoire
        );

        const existInNewCards = newCards.some(
          (carte: any) =>
            carte.famille_aleatoire === newcarte.famille_aleatoire &&
            carte.valeur_aleatoire === newcarte.valeur_aleatoire
        );

        if (!existInTabuser && !existInNewCards) {
          newCards.push(newcarte);
        }
      }

      // Dispatch des nouvelles cartes dans Redux
      if (newCards.length > 0) {
        dispatch(addMultipleItems(newCards));
      }
    }else{

    }
  }

  return (
    <PageLayout>
      <input type="button" value="Suivant" onClick={next} />
      <p>The Card Game (Tour {nbtour})</p>
      <div className="box_card">
        {tabuser.map((carte: any, index: number) => (
          <Carte
            key={index}
            data={{
              famille_aleatoire: carte.famille_aleatoire,
              valeur_aleatoire: carte.valeur_aleatoire,
              icone_carte: carte.icone_carte,
              img: carte.img,
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
