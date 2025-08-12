import { IProduct } from "@/types/product.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavorites {
  favorites: IProduct[];
  counter: number;
}

const initialState: IFavorites = {
  favorites: [],
  counter: 0
}

const favoritesSlice = createSlice({
  name: "favoritesState",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      if(!state.favorites.some((item) => item.id === product.id)) {
        state.favorites.push(product);
        state.counter = state.favorites.length;
      }
    },
  }
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;