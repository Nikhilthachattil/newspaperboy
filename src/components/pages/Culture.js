import React, { useState } from "react";
import img1 from "../../assests/africa.webp";
import img3 from "../../assests/art.webp";
import img4 from "../../assests/dragon.webp";
import img5 from "../../assests/photograpy.webp";
import { NavLink } from "react-router-dom";
import Advertisment from "../views/Advertisment";
import Cartoon from "../views/cartoon";
import Crosswordcard from "../others/Crosswordcard";

function Culture() {
  const slides = [img1, img3, img4, img5];
  const cardDescriptions = [
    "Culture of Africa",
    "Arts",
    "Chinese Dragon",
    "History of Photography",
  ];
  const imageLinks = ["/Home", "/OpinionPage", "/Sports", "/Home"];
  const [curr, setCurr] = useState(0);

  const slideLeft = () => {
    setCurr((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurr((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="flex justify-around md:mt-10 w-full">
        <div className=" relative flex justify-center items-center cursor-pointer px-2 md:px-10 md:h-[100vh] mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white absolute z-30 p-1 md:w-[50px] md:h-[50px] bg-none left-2 md:p-3 border-2 border-dcream rounded-full md:mx-5 backdrop-blur-3xl"
            onClick={slideLeft}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <div className="relative flex grayscale">
            {slides.map((slide, index) => (
              <div key={index} className={index === curr ? "block" : "hidden"}>
                <div className="absolute md:top-[37%] font-Primary left-0 right-0  text-center p-2 bg-secondary opacity-75 ">
                  <p className="md:text-[30px] py-10 text-white">
                    {cardDescriptions[index]}
                  </p>
                  <NavLink to={imageLinks[index]}>
                    <div href="#download" className=" text-center">
                      <button className="border-2 px-5 text-white ">
                        Read More...
                      </button>
                    </div>
                  </NavLink>
                </div>
                <img
                  src={slide}
                  alt={`slide ${index}`}
                  style={{
                    background: `url(${slides[index]})`,
                    backgroundSize: "cover", // Adjust the size as per your needs
                    width: "100%", // Set width to 100% to cover the container
                    height: "100%", // Set height to 100% to cover the container
                  }}
                />
              </div>
            ))}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white absolute z-30 p-1 md:w-[50px] md:h-[50px] right-2 md:p-3 border-2 border-dcream rounded-full md:mx-5 backdrop-blur-3xl"
            onClick={slideRight}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="mx-2 md:mx-10">
        <h1 className="font-Primary md:text-[20px]">Crossword:</h1>
        <div>
          <Crosswordcard />
        </div>
      </div>
      <div className="mx-2 md:mx-10 md:mt-10">
        <h1 className="font-Primary md:text-[20px]">Cartoons:</h1>
        <div>
          <Cartoon />
        </div>
      </div>
      <div className="mx-2 md:mx-10 md:mt-10">
        <h1 className="font-Primary md:text-[20px]">Advertisment:</h1>
        <div className="bg-black">
          <div className="p-5">
            <Advertisment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture;
