import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './features/hamburger-slice'
import productsReducer from './features/products-slice'
import dropdownStateReducer from './features/dropdown-slice'
import scrollStateReducer from './features/scroll-slice'

export const store = configureStore({
  reducer: {
    hamburgerState: hamburgerReducer,
    products: productsReducer,
    dropdownState: dropdownStateReducer,
    scrollState: scrollStateReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;