import React from "react";
import Slogan from "./Slogan";
import BannerNav from "./BannerNav";

const Banner = () => {
  return (
    <section className="bg-[#000000] h-fit">
      <div className="text-neutral-100 container mx-auto">
        <div className="flex items-stretch justify-center gap-3">
          <div className="min-h-[95vh] w-full md:w-2/4 space-y-12 relative md:top-44 ">
            <Slogan />
            <BannerNav />
          </div>
          {/* <div className="absolute bottom-72 left-16 pt-8 w-full z-20 hidden md:block"></div> */}
          <div
            className="
            hidden md:block
            z-10
            relative w-2/3 bg-[url('/images/crain.png')] bg-cover
            bg-left
            bg-no-repeat
             before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-transparent
            before:to-black
            before:opacity-75
            before:z-[-5]"
          >
            {/* <Image
              src={"/images/crain.png"}
              alt="Crain"
              fill
              className="object-cover object-left "
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
