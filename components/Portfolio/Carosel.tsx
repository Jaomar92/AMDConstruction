"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/images/image2.jpg";
import img2 from "@/public/images/image3.jpg";
interface ImageData {
  src: StaticImageData;
}

// Try this Carousel
//https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

const images: ImageData[] = [
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
];

const Carosel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };
  return (
    <div className="relative w-full mx-auto mt-4">
      <div
        className="relative h-[660px] mx-12 group shadow-md"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          objectFit="cover"
          className="rounded-xl transition-all duration-200 ease-in-out cursor-pointer"
        />
        <h2>Client</h2>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform h-12 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
        >
          prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform h-12 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
        >
          next
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carosel;
