import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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

  const goToSlide = (index) => setCurrentIndex(index);

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
            <div className="flex flex-col items-center mt-2 md:w-11/12">
              <div className="flex  w-full justify-center items-center gap-9 ">
                <button onClick={prevPhoto} disabled={currentIndex === 0}>
                  <ChevronLeftIcon className="w-6 text-gray-light hover:text-gray-extraBold cursor-pointer disabled:opacity-40" />
                </button>

                <div className="flex justify-center gap-2 ">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "bg-gray-medium/80 scale-130"
                          : "bg-gray-light/60 hover:bg-gray-500 "
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPhoto}
                  disabled={currentIndex === images.length - 1}
                >
                  <ChevronRightIcon className="w-6 text-gray-light hover:text-gray-extraBold cursor-pointer disabled:opacity-40" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
