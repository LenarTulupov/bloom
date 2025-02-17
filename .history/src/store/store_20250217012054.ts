import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './features/hamburger-slice'
import productsReducer from './features/'

export const store = configureStore({
  reducer: {
    hamburgerState: hamburgerReducer,
    products: productsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;