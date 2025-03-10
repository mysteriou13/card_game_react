import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CarteType } from "../../interface";

/* Définition du type pour l'état initial */
interface TestState {
    tabuser: CarteType[];
    tabcompteur: CarteType[];
    tabcreate: CarteType[];
    tabmaincommun: CarteType[];
    tabaffichecommun: CarteType[];
    nbCarteTypetour:number;
 
}

/* État initial */
const initialState: TestState = {
    tabuser: [],
    tabcreate: [],
    tabmaincommun: [],
    tabcompteur: [],
    tabaffichecommun: [],
    nbCarteTypetour : 2,
};

/* Création du slice Redux */
export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        addMultipleItems: (state, action: PayloadAction<CarteType[]>) => {
            // Remplace complètement tabuser par les nouvelles CarteTypes
            const newTabuser = [...action.payload];

            state.tabcreate = [...state.tabcreate, ...newTabuser];

            // Créer un tableau pour stocker les CarteTypes uniques
            let newTabCreate = [...action.payload];

            newTabuser.forEach((newCard) => {
                const exists = state.tabcreate.some(
                    (oldCard) =>
                        oldCard.famille_aleatoire === newCard.famille_aleatoire &&
                        oldCard.valeur_aleatoire === newCard.valeur_aleatoire
                );

                // Ajouter uniquement si elle n'existe pas déjà
                if (!exists) {
                    newTabCreate.push(newCard);
                }
            });


             /*distribution des CarteType*/
              let mainUser:CarteType[]=[];
              let mainCommun:CarteType[]=[];
              let maincomputeur:CarteType[]=[];

            for(let a:number = 0;  a !== newTabCreate.length; a++){

                if(a <=1 ){
                mainUser.push(newTabCreate[a]);  

                }

                if(a >= 2 && a<=6){

                    mainCommun.push(newTabCreate[a])
                }

                if(a >= 7){
                  maincomputeur.push(newTabCreate[a]);
                }
            }
             
            //  affichage des CarteType
            state.tabuser = mainUser;
            state.tabmaincommun = mainCommun;
            state.tabaffichecommun = mainCommun.slice(0,3); 
            state.tabcompteur = maincomputeur;

        },

        /*tour de jeu*/
        nexttour: (state) => {
            state.nbCarteTypetour++;
            if(state.tabaffichecommun.length !== 5){
            state.tabaffichecommun.push(state.tabmaincommun[state.nbCarteTypetour]); 
            }
        }
    },
});

/* Export des actions */
export const { addMultipleItems, nexttour } = testSlice.actions;

/* Export du reducer pour le store Redux */
export default testSlice.reducer;
