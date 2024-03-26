// Product Page
<div className="flex items-center justify-center m-4 bg-gray-100">
  <div className="flex font-sans">
    <div className="flex-none w-48 relative">
      <img
        src={imageLinks[0]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold text-gray-900">
          {productName}
        </h1>
        <div className="text-lg font-semibold text-black-500">{price} INR</div>
        {available ? (
          <div className="w-full flex-none text-sm font-medium text-black-700 mt-2">
            In stock
          </div>
        ) : (
          <div className="w-full flex-none text-sm font-medium text-red-700 mt-2">
            Out of stock
          </div>
        )}
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-sm">
          {size.length > 0 &&
            size.map((s) => {
              return (
                <label key={s}>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value={s}
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    {s}
                  </div>
                </label>
              );
            })}
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-md border border-black-800 text-gray-900"
            type="button"
            disabled={!available}
          >
            Add to cart
          </button>
        </div>
        <button
          className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
          type="button"
          aria-label="Favorites"
        >
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-700">Free shipping</p>
    </form>
  </div>
</div>;
