import "./styles/main.css";

import ImageTrack from "./components/ImageTrack";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="relative" aria-label="ImageTrack">
        <div className="text-9xl flex absolute max-w-[50%] h-full p-12 font-semibold text-center text">
          CLOTHES YOU LOVE
        </div>

        <ImageTrack className="z-10" />
        <div className="text-9xl flex absolute right-0 -z-10 max-w-[50%] top-0 h-full p-12 font-semibold text-center text">
          CLOTHES LOVE YOU
        </div>
      </div>
    </>
  );
}
