import React from "react";
import img1 from "../assests/jon.png";
import img2 from "../assests/messi.png";
import img3 from "../assests/culture.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="hidden md:flex md:flex-wrap justify-around py-3 font-serif">
        <NavLink to="/">
          <div className=" px-20 text-center">
            <h1 className="font-Primary text-[20px] py-7">News</h1>
          </div>
        </NavLink>
        <NavLink to="/OpinionPage">
          <div className="flex px-5">
            <div className="py-2">
              <h1 className="font-Primary text-[20px]">Opinion</h1>
              <h2 className="text-[15px] mx-1">
                5 people who <br /> didn't give up
              </h2>
            </div>
            <div>
              <img className="w-25 h-20 grayscale" src={img1} alt="" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/Sports">
          <div className="flex px-5">
            <div className="py-2">
              <h1 className="font-Primary text-[20px]">Sports</h1>
              <h2 className="text-[15px] mx-1">Champions!</h2>
            </div>
            <div>
              <img className="w-25 h-20 grayscale" src={img2} alt="" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/Culture">
          <div className="flex px-5">
            <div className="py-2">
              <h1 className="font-Primary text-[20px]">Culture</h1>
            </div>
            <div>
              <img className="w-20 h-15 p-2 grayscale" src={img3} alt="" />
            </div>
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
