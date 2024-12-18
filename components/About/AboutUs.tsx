import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-6">
        <div className="min-h-[300px] flex items-center justify-center">
          <div className="bg-gray-400 h-full w-1/2 place-content-center text-center">
            Image{" "}
          </div>
        </div>
        <div className="space-y-6 max-w-lg">
          <h3 className="font-black text-4xl text-[#354D71]">ABOUT US</h3>
          <p>
            Established in 1999, AMD Construction Sdn. Bhd. is dedicated to
            delivering superior construction services with a strong emphasis on
            value for money. Our expertise spans fit-out works, including Civil
            and Structural Works, Turnkey Construction, Timber and Steel
            Structures, and Conceptual Design. Over the years, we have
            consistently grown, maintaining high levels of client satisfaction
            and delivering top-quality projects.
          </p>
          <p>
            Our commitment to excellence is reflected in our meticulous
            planning, cost-saving measures, and strict adherence to quality
            control standards. With a highly skilled team and over 30 years of
            combined experience, we continuously strive to enhance our services
            and expand our capabilities, ensuring timely and quality delivery in
            every project.
          </p>
          <div className="bg-[#FFB92E] h-12 w-44"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
