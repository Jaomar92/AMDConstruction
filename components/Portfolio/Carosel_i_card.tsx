import Image from "next/image";
import React from "react";

interface CaroselCardProps {
  title: string;
  des: string;
  MYR: string;
  location: string;
  img: string;
}

const Carosel_i_card = ({
  title,
  des,
  MYR,
  location,
  img,
}: CaroselCardProps) => {
  return (
    <article className={`relative rounded-2xl`}>
      <Image
        src={img}
        fill
        alt={title}
        className="-z-10 object-cover object-center"
      />
      <div className="bg-neutral-950/40 w-1/2 md:w-1/3 h-full flex flex-col justify-between">
        <div className="py-3 flex flex-col items-center justify-center">
          <p className="text-neutral-100 font-semibold text-lg">{location},</p>
          <h4 className="text-neutral-100 font-black text-3xl text-center">
            {title}
          </h4>
          <p className="w-full text-neutral-100 font-medium text-md text-center pt-3 px-4">
            {des}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-6">
          <p className="w-full text-neutral-100 font-medium text-md pl-8">
            Project Value:
          </p>
          <p className="text-neutral-100 font-bold text-2xl">{MYR}</p>
        </div>
      </div>
    </article>
  );
};

export default Carosel_i_card;
