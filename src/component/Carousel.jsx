import { useState } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

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
        <div className="flex justify-center md:w-200 md:h-120 h-80 2xl:w-300 2xl:h-200">
            <img src={images[currentIndex]} alt={item.titolo} className="shadow-xl rounded-sm"/> 
        </div>
     
      {images.length > 1 && (
        <div className="flex justify-center gap-6 mt-2">
          <button onClick={prevPhoto} disabled={currentIndex === 0}>
            <ArrowLeftCircleIcon className="w-8 text-gray-light hover:text-gray-extraBold"/>
          </button>
          <p className="font-kosugi text-gray-light self-center"> {currentIndex +1} of {images.length}</p>
          <button
            onClick={nextPhoto}
            disabled={currentIndex === images.length - 1}
          >
            <ArrowRightCircleIcon className="w-8  text-gray-light  hover:text-gray-extraBold"/>
          </button>
        </div>
      )}
    </div>
  );
};
export default Carousel;
