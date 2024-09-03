import React from "react";
import img from "../../assets/about/image.png";
function OurTeam() {
  const advisersData = [
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
  ];
  const teamData = [
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
    {
      name: "John Doe",
      img: img,
      role: "Team Lead",
    },
  ];
  return (
    <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 bg-[#E0F7FA]">
      <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
        Our Team
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-2 w-full items-center justify-center pb-6">
        {teamData?.map(({ img, name, role }, index) => (
          <div key={index}>
            <img
              src={img}
              alt=""
              className=" rounded-lg hover:scale-105 shadow-sm shadow-black hover:shadow-xl hover:shadow-black"
            />
            <h5 className="mt-4 font-bold">{name}</h5>
            <p className="font-semibold"> {role}</p>
          </div>
        ))}
      </div>
      <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 bg-white mt-2 pb-6">
        <h2 className="w-full text-secondary font-bold text-2xl mb-6">
          Our Advisers
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-2 w-full items-center justify-center">
          {advisersData?.map(({ img, name, role }, index) => (
            <div key={index}>
              <img
                src={img}
                alt=""
                className="rounded-lg hover:scale-105 shadow-sm shadow-black hover:shadow-xl hover:shadow-black"
              />
              <h5 className="mt-4 font-bold">{name}</h5>
              <p className="font-semibold"> {role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
