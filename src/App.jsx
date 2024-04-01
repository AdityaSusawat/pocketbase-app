import ImageSlider from "./components/ImageSlider";
import img1 from "./imgs/sp1.png";
import img2 from "./imgs/sp2.png";
import img3 from "./imgs/sp3.png";
import img4 from "./imgs/sp4.png";
import "./styles/main.css";

import { BackgroundGradient } from "./components/BackgroundGradient";

const IMAGES = [img1, img2, img3, img4];

export default function App() {
  return (
    <>
      <BackgroundGradient className="max-w-[1200px] w-[100%] mx-auto my-0">
        <ImageSlider imageURLs={IMAGES} />
      </BackgroundGradient>
    </>
  );
}
