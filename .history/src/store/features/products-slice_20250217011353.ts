import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { URL } from "@/constants/url";
import { IProduct } from "@/types/product.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts =  createAsyncThunk<IProduct[], void>(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${URL}${API_ENDPOINTS.PRODUCTS}`);
    if(!response.ok) {
      throw new Error("Failed ")
    }
  }
)