import React from "react";
import DateandTime from "./others/DateandTime";
import MenuBar from "./views/menubar";
function Header2() {
  return (
    <div className="flex justify-between align-middle mx-2 md:mx-10 border-t-2 border-secondary  md:border-dotted">
      <div className="absolute right-0 left-0 top-0 w-screen z-40">
        <MenuBar />
      </div>
      <div>
        <DateandTime />
      </div>
      <div className="relative">
        <h1 className="text-end text-[20px] md:text-[80px] font-Primary  md:mt-0">
          NEWS PAPER BOY
        </h1>
      </div>
    </div>
  );
}

export default Header2;
