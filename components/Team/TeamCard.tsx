import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
      <div className="relative w-[200px] h-[200px] ">
        <Image
          src={"/images/profile.jpg"}
          alt="Name profile"
          fill
          className="object-cover rounded-full"
        />
      </div>

      <div className="col-span-5 ">
        <h3 className="text-2xl font-black text-neutral-100">BALA MURALEE</h3>
        <p>Company Director</p>
        <p className="pt-8">
          Graduated from a London university with a degree in Civil Engineering.
          His extensive experience and mastery in structural design has
          contributed to some prestigious projects, most remarkably, the Express
          Rail Link (ERL), City Square in Johor Bahru and Raintree Park
          Development in Hyderabad. He provides technical assistance and
          oversees the design elements and implementations of the numerous
          projects that is being undertaken.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
