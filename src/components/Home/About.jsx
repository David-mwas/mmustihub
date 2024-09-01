import React from "react";
import aboutimg from "../../assets/about.png";
function About() {
  return (
    <div className="w-full px-6 lg:px-12 py-8 text-black bg-[#E0F7FA] mt-0">
      <div className="w-full flex lg:flex-row flex-col items-start justify-between  ">
        <div className="w-full lg:w-[30%] lg:ml-[60px]">
          <img
            src={aboutimg}
            alt=""
            className="lg:w-[450px] lg:h-[350px] object-contain "
          />
        </div>
        <div className="w-full lg:w-[50%]">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-8 mb-4">
            What Mmust Ihub is
          </h2>
          <p className="w-full lg:w-[85%] text-md">
            MMUST iHub is a vibrant innovation hub dedicated to fostering
            <span className="text-tersiary font-semibold">
              {" "}
              creativity, collaboration
            </span>
            , and{" "}
            <span className="text-tersiary font-semibold">
              cutting-edge solutions.
            </span>
            We bring together students, researchers, entrepreneurs, and industry
            professionals to turn bold ideas into impactful realities.
          </p>
          <br />
          <p className="w-full lg:w-[85%] text-md">
            By providing access to state-of-the-art resources, mentorship, and a
            dynamic community, MMUST iHub empowers innovators to tackle
            real-world challenges and shape the future. Whether you're
            developing new technologies, launching a startup, or pursuing
            research, MMUST iHub is the place where your vision can thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
