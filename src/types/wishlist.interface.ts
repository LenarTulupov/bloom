import { IProduct } from "./product.interface";

export interface IWishlist {
  wishlist: IProduct[];
  counter: number;
}