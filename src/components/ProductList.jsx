// import { useEffect, useState } from "react";
// import pb from "../api/pbClient.js";

import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <div className="px-2 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
