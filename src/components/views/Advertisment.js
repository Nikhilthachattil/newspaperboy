import React from "react";
import img1 from "../../assests/advertisment/1.webp";
import img3 from "../../assests/advertisment/1034.webp";
import img4 from "../../assests/advertisment/1035.webp";
import img5 from "../../assests/advertisment/2.jpg";
import img6 from "../../assests/advertisment/1036.webp";
import img7 from "../../assests/advertisment/1038.jpg";
import img8 from "../../assests/advertisment/1039.jpg";
import img9 from "../../assests/advertisment/1040.jpg";
import img10 from "../../assests/advertisment/1041.jpg";
function Advertisment() {
  return (
    <div className="  w-full">
      <div className="grid grid-cols-5 grid-rows-6 gap-4 grayscale">
        <div className="row-span-6 border-r-2 border-secondary">
          <img src={img1} alt="" />
        </div>
        <div className="row-span-3 ">
          <img src={img6} alt="" />
        </div>
        <div className="row-span-3 col-start-2 row-start-4">
          <img src={img7} alt="" />
        </div>
        <div className="row-span-3 col-start-3 row-start-1">
          <img src={img8} alt="" />
        </div>
        <div className="row-span-3 col-start-3 row-start-4 justify-center">
          <img src={img3} alt="" />
        </div>
        <div className="row-span-3 col-start-4 row-start-1">
          <img src={img9} alt="" />
        </div>
        <div className="row-span-3 col-start-4 row-start-4">
          <img src={img10} alt="" />
          <img src={img10} alt="" />
        </div>
        <div className="row-span-3 col-start-5 row-start-1">
          <img src={img5} alt="" />
        </div>
        <div className="row-span-3 col-start-5 row-start-4">
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Advertisment;
