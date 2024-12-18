import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-3 bg-[#FFB92E]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="h-12 bg-[url('/images/LOGO-blue.png')] bg-no-repeat bg-center w-44"></div>
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-6 text-xl text-[#354D71] font-bold">
              <li className="hover:text-neutral-100 cursor-pointer transistion-all duration-150 ease-linear">
                ABOUT US
              </li>
              <li className="hover:text-neutral-100 cursor-pointer transistion-all duration-150 ease-linear">
                SERVICES
              </li>
              <li className="hover:text-neutral-100 cursor-pointer transistion-all duration-150 ease-linear">
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
