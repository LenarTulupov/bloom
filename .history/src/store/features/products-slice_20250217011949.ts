import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { URL } from "@/constants/url";
import { IProduct } from "@/types/product.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts =  createAsyncThunk<IProduct[], void>(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${URL}${API_ENDPOINTS.PRODUCTS}`);
    if(!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  }
);

interface IProductsState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductsState = {
  products: [],
  loading: false,
  error: null
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed"
      })
  }
})