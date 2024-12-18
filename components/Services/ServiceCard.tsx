import React from "react";

interface ServiceCardProps {
  title: string;
  descrip: string;
  image: string;
}

const ServiceCard = ({ title, descrip, image }: ServiceCardProps) => {
  return (
    <div className="py-8 ">
      <div className="grid grid-rows-[215px_minmax(50px,_1fr)_80px] pb-12 gap-4 relative">
        <div className="h-16 w-16 bg-[#FFB92E] rounded-full absolute bottom-[42%] right-6"></div>
        <div
          className="h-[220px] w-[350px] bg-black"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <h4 className="text-2xl font-bold text-neutral-100/80">{title}</h4>
        <p>{descrip}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
