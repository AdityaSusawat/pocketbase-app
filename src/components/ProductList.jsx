// import { useEffect, useState } from "react";
// import pb from "../api/pbClient.js";

import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList({ searchText, products }) {
  //Fetching all the products from redux store
  //const products = useSelector((state) => state.products.products);

  //!Improve search filtering
  const filteredProducts = products.filter((product) => {
    return product.productName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="w-full">
      {filteredProducts.length === 0 ? (
        <div className="px-[3%] flex justify-center text-6xl mt-28">
          {"Couldn't find anything :("}
        </div>
      ) : (
        <ul className="px-[3%] grid gap-4 xl:gap-16 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductItem product={product} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
