import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Carousel = ({ item }) => {
  const images = [
    item.primaImmagine,
    item.secondaImmagine,
    item.terzaImmagine,
  ].filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const swipeThreshold = 50;

  // PRECARICAMENTO IMMAGINI
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  if (images.length === 0) return null;

  const nextPhoto = () => {
    setCurrentIndex((ind) => (ind === images.length - 1 ? ind : ind + 1));
  };

  const prevPhoto = () => {
    setCurrentIndex((ind) => (ind === 0 ? ind : ind - 1));
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // --- Swipe handlers ---
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > swipeThreshold) nextPhoto();
    if (distance < -swipeThreshold) prevPhoto();
  };

  return (
    <div className="flex justify-center">
      <div className="inline-block relative ">
        {/* FRECCIA SINISTRA - sopra la foto, visibile anche su mobile */}
        {currentIndex > 0 && (
          <button
            onClick={prevPhoto}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-2"
          >
            <ChevronLeftIcon className="w-8 text-gray-light hover:text-gray-extraBold" />
          </button>
        )}

        {/* FRECCIA DESTRA - sopra la foto, visibile anche su mobile */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={nextPhoto}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-2"
          >
            <ChevronRightIcon className="w-8 text-gray-light hover:text-gray-extraBold" />
          </button>
        )}

        {/* WRAPPER IMMAGINE */}
        <div
          className="relative h-[60vh] md:h-[80vh] md:w-[40vw] flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={item.titolo}
            className="max-h-full max-w-full object-contain rounded-sm art-shadow transition-all duration-300 ease-out"
          />
        </div>

        {/* PALLINI SOTTO */}
        {images.length > 1 && (
          <div className="flex flex-col items-center mt-2 md:w-11/12">
            <div className="flex w-full justify-center items-center gap-2">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
