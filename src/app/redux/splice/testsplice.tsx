import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* Interface de la carte */
interface Carte {
  famille_aleatoire: string;
  valeur_aleatoire: string;
  icone_carte: string;
  img: string;
}

/* État initial */
interface TestState {
  tabuser: Carte[];
}

const initialState: TestState = {
  tabuser: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addMultipleItems: (state, action: PayloadAction<Carte[]>) => {
      state.tabuser = [...state.tabuser, ...action.payload]; // Ajout sans mutation
    },
  },
});

export const { addMultipleItems } = testSlice.actions;
export default testSlice.reducer;
