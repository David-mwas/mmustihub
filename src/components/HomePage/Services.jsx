import React from "react";
import serviceimg from "../../assets/services.png";
function Services() {
  return (
    <div className="w-full px-6 lg:px-12 py-8 text-black">
      <div className="w-full flex lg:flex-row-reverse flex-col items-start justify-between  ">
        <div className="w-full lg:w-[50%] ">
          <img
            src={serviceimg}
            alt=""
            className="lg:w-[450px] lg:h-[320px] object-contain "
          />
        </div>
        <div className="w-full lg:w-[50%] lg:ml-[60px]">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-8 mb-4">
            What We Do
          </h2>
          <p className="w-full lg:w-[85%] text-lg">
            We offer a diverse range of services designed to support and
            accelerate innovation. Our core focus areas include:
          </p>
          <br />
          <ul className="w-full lg:w-[85%] grid lg:grid-cols-2  grid-cols-1 gap-2 text-md">
            <li className="list truncate">Software Development</li>
            <li className="list truncate">Website Development</li>
            <li className="list truncate">Mentorship Programs</li>
            <li className="list truncate">Innovation Labs</li>
            <li className="list truncate">Prototype Development</li>
            <li className="list truncate">Consulting Services</li>
            <li className="list truncate">Workshops and Training</li>
            <li className="list truncate">Networking Opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
