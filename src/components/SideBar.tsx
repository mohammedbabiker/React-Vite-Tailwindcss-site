import React from "react";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

function SideBar() {
  return (
    <div className="w-[90px] h-full border-r-[1px] fixed flex flex-col justify-around items-center">
      <h2 className="text-lg tracking-widest -rotate-90">HOMEPAGE</h2>
      <div className="flex flex-col gap-7 mb-10 text-[18px]">
        <IoLogoGithub className="transition-all ease-in-out cursor-pointer hover:scale-110" />
        <IoLogoYoutube className="transition-all ease-in-out cursor-pointer hover:scale-110" />
        <IoLogoLinkedin className="transition-all ease-in-out cursor-pointer hover:scale-110" />
        <IoLogoTwitter className="transition-all ease-in-out cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
}

export default SideBar;
