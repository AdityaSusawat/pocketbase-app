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

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await pb
      .collection("products")
      .getFirstListItem(`id="${productId}"`);
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    currentProduct: null,

    listStatus: "idle", //'idle', 'loading', 'succeeded', 'failed'
    listError: null,

    productStatus: "idle",
    productError: null,
  },
  reducers: {
    // setProducts: (state, action) => {
    //   return action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.listStatus = "failed";
        state.listError = action.error.message;
      })
      //fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productStatus = "failed";
        state.productError = action.error.message;
      });
  },
});

//export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
