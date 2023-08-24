import React from "react";
import data from "../data";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function About() {
  return (
    <div className="flex flex-col items-center mt-12 text-center px-44">
      <h2 className="text-[40px] font-bold">{data.ABOUT_HEADING}</h2>
      <BiSolidQuoteAltLeft className="bg-green-500 p-3 text-[44px] rounded-full mt-6 text-white" />
      <h2 className="my-5 text-gray-400 text-[14px]">{data.HOME_DESC}</h2>
      <BiSolidQuoteAltRight className="bg-green-500 p-3 text-[44px] rounded-full mt-6 text-white" />
    </div>
  );
}

export default About;
