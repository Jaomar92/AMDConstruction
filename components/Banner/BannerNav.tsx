"use client";
import React from "react";

const BannerNav = () => {
  return (
    <div className="bg-[#354D71] max-w-2xl rounded-lg">
      <div className="flex items-center justify-around">
        <div className="cursor-pointer rounded-tl-lg rounded-bl-lg hover:bg-[#FFB92E] py-3 px-2 w-full transition-colors duration-150 ease-linear group">
          <p className="font-medium text-lg text-neutral-100/75 text-center group-hover:text-neutral-100">
            ABOUT US
          </p>
        </div>
        <div className="cursor-pointer hover:bg-[#FFB92E] py-3 px-2 w-full transition-colors duration-150 ease-linear group">
          <p className="font-medium text-lg text-neutral-100/75 text-center group-hover:text-neutral-100">
            SERVICES
          </p>
        </div>
        <div className="cursor-pointer rounded-tr-lg rounded-br-lg hover:bg-[#FFB92E] py-3 px-2 w-full transition-colors duration-150 ease-linear group">
          <p className="font-medium text-lg text-neutral-100/75 text-center group-hover:text-neutral-50">
            CONTACT
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerNav;
