"use client";
import React, { useState } from "react";

interface DropdownProps {
  title: string;
  items: string[];
  hoverState: boolean;
  setHoverState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  hoverState,
  setHoverState,
}) => {
  return (
    <div
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className="relative rounded-t-lg cursor-pointer hover:bg-[#FFB92E] py-3 px-2 w-full transition-colors duration-150 ease-linear group"
    >
      <p className="font-medium text-lg text-neutral-100/75 text-center group-hover:text-neutral-100">
        {title}
      </p>
      <div
        className={`absolute top-14 left-0 w-full rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
          hoverState ? "max-h-40" : "max-h-0"
        }`}
        style={{ backgroundColor: "#FFB92E" }}
      >
        <div className="p-4">
          {items.map((item, index) => (
            <div key={index} className="">
              <p className="font-semibold">{item}</p>
              {index < items.length - 1 && <hr className="my-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BannerNav = () => {
  const [isHovered1, setIsHovered1] = useState<boolean>(false);
  const [isHovered2, setIsHovered2] = useState<boolean>(false);
  const [isHovered3, setIsHovered3] = useState<boolean>(false);

  return (
    <div className="bg-[#354D71] max-w-2xl rounded-lg">
      <div className="flex items-center justify-around relative">
        <Dropdown
          title="ABOUT US"
          items={["Who We Are", "What We Do"]}
          hoverState={isHovered1}
          setHoverState={setIsHovered1}
        />
        <Dropdown
          title="SERVICES"
          items={["What We Provide", "Portfolio"]}
          hoverState={isHovered2}
          setHoverState={setIsHovered2}
        />
        <Dropdown
          title="CONTACT"
          items={["Enquiry", "Appointment", "Proposal"]}
          hoverState={isHovered3}
          setHoverState={setIsHovered3}
        />
      </div>
    </div>
  );
};

export default BannerNav;
