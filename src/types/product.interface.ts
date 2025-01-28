export interface IProduct {
  id: number;
  title: string;
  thumbnail: string;
  price_new: number;
  price_old: number;
  sizes: ISize[];
  color: string;
}

export interface ISize {
  id: number;
  abbreviation: string;
}
