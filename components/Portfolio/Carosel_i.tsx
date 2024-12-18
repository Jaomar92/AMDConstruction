"use client";
import React, { useState } from "react";

const slideData = [
  {
    title: "Impian Meridian",
    des: "The proposed development of two 5 storey office blocks (40 units), 27 & 28 storey service apartment blocks (481 units) above lot 39015 and 39016, Subang Industrial Park, USJ 1.",
    MYR: "RM10,011,000.00",
    location: "USJ 1, Subang Jaya",
    scope:
      "Built the 7 storey underground parking, swimming pools and public facilities on the 8th floor as part of the requirements for the completion of the project.",
  },
  {
    title: "Energy Commission",
    des: "This is an energy efficient and sustainable 8 storey office building on a 5000 sq m site. The design is inspired by the “diamond form” which is a passive design response to energy efficiency. The building is geared towards being a showcase as well as a landmark building in Precinct 2, Putrajaya.",
    MYR: "RM26,310,000.00",
    location: "Precinct 2, Putrajaya",
    scope:
      "Cadangan pembangunan sebuah bangunan pejabat korporat 8 tingkat dan 2 tingkat basement",
  },
  {
    title: "SMK Puncak Alam 3",
    des: "Proposed the construction and completion of Industrialised Building Systems (IBS) project for SMK Puncak Alam 3, which comprises 24 classrooms and related facilities at phase 3 above lot 7664 in the sub-district of Ijok",
    MYR: "RM6,660,726.30",
    location: "Bandar Puncak Alam, Selangor",
    scope:
      "Cadangan pembangunan sebuah bangunan pejabat korporat 8 tingkat dan 2 tingkat basement",
  },
];

const Carosel_i = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<string>("");

  const prevSlide = (): void => {
    if (animating) return;
    setAnimating(true);
    setDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length
    );
  };

  const nextSlide = (): void => {
    if (animating) return;
    setAnimating(true);
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  return (
    <div className="h-[70vh] bg-[#FFB92E] rounded-2xl relative overflow-hidden">
      <div className="h-full w-full grid place-content-center relative">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${
              index === currentIndex
                ? direction === "next"
                  ? "opacity-100 animate-enter-next"
                  : "opacity-100 animate-enter-prev"
                : direction === "next"
                ? "opacity-0 animate-exit-next"
                : "opacity-0 animate-exit-prev"
            }`}
            onAnimationEnd={() => setAnimating(false)}
          >
            <h1>{slide.title}</h1>
          </div>
        ))}
      </div>
      <div className="absolute p-2 bg-blue-200 top-1/2 translate-y-[-50%] left-2">
        <button onClick={prevSlide}>Prev</button>
      </div>
      <div className="absolute p-2 bg-blue-200 top-1/2 translate-y-[-50%] right-2">
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carosel_i;