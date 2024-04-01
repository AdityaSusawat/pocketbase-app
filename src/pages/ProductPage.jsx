import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/products/productsSlice";

import Navbar from "../components/Navbar";

export default function ProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { currentProduct, productStatus, productError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  console.log(currentProduct);

  return (
    <div>
      <Navbar />
      {productStatus === "loading" ? (
        <div>Loading...</div>
      ) : productError ? (
        <div>ERROR: {productError}</div>
      ) : currentProduct ? (
        <div>{currentProduct.productName}</div>
      ) : (
        <div>no product</div>
      )}
    </div>
  );
}
