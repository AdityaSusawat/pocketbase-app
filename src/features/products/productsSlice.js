import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pb from "../../api/pbClient";

pb.autoCancellation(false);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await pb.collection("products").getList();
    return response.items;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", //'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
