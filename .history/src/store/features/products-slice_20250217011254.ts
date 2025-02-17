import { IProduct } from "@/types/product.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts =  createAsyncThunk<IProduct[], void>(
  "products/fetchProducts",
  
)