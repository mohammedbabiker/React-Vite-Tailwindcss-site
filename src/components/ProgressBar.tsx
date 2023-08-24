import React from "react";
import { useState, useEffect } from "react";
function ProgressBar() {
  const [scrollTop, setScrollTop] = useState<unknown>();
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    setScrollTop(scrolled);
  };
  return (
    <div className="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px] h-full mb-4">
      <div
        className="transition-all duration-1000 ease-out bg-green-600"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
