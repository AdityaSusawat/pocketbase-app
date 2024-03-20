import { useEffect, useState } from "react";
import pb from "../api/pbClient.js";

export default function ProductList() {
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
      <ul>
        {products.map((product) => (
          <li key={product.id}> {product.product_name}</li>
        ))}
      </ul>
    </div>
  );
}
