'use client';
import React, { useState,useEffect } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Count_point } from "./function/Count_point";
import { testMainCard }  from "./test/testMainCard";
import { store } from './redux/store';
import PageLayout from "./components/Layouts/pageLayout";
import Carte from "./components/Carte";
import { addMultipleItems, nexttour } from "./redux/splice/testsplice";
import "./page.css";
import genere_datacard from "./function/genere_datacard";

function Page() {
  interface Carte {
    famille_aleatoire: string;
    valeur_aleatoire: string;
    icone_carte: string;
    img: string;
}

  const dispatch = useDispatch();
  let tabuser = useSelector((state: any) => state.test.tabuser);
  let tabcreate = useSelector((state: any) => state.test.tabcreate);
  let tabmainaffiche = useSelector((state:any) => state.test.tabaffichecommun)
  let tabmaincompteur  = useSelector((state:any) => state.test.tabcompteur)
  const [nbtour, setNbtour] = useState(0);




function Nbtour(){

  dispatch(nexttour());

}

/*fonction changement de carte*/
  function loadcarte() {
  
    // Vérifie qu'on n'a pas atteint 51 cartes
    if (tabcreate.length !== 51) {
      setNbtour((prev) => prev + 1); // Incrémente le tour

       
      let newCards: any[] = [];

      // Générer 4 cartes uniques
      while (newCards.length !== 9) {
        const newcarte = genere_datacard();

        // Vérifie si la carte  est pas déja afficher
        const existInTabuser = tabuser.some(
          (carte: any) =>
            carte.famille_aleatoire === newcarte.famille_aleatoire &&
            carte.valeur_aleatoire === newcarte.valeur_aleatoire
        );

        /*verif si la carte a pas déja étais generé avec la fonction genere_datacard()*/
        const existInNewCards = newCards.some(
          (carte: any) =>
            carte.famille_aleatoire === newcarte.famille_aleatoire &&
            carte.valeur_aleatoire === newcarte.valeur_aleatoire
        );

        /*verifi si la carte a pas déja sortir dans les tour précedant */
        const existInTabcreate = tabcreate.some(
          (carte: any) =>
            carte.famille_aleatoire === newcarte.famille_aleatoire &&
            carte.valeur_aleatoire === newcarte.valeur_aleatoire
        );

        /* veirif si la carte exisite pa*/

        if (!existInTabuser && !existInNewCards && !existInTabcreate) {
     
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



  useEffect(() => {
    loadcarte();
  }, []); 

  return (
    <PageLayout>
      <input type="button" value="tour Suivant" onClick={Nbtour} />


       
       <div className="box_commun">
        {tabmaincompteur.map((carte:any, index:number)=>
          
          <div className="div_img_back" key = {index}>
       
          <img className="img_back" src = "/img/dos_carte.jpg"/>

          </div>

          )}
       </div>

      <div className="tabcommun">

      {tabmainaffiche.map((carte: any, index: number) => (
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
     
      <div className="tabuser box_card">
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
