// src/app/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import testspliceReducer from './splice/testsplice'; // Importez le reducer de votre slice

export const store = configureStore({
  reducer: {
    test: testspliceReducer, // Associez le reducer au nom 'test'
  },
});

export type RootState = ReturnType<typeof store.getState>; // Utilisation correcte des types TypeScript
export type AppDispatch = typeof store.dispatch;
