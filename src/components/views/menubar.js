import React, { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assests/menubar.png";

function MenuBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const svgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== svgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div>
      <nav className="z-40 w-full text-white text-center flex justify-end mt-5 px-5 ">
        <div id="menu-btn" className="static lg:hidden py-5 z-50">
          <img
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
            ref={svgRef}
            className="md:w-6 md:h-6 w-5 h-5 cursor-pointer "
            src={img1}
            alt=""
          />
        </div>
        {open && (
          <div ref={menuRef} className={`lg:block overflow-hidden`}>
            <div className="bg-black ">
              <ul
                className="right-0 w-screen absolute items-center text-center justify-between gap-10
            top-0 px-16 z-30 text-sm  lg:flex py-5 text-white bg-secondary "
              >
                <NavLink to="/">
                  <li
                    onClick={() => setOpen(false)}
                    href="#features"
                    className="px-8 py-2 border-[1px] rounded-lg shadow-md mb-5 hover:bg-white hover:text-green-300"
                  >
                    News
                  </li>
                </NavLink>
                <NavLink to="/OpinionPage">
                  <li
                    onClick={() => setOpen(false)}
                    href="#download"
                    className="px-8 py-2  border-[1px] rounded-lg shadow-md mb-5 hover:bg-white hover:text-secondary"
                  >
                    Opinion
                  </li>
                </NavLink>
                <NavLink to="/Sports">
                  <li
                    onClick={() => setOpen(false)}
                    href="#faq"
                    className=" px-8 py-2  border-[1px] rounded-lg shadow-md mb-5 hover:bg-white hover:text-secondary"
                  >
                    Sports
                  </li>
                </NavLink>
                <NavLink to="/Culture">
                  <li
                    onClick={() => setOpen(false)}
                    href="/"
                    className="px-8 py-2 border-[1px] rounded-lg shadow-md mb-5 hover:bg-white hover:text-secondary"
                  >
                    Culture
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default MenuBar;
