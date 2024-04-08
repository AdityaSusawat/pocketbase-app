//! If maxQuantity is added in the collection then handle the state accordingly

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/products/productsSlice";

import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";

export default function ProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0); //! maybe initialize with 1 if already in cart?

  const { currentProduct, productStatus, productError } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  console.log(currentProduct);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setQuantity(newValue);
    }
  };

  const renderProductDetails = () => {
    if (productStatus === "loading") {
      return <div>Loading...</div>;
    }
    if (productError) {
      return <div>ERROR: {productError}</div>;
    }
    if (!currentProduct) {
      return <div>No product</div>;
    }

    const { available, colour, images, price, productName, size } =
      currentProduct;
    const imageURLs = images.map((img) => {
      return `${import.meta.env.VITE_FILES_URL}/${
        currentProduct.collectionId
      }/${currentProduct.id}/${img}`;
    });

    return (
      <div className="grid grid-cols-2 gap-4 mt-8 ">
        <div className="border-[2px] ml-12">
          <ImageSlider imageURLs={imageURLs} />
        </div>
        <div className="px-4 py-8">
          <div className="text-5xl font-bold">{productName}</div>
          {!available && (
            <div className="text-lg font-medium mt-3 text-red-700">
              Currently out of stock
            </div>
          )}
          <div className="flex content-center items-center gap-x-8 my-8">
            <div className="text-3xl font-semibold">{price} INR</div>
            <div>
              <div className="text-xl text-green-700 font-medium">Save 12%</div>
              <div className="text-md">Inclusive of all taxes</div>
            </div>
          </div>
          <div className="text-lg">
            Can place the product description here if we introduce it in our
            products collection
          </div>
          <div className="mt-8">
            <div>{colour.length > 1 ? "Colours" : "Colour"}</div>
            <ul className="flex gap-2 mt-2">
              {colour.map((c) => (
                <li
                  key={c}
                  style={{ backgroundColor: c }}
                  className={`rounded-full w-8 h-8`}
                />
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <div>{size.length > 1 ? "Sizes" : "Size"}</div>
            <ul className="flex gap-2 mt-2">
              {size.map((s) => (
                <li
                  key={s}
                  className={
                    "flex border-[1px] w-10 h-10 justify-center items-center"
                  }
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex gap-x-8">
            <div className="text-center">
              <div>QUANTITY</div>
              <div className="mt-2">
                <button
                  aria-label="Decrease quantity"
                  className="py-3 px-6 border-[1px]"
                  onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
                  disabled={!available}
                >
                  -
                </button>
                <input
                  type="number"
                  className="no-spinners text-black py-3 border-[1px] text-center w-14"
                  value={quantity}
                  onChange={handleInputChange}
                  disabled={!available}
                  min="0"
                />
                <button
                  aria-label="Increase quantity"
                  className="py-3 px-6 border-[1px]"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  disabled={!available}
                >
                  +
                </button>
              </div>
            </div>
            <button className="border-[1px] px-6 py-3" disabled={!available}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Navbar />
      {renderProductDetails()}
    </div>
  );
}
