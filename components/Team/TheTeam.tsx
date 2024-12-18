import React from "react";
import TeamCard from "./TeamCard";

const TheTeam = () => {
  return (
    <div className="bg-black text-neutral-100 py-8 px-2 md:px-0">
      <div className="container mx-auto">
        <div>
          <p className="text-lg font-semibold text-neutral-100">Meet the,</p>
          <h2 className="text-4xl font-black text-neutral-100">Team</h2>
        </div>
        <div className="space-y-3 py-3">
          <TeamCard
            title={"Company Director"}
            name={"BALA MURALEE"}
            description={
              "Graduated from a London university with a degree in Civil Engineering. His extensive experience and mastery in structural design has contributed to some prestigious projects, most remarkably, the Express Rail Link (ERL), City Square in Johor Bahru and Raintree Park Development in Hyderabad. He provides technical assistance and oversees the design elements and implementations of the numerous projects that is being undertaken."
            }
          />

          <TeamCard
            name={"ZULFA ASRI ZULKIFLI"}
            title={"Managing Director"}
            description={
              "As the company's Managing Director, Zulfa oversees the general operation and administration of the business. He graduated with a Bachelor's degree in Civil Engineering from United Kingdom. He is actively involved in guiding, controlling and monitoring the operations of the various subsidiaries within AMD CONSTRUCTION SDN. BHD."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
