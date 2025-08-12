import { IProduct } from "./product.interface";

export interface IFavorites {
  favorites: IProduct[];
  counter: number;
}