//! Losing focus once the search is done

import { useEffect, useRef, useState } from "react";

import ProductList from "../components/ProductList";

import { fetchProducts } from "../features/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useDebounce } from "../hooks/useDebounce";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { listStatus, error } = useSelector((state) => state.products);

  //Search bar
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);
  const searchInputRef = useRef(null);

  //! Check
  //* using dispatch in dependency array is like leaving it empty, but this follows the best practices
  useEffect(() => {
    dispatch(fetchProducts());
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [dispatch, debouncedSearchText]); //Need search params here

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  if (listStatus === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(`${searchText}, ${debouncedSearchText}`);

  return (
    <div>
      <Navbar />
      <h1 className="my-6 text-4xl text-center">Products</h1>

      <div className="flex">
        <div className=" py-2 px-[3%] text-center border-[1px] border-r-0">
          <h1 className="text-2xl">Options</h1>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            className="text-black py-1 px-2 mt-6"
            placeholder="Search a product"
            ref={searchInputRef}
          />
          <div className="grid grid-cols-1 mt-10 gap-3 px-3">
            <button className="filter-btn">PRESS</button>
            <button className="filter-btn">PRESS</button>
            <button className="filter-btn">PRESS</button>
          </div>
        </div>
        <ProductList searchText={debouncedSearchText} />
      </div>
    </div>
  );
}
