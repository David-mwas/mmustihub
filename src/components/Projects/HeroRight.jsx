import React from 'react'
import { motion } from "framer-motion";


function HeroRight(img) {
    const { image, description, title } = img;
    return (
      <div className="w-screen lg:h-[60vh] px-6 lg:px-12 py-2 text-black mt-0 flex flex-col justify-center items-center pt-[100px] lg:pt-0">
    <div className="w-full flex lg:flex-row justify-between lg:max-w-[80%] flex-col items-center space-x-12">
      <motion.div
        className="flex-2 "
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
        }}
      >
        <img
          src={image}
          alt="togetherness image"
          className="lg:w-[100%] lg:h-[350px] object-contain"
        />
      </motion.div>
      <div className="flex-1 space-y-4">
        <h1 className="text-[#02CCFE] font-bold lg:text-[24px]">
         {title}
        </h1>
        <p className="max-w-[80%]">
          {description}
        </p>
      </div>
            </div>
        </div>
  );
}

export default HeroRight