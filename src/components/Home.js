import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../assests/2.jpg";
import gif from "../assests/cycle.gif";
import Exclusives from "./views/Exclusives";
import Exclusives2 from "./views/Exclusives2";

function Home() {
  return (
    <div>
      <div className="md:grid grid-cols-5 grid-rows-2 gap-0 md:mx-10 mb-10 md:py-5 px-1">
        <div className="col-span-3 mb:10">
          <div className="">
            <h1 className="font-Primary md:text-[38px] text-justify mx-5 pt-2 md:pt-10 md:mb-10">
              <span className="font-extrabold md:text-[42px]">Why?</span> Why
              Can't You Change Your Career to Follow Your Passion?
            </h1>
            <h2 className="md:text-[38px] font-Primary mx-5 mb-10">
              Find the Answers Inside !
            </h2>
          </div>
        </div>
        <div className="col-start-1 row-start-2 md:border-e-2 border-secondary ">
          <p className="font-serif text-justify px-3 md:px-0 md:pr-3 text-[11px] first-letter:text-7xl first-letter:font-bold first-letter:text-Secondary dark:first-letter:text-Secondary first-letter:mr-3 first-letter:float-left">
            In a world where societal norms often dictate conventional career
            paths, those who choose to change careers to follow their passion
            stand as a testament to the power of self-belief. They remind us all
            that it's never too late to chase our dreams and reshape our
            destinies. So, why can't one change their career to follow their
            passion? The answer lies within, in the unique, inspiring, and
            transformative journey of each individual who dares to make this
            change, ultimately finding the answers they seek inside themselves.
          </p>
          <p className="font-serif text-justify px-3 md:px-0 md:pr-3 text-[11px]">
            Embarking on a career change to pursue one's passion is more than
            just a shift in jobs; it's a profound personal and professional
            evolution. Imagine a scenario where an individual finds themselves
            at a crossroads in their life. They may have spent years in a stable
            job, but deep down, they harbor a burning desire, a passion that
            ignites their soul.
          </p>
        </div>
        <div className="col-start-2 row-start-2 md:border-e-2 border-secondary">
          <p className="font-serif text-justify px-3 text-[11px]">
            The first step often involves self-reflection. This process allows
            individuals to identify their true passions, interests, and
            strengths. It's about understanding what truly excites them and
            gives them a sense of purpose. Change can be daunting, but it's also
            the catalyst for growth. Leaving the familiar and stepping into the
            unknown takes courage. Career changers are individuals who have the
            audacity to challenge the status quo, to step out of their comfort
            zones and embrace the uncertainty that change brings.
          </p>
          <ul className="font-serif text-justify px-3 mx-3 text-[11px] my-2 list-disc">
            <li>Self-Discovery</li>
            <li>Embracing Change</li>
            <li>Unleashing Creativity</li>
            <li>Personal Fulfillment</li>
            <li>Inspiring Others</li>
          </ul>
        </div>
        <div className="col-start-3 row-start-2 ">
          <p className="font-serif text-justify px-3 text-[11px]">
            While changing careers to follow one's passion can be a fulfilling
            and rewarding experience, there are also challenges and potential
            disadvantages associated with such a significant life change. Here
            are some common disadvantages that individuals might face when
            pursuing a career change:
          </p>
          <ul className="font-serif text-justify px-5 mx-3 text-[11px] my-2 list-disc">
            <li>Financial Uncertainty</li>
            <li>Lack of Experience</li>
            <li>Professional Network</li>
            <li>Job Insecurity</li>
            <li>Resistance from Others</li>
          </ul>
          <div className="mx-5 grayscale">
            <img src={gif} alt="" className="w-20 h-30" />
          </div>
          <NavLink to="/CareerChange">
            <button className="font-serif text-justify mx-5 font-bold my-2 bg-secondary text-primary px-2">
              Read More...
            </button>
          </NavLink>
        </div>
        <div className="relative col-span-2 row-span-2 col-start-4 row-start-1 h-full w-full font-serif ">
          <img className="h-full w-full grayscale" src={img1} alt="" />
          <h5 className="text-[10px] md:text-[15px]">
            First issue of the 2023 new-look newspaperboy, Photograph: Freepik
          </h5>
        </div>
      </div>
      <div>
        <Exclusives />
        <Exclusives2 />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
