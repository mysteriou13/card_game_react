import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* Interface de la carte */
interface Carte {
    famille_aleatoire: string;
    valeur_aleatoire: string;
    icone_carte: string;
    img: string;
}

/* Définition du type pour l'état initial */
interface TestState {
    tabuser: Carte[];
    tabcreate:Carte[];
}

/* État initial correctement typé */
const initialState: TestState = {
    tabuser: [],
    tabcreate:[],
};

/* Création du slice Redux */
export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        addMultipleItems: (state, action: PayloadAction<Carte[]>) => {
            // Remplace complètement tabuser par les nouvelles cartes
            state.tabuser = [...action.payload];
        
            // Vérifier les doublons avant d'ajouter les nouvelles cartes à tabcreate
            const newTabCreate = [...state.tabcreate]; // Copie de tabcreate pour éviter la mutation directe
        
            state.tabuser.forEach((newCard) => {
                const exists = state.tabcreate.some(
                    (oldCard) =>
                        oldCard.famille_aleatoire === newCard.famille_aleatoire &&
                        oldCard.valeur_aleatoire === newCard.valeur_aleatoire
                );
        
                // Ajouter la carte uniquement si elle n'existe pas déjà
                if (!exists) {
                    newTabCreate.push(newCard);
                }
            });
        
            // Mettre à jour tabcreate avec la nouvelle liste sans doublons
              
            state.tabcreate = newTabCreate;
        }
        
    },
});

/* Export des actions */
export const { addMultipleItems } = testSlice.actions;

/* Export du reducer pour le store Redux */
export default testSlice.reducer;
