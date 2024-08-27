import React from "react";
import vectors from "../../assets/Blobs.png";
import bulb from "../../assets/bulb.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="w-screen h-screen herobg relative flex items-center justify-center">
      <div className="flex w-full flex-col md:flex-row items-center px-8 md:px-12 z-[99]  md:pt-0 gap-[150px]">
        <div className="w-full md:w-[45%] space-y-4 flex flex-col justify-center md:items-start md:pl-[80px] pt-12 sm:pt-0">
          <h1 className="text-4xl font-extrabold text-white">
            Ignite Innovation,{" "}
            <span className="text-secondary">
              <br />
              Transforming Ideas <br />
              into Reality!
            </span>
          </h1>
          <p className="text-white w-full">
            Welcome to <span className="font-bold">MMUST iHub</span>, where{" "}
            <span className="font-bold">collaboration meets creativity</span>{" "}
            and <span className="font-bold">innovation knows no bounds</span>.
            Join us on the forefront of technological and creative
            breakthroughs, as we bring together visionary minds to shape the
            future and transform ideas into reality.
          </p>
          <Link
            to={"/donate"}
            className="bg-secondary px-[60px] text-center py-2 rounded-[60px] text-white font-[500] hover:opacity-75 mt-[20px] w-full 
            md:w-[50%] shadow-xl"
          >
            Join Us
          </Link>
        </div>
        <div className="hidden md:flex">
          <img
            src={bulb}
            alt=""
            className="md:w-[450px]  w-[200px] md:object-cover mt-[-50px]"
          />
        </div>
      </div>
      <img
        src={vectors}
        alt=""
        className="w-full h-[393px] absolute md:bottom-[-200px] md:object-cover bottom-[-230px] "
      />
    </div>
  );
}

export default Hero;
