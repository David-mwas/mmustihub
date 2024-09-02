import React from "react";
import sponser1 from "../../assets/mmustlogo.png";
import sponser2 from "../../assets/konza.png";
import sponser3 from "../../assets/SWOM.png";
function Sponser() {
  const Sponsers = [
    { id: 1, url: "https://mmust.ac.ke", img: sponser1 },
    { id: 2, url: "https://konza.com", img: sponser2 },
    { id: 3, url: "#", img: sponser3 },
  ];
  return (
    <div className="w-screen flex bg-[#E0F7FA] flex-col px-6 lg:px-[80px] py-6 h-[350px]">
      <h2 className="w-full text-secondary font-bold text-2xl mt-4 mb-8 text-left">
        Parners & Sponsors
      </h2>
      <div className="w-full flex flex-row gap-8 items-center">
        {Sponsers?.map(({ img, url }, index) => (
          <div key={index}>
            <a href={url} target="_blank">
              {" "}
              <img src={img} alt="" className="w-[80px] scale-90 hover:scale-105 duration-200 ease-in-out transition-all" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponser;
