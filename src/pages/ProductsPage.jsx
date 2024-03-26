import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";

import { fetchProducts } from "../features/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  //! Check
  //* using dispatch in dependency array is like leaving it empty, but this follows the best practices
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}
