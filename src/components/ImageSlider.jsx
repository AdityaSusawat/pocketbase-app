import { IconArrowBigRight, IconArrowBigLeft } from "@tabler/icons-react";
import { useState } from "react";

export default function ImageSlider({ imageURLs }) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    const size = imageURLs.length;
    setImageIndex((prev) => (prev + 1) % size);
  };

  const showPrevImage = () => {
    const size = imageURLs.length;
    if (imageIndex === 0) {
      setImageIndex(size - 1);
    } else {
      setImageIndex((prev) => (prev - 1 + size) % size);
    }
  };

  return (
    <div className="w-[100%] h-[100%] relative">
      {imageURLs.length !== 1 && (
        <button onClick={showPrevImage} className="img-slider-btn">
          <IconArrowBigLeft color="white" />
        </button>
      )}
      <img
        className="object-cover w-[100%] h-[100%] block aspect-[10/6] "
        src={imageURLs[imageIndex]}
        alt="Product Image"
      />
      {imageURLs.length !== 1 && (
        <button onClick={showNextImage} className="img-slider-btn right-0">
          <IconArrowBigRight color="white" />
        </button>
      )}
    </div>
  );
}
