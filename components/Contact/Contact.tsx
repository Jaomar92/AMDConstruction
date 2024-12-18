import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FFB92E] py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black">Contact</h2>
        <p className="text-sm text-neutral-500">
          This Component requires more information and most prob a backend with
          Database and dashboard
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-6 space-y-3">
            <h3 className="text-2xl font-bold">Operations</h3>
            <p>Phone: 05551518415</p>
            <p>Email: info@amdconstruction.com.my</p>
            <p>Address:</p>
            <p>Operational hours: Monday to Friday (9am to 5pm)</p>
            <div className="flex items-center gap-3">
              <button className=" font-semibold text-neutral-900 bg-neutral-100 rounded-2xl px-4 py-2">
                Enquiry
              </button>
              <button className=" font-semibold text-neutral-900 bg-neutral-100 rounded-2xl px-4 py-2">
                Proposal
              </button>
              <button className=" font-semibold text-neutral-900 bg-neutral-100 rounded-2xl px-4 py-2">
                Appointment
              </button>
              <button className=" font-semibold text-neutral-900 bg-neutral-100 rounded-2xl px-4 py-2">
                Career
              </button>
            </div>
          </div>
          <div className="h-[300px] w-full bg-gray-300 flex items-center justify-center rounded-xl">
            GOOGLE MAPS iFrame
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
