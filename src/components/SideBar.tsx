import React from "react";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

function SideBar() {
  return (
    <div>
      <div className="w-[90px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center">
        <h2 className="-rotate-90 text-lg tracking-widest">HOMEPAGE</h2>
        <div className="flex flex-col gap-6 m-10 text-[18px]">
          <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
          <IoLogoYoutube className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
          <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
          <IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
