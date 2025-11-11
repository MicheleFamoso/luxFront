import { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

const Carousel = ({ item }) => {
  const images = [
    item.primaImmagine,
    item.secondaImmagine,
    item.terzaImmagine,
  ].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  if (images.length === 0) return null;

  const nextPhoto = () => {
    setCurrentIndex((ind) => (ind === images.length - 1 ? ind : ind + 1));
  };

  const prevPhoto = () => {
    setCurrentIndex((ind) => (ind === 0 ? ind : ind - 1));
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-block">
          <img
            src={images[currentIndex]}
            alt={item.titolo}
            className="shadow-xl rounded-sm md:w-11/12"
          />

          {images.length > 1 && (
            <div className="flex justify-center gap-16 mt-2  md:w-11/12">
              <button onClick={prevPhoto} disabled={currentIndex === 0}>
                <ArrowLeftCircleIcon className="w-10 text-gray-light hover:text-gray-extraBold cursor-pointer" />
              </button>

              <p className="font-kosugi text-gray-light text-3xl font-bold self-center">
                {currentIndex + 1} of {images.length}
              </p>

              <button
                onClick={nextPhoto}
                disabled={currentIndex === images.length - 1}
              >
                <ArrowRightCircleIcon className="w-10 text-gray-light hover:text-gray-extraBold cursor-pointer" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
