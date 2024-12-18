import React from "react";
import ServiceCard from "./ServiceCard";
import "./scrollbar.css";

const data = [
  {
    title: "Consultation",
    description:
      "We offer comprehensive consulting services designed to deliver cost-effective solutions for the everyday challenges encountered throughout the construction process, effectively mitigating complex issues.",
    image: "/images/crain.png",
  },
  {
    title: "Project Management",
    description:
      "With extensive experience across various construction fields, we manage projects from schematic phase to completion. We coordinate contractors, oversee workers, and address client needs to ensure satisfaction and project success. ",
    image: "/images/crain.png",
  },
  {
    title: "Design & Planning",
    description:
      "We design and draft according to clients' needs, specifications, and desires, ensuring that the final results align perfectly with their vision and goals. Our tailored approach guarantees that each project reflects the unique aspirations and requirements of our clients.",
    image: "/images/crain.png",
  },
  {
    title: "Construction",
    description:
      "We provide all necessary materials, labor, machinery, and equipment tailored to each project's needs. Our close supervision of ongoing work ensures that quality and timely execution are maintained throughout the project.",
    image: "/images/crain.png",
  },
];

const OurServices = () => {
  return (
    <div className="bg-black text-neutral-100">
      <div className="container mx-auto py-8 space-y-8">
        <div className="mx-2 md:mx-0">
          <h2 className="text-4xl font-black">OUR SERVICES</h2>
          <div className="flex items-center gap-12 overflow-x-scroll scrollbar-thin">
            {data.map((item, i) => (
              <ServiceCard
                title={item.title}
                descrip={item.description}
                image={item.image}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
