import { useEffect, useState } from "react";

//? Add cart feature to each item

export default function ProductItem({ product }) {
  const { id, available, colour, images, productName, size } = product;

  let imageLinks = images.map((img) => {
    return `${import.meta.env.VITE_FILES_URL}/${product.collectionId}/${
      product.id
    }/${img}`;
  });

  console.log(imageLinks);

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{productName}</h3>
      <p>{id}</p>
      {imageLinks.length > 0 &&
        imageLinks.map((link) => {
          return (
            <img key={link} src={link} alt={link} style={{ width: "100px" }} />
          );
        })}
    </div>
  );
}
