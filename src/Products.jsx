import { useEffect, useState } from "react";
import pb from "./pbClient.js";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        pb.autoCancellation(false);
        const list = await pb.collection("products").getList();
        setProducts(list.items);
      } catch (error) {
        console.error("Failed to retrieve products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}> {product.product_name}</li>
        ))}
      </ul>
    </div>
  );
}
