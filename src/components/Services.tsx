import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

import data from "../data";

function Services() {
  const servicesList = [
    {
      id: 1,
      title: data.FRONTED,
      desc: data.FRONTED_DESC,
      logo: "https://cdn-icons-png.flaticon.com/128/9172/9172978.png",
    },
    {
      id: 2,
      title: data.BACKEND,
      desc: data.BACKEND_DESC,
      logo: "https://cdn-icons-png.flaticon.com/128/8099/8099237.png",
    },
    {
      id: 3,
      title: data.DEVELOPMENT,
      desc: data.DEVELOPMENT_DESC,
      logo: "https://cdn-icons-png.flaticon.com/128/3242/3242120.png",
    },
  ];
  return (
    <div className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold">{data.SERVICES}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>
      <div className="flex justify-around mt-16">
        {servicesList.map((item) => (
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
              <img
                src={item.logo}
                alt="serviceLogo"
                className="w-[80px] h-[80px] p-5 hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <h2 className="text-gray-400">{item.desc}</h2>
            <IoArrowForwardOutline className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
