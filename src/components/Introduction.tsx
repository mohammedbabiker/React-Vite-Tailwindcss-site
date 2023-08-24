import React from "react";

function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[120px] border-r-[1px] mt-[90px]" />
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      <h2 className="mt-5 text-black font-medium text-[13px] tracking-widest">
        HELLO! MY NAME IS
      </h2>
      <h2 className="text-[70px] font-bold text-black tracking-widest mt-5 text-center">
        MOHAMMED <br />
        BABIKER
      </h2>
      <img
        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1600"
        className="w-[160px] h-[160px] bg-gray-200 p-7 rounded-full mt-7"
      />
    </div>
  );
}

export default Introduction;
