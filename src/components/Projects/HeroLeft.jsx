import React from "react";
import { motion } from "framer-motion"; 

function HeroLeft({ title, description, image, bg }) {
    return (
      <div
        className={`w-screen ${bg} lg:h-[60vh] px-6 lg:px-12 py-8 text-black mt-0 flex flex-col justify-center items-center pt-[100px] lg:pt-0`}
      >
        <div className="w-full  flex lg:flex-row justify-center lg:mt-6 lg:max-w-[80%] flex-col items-center">
          <div className="space-y-4 w-[60%]">
            <h1 className="text-[#02CCFE] font-bold lg:text-[24px]">{title}</h1>
            <p className="lg:max-w-[80%]">{description}</p>
          </div>
          <motion.div
            className="lg:w-[60%]"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
            }}
          >
            <img
              src={image}
              alt={`${title} image`}
              className="lg:w-[100%] lg:h-[350px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    );
}

export default HeroLeft;
