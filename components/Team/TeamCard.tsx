import Image from "next/image";
import React from "react";

interface TeamProps {
  name: string;
  title: string;
  description: string;
}

const TeamCard = ({ name, title, description }: TeamProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
      <div className="flex items-center justify-center  col-span-6 md:col-span-1">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={"/images/profile.jpg"}
            alt="Name profile"
            fill
            className="object-cover rounded-full object-center"
          />
        </div>
      </div>

      <div className="col-span-6 md:col-span-5">
        <h3 className="text-2xl font-black text-neutral-100 text-center md:text-left">
          {name}
        </h3>
        <p className="text-center md:text-left">{title}</p>
        <p className="pt-8 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
