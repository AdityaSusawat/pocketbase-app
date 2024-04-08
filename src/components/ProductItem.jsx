import "../styles/components/product.css";

// import { useEffect, useState } from "react";
// import ImageSlider from "./ImageSlider";
import { BackgroundGradient } from "./BackgroundGradient";

//? Add cart feature to each item

export default function ProductItem({ product }) {
  const { id, available, colour, images, productName, size, price } = product;

  let imageURLs = images.map((img) => {
    return `${import.meta.env.VITE_FILES_URL}/${product.collectionId}/${
      product.id
    }/${img}`;
  });

  return (
    <>
      <BackgroundGradient className="h-full w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden bg-black/5 p-[1px] cursor-pointer">
        <div className="flex items-end justify-end h-56 w-full bg-cover rounded-xl">
          {/* <ImageSlider imageURLs={imageURLs} /> */}
          <img
            className="object-cover w-[100%] h-[100%] block aspect-[10/6] "
            src={imageURLs[0]}
            alt="Product Image"
          />
        </div>
        <div className="flex px-1 py-1 sm:px-4 sm:py-3 justify-between h-20 bg-slate-950">
          <div>
            <h3 className="uppercase">{productName}</h3>
            <span className="mt-2">{price} INR</span>
          </div>
          <div className="flex flex-row w-[100px] sm:w-auto">
            <button className="px-2 py-2 sm:px-3 rounded-md bg-blue-600 text-white mr-5 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
            <button className="py-2 px-2 sm:px-3 rounded-md text-slate-300 border border-slate-200">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </>
  );
}
