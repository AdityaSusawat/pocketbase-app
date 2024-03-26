import { useEffect, useState } from "react";

//? Add cart feature to each item

export default function ProductItem({ product }) {
  const { id, available, colour, images, productName, size } = product;

  return (
    <div>
      <h3>{productName}</h3>
      <p>{id}</p>
    </div>
  );
}
