import React from "react";
import Carosel from "./Carosel";

const OurWork = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="space-y-1">
        <p className="text-lg font-semibold">Portfolio,</p>
        <h2 className="text-4xl font-black text-[#354D71]">
          Our Previous Work
        </h2>
        <div>
          <Carosel />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
