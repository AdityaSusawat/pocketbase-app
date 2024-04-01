// Product Page
{
  /* <div className="flex items-center justify-center m-4 bg-gray-100">
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
</div>; */
}

export default function Tmp() {
  return (
    <>
      <div className="flex flex-col pt-5 w-[300px] mx-auto bg-white border-r border-gray-200 border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62e028469b7de33a06e0c2d16bbdc9edf01cd58807c6bcf1a61605c5ac0b5a63?"
          className="ml-5 aspect-[3.33] w-[99px] max-md:ml-2.5"
        />
        <div className="self-start mt-14 ml-5 text-xs font-semibold leading-5 text-neutral-400 max-md:mt-10 max-md:ml-2.5">
          D A S H B O A R D
        </div>
        <div className="flex flex-col px-5 py-3 mt-4 w-full text-sm font-semibold leading-5 bg-white">
          <div className="flex gap-5 justify-center w-full whitespace-nowrap text-zinc-800">
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b6f88159f337654b50282c1042afa3de2cb20121514e2b1da10241e0b350595?"
                className="shrink-0 self-start w-5 aspect-square"
              />
              <div>Dashboard</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b03f4e18a2bd36e12a4b10d8a6b59f9c1814d20b80f5dbe9e40200ea63ccf0d?"
              className="shrink-0 self-start w-5 aspect-square"
            />
          </div>
          <div className="flex flex-col items-center pr-20 pl-7 mt-4 text-gray-500 max-md:px-5">
            <div className="text-zinc-800">Analytics</div>
            <div className="mt-3">Finance</div>
            <div className="mt-3">Job Board</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 whitespace-nowrap bg-white">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71bfada63ea499315d3f706d823fccbaf59ccf91b9ea573cda297f3b338d6b8?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>Messages</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="shrink-0 self-start w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 whitespace-nowrap bg-white">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53937135c468bf9911ac784064aa2a98f4a4e7deb39f016c3d14a51274e948e4?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>Friends</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="shrink-0 self-start w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 whitespace-nowrap bg-white">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dabec0c2906c8cda00c3c832b2100d44de575f08137fd25942582ea8052ba29c?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>Apps</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="shrink-0 self-start w-5 aspect-square"
          />
        </div>
        <div className="self-start mt-8 ml-5 text-xs font-semibold leading-5 text-neutral-400 max-md:ml-2.5">
          P A G E S
        </div>
        <div className="flex gap-5 justify-center px-5 py-3 mt-4 w-full text-sm font-semibold leading-5 text-gray-500 bg-white">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06147bbe82c89e72b2c0d416a2714a81e184e774b7e9a2328395553336a81e9d?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>Help Center</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="shrink-0 self-start w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 bg-white">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae79b81f222127444475e095a5949bd3b88a73e03d9e441186cd06317b91c89b?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>File Manager</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="shrink-0 self-start w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between px-5 py-3 mt-96 border-t border-gray-200 border-solid max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b04e0cb69f9867dbdbd422302f8c236bbcbbbe02fae172bf82909b560af4534?"
            className="shrink-0 w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e7bfcb6dd8570986be6363aee205e8ecb0676b8830f3a8f7c2661f4e8ca8e02?"
            className="shrink-0 w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9425ba7bd1bf0ec05eff6966063b21acceb12554f0095d8a677b66c74df1d90e?"
            className="shrink-0 w-5 aspect-square"
          />
        </div>
      </div>
    </>
  );
}
