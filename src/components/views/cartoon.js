import React from "react";
import img1 from "../../assests/calvin.webp";
import img2 from "../../assests/bignate.webp";

function cartoon() {
  return (
    <div className="md:flex gap-2 bg-gray-200 border-b-2 border-secondary divide-y-2 md:divide-y-0 md:divide-x-2 divide-secondary">
      <div className=" py-10 px-2 ">
        <h3 className="text-[20px] font-bold font-serif">
          The First Calvin and Hobbes by Bill Watterson
        </h3>
        <img src={img1} alt="" className="md:h-[200px]" />
      </div>
      <div className=" py-10 px-2">
        <h3 className="text-[20px] font-bold font-serif">
          The First Big Nate by Lincoln Pierce
        </h3>
        <img src={img2} alt="" className="md:h-[200px]" />
      </div>
    </div>
  );
}

export default cartoon;
