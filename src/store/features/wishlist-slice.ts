import { IProduct } from "@/types/product.interface";
import { IWishlist } from "@/types/wishlist.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IWishlist = {
  wishlist: [],
  counter: 0,
};

const wishlistSlice = createSlice({
  name: "wishlistState",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const isInWishlist = state.wishlist.some((item) => item.id === product.id);

      if (!isInWishlist) {
        state.wishlist.push(product);
      } else {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== product.id
        );
      }
      state.counter = state.wishlist.length;
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

export const isProductInWishlist = (state: {wishlistState: IWishlist}, productId: number) => {
  return state.wishlistState.wishlist.some((item) => item.id === productId);
}
