import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './features/hamburger-slice'

export const store = configureStore({
  reducer: {
    hamburgerState: hamburgerReducer,
    products
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;