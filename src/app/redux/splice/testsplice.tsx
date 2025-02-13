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
}

/* État initial correctement typé */
const initialState: TestState = {
    tabuser: [],
};

/* Création du slice Redux */
export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        addMultipleItems: (state, action: PayloadAction<Carte[]>) => {
        
          state.tabuser.push(...action.payload);

          }
          
    },
});

/* Export des actions */
export const { addMultipleItems } = testSlice.actions;

/* Export du reducer pour le store Redux */
export default testSlice.reducer;
