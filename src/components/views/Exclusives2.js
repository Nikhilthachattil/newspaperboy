import React from "react";
import img1 from "../../assests/exclusives/1.jpg";
import img2 from "../../assests/exclusives/2.jpg";
import img3 from "../../assests/exclusives/3.jpg";
import img4 from "../../assests/exclusives/4.jpg";
import img5 from "../../assests/exclusives/5.jpg";
import img6 from "../../assests/exclusives/6.jpg";
import img7 from "../../assests/exclusives/8.jpg";

function Exclusives2() {
  return (
    <div className="relative font-serif border-t-2 border-secondary mx-10 py-2 ">
      <div>
        <h1 className="font-bold md:text-[20px]">INSPIRATION :</h1>
      </div>
      <div className="md:grid grid-cols-6 grid-rows-6 gap-2 grayscale">
        <div className="col-span-2 row-span-2">
          <img src={img1} alt="" />
          <h5 className="text-[11px] md:text-[15px]">
            Until 31, a jobless house husband. Currently, the first Asian
            director to win an Oscar, Golden Globe, and BAFTA for Best Director,
            and is the only director to win both the Golden Bear and Golden Lion
            multiple times.
          </h5>
        </div>
        <div className="col-span-2 row-span-4 col-start-3">
          <img src={img2} alt="" />
          <h5 className="px-2 text-[11px] md:text-[15px]">
            Until his 30s, a carpenter. Currently, well, you know - actor and
            producer.
          </h5>
          <h5 className="px-2 text-[11px] md:text-[15px]">
            I wanted to live the life, a different life. I didn't want to go to
            the same place every day and see the same people and do the same
            job. I wanted interesting challenges. Work hard and figure out how
            to be useful and don't try to imitate anybody else's success.
          </h5>
        </div>
        <div className="col-span-2 row-span-2 col-start-5 ">
          <img src={img3} alt="" />
          <h5 className="text-[11px] md:text-[15px]">
            Until 31, a single mom on welfare. Currently, British novelist best
            known as the author of Harry Potter - the best-selling book series
            in history, which eventually became the best-selling movie series in
            history.
          </h5>
        </div>
        <div className="col-span-2 row-span-4 row-start-3 ">
          <img src={img4} alt="" />
          <h5 className="text-[11px] md:text-[15px]">
            Until 30, a taxi driver and monk. Currently, billionaire
            entrepreneur & founder of 5 Hour Energy.
          </h5>
          <p className="text-[11px] md:text-[15px]">
            Bhargava created Innovations Ventures LLC , and launched 5-hour
            Energy in 2003. By 2012, retail sales had grown to an estimated $1
            billion. Over time, Bhargava created additional entities or funds to
            support a variety of new ventures.These included the capital venture
            company MicroDose Life Sciences,a manufacturing venture laboratory
            called Stage 2 Innovations LLC, a private equity fund called ETC
            Capital LLC, Plymouth Real Estate Holdings LLC and Oakland Energy
            and Water Ventures.
          </p>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-5">
          <img src={img5} alt="" />
          <h5 className="text-[11px] md:text-[15px]">
            Until 25, a bartender at his own bar. Currently the Dallas Mavericks
            owner, entrepreneur and billionaire.
          </h5>
        </div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-3">
          <img src={img6} alt="" />
          <h5 className="text-[11px] md:text-[15px]">
            Until 45, sold books and home goods door-to-door. Eventually became
            the founder of Mary Kay Cosmetics and one of the most influential
            businesswomen in American history.
          </h5>
        </div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-5">
          <img src={img7} alt="" />
          <h5 className="text-[11px] md:text-[15px]">
            Until 52, sold paper cups and milkshake mixers. Eventually became
            the founder of McDonald's and built it into the most successful fast
            food chain in the world.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Exclusives2;
