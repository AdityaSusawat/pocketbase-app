// import { useEffect, useState } from "react";
// import pb from "../api/pbClient.js";

import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
