import { IFavorites } from "@/types/favorites.interface";
import { IProduct } from "@/types/product.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFavorites = {
  favorites: [],
  counter: 0,
};

const favoritesSlice = createSlice({
  name: "favoritesState",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const isFavorite = state.favorites.some((item) => item.id === product.id);

      if (!isFavorite) {
        state.favorites.push(product);
      } else {
        state.favorites = state.favorites.filter(
          (item) => item.id !== product.id
        );
      }
      state.counter = state.favorites.length;
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

export const isProductInFavorites = (state: {favoritesState: IFavorites}, productId: number) => {
  return state.favoritesState.favorites.some((item) => item.id === productId);
}
