import React from "react";
import TeamCard from "./TeamCard";

const TheTeam = () => {
  return (
    <div className="bg-black text-neutral-100 py-8">
      <div className="container mx-auto">
        <div>
          <p className="text-lg font-semibold text-neutral-100">Meet the,</p>
          <h2 className="text-4xl font-black text-neutral-100">Team</h2>
        </div>
        <div className="space-y-3 py-3">
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
