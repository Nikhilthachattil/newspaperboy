import React from "react";
import img1 from "../assests/whatsapp.png";
import img2 from "../assests/behance.png";
import img3 from "../assests/instagram.png";
import img4 from "../assests/linkedin.png";
import img5 from "../assests/facebook.png";

function Footer() {
  return (
    <div className="flex justify-between text-center bg-secondary mt-10 cursor-pointer">
      <div>
        <h3 className="text-white mx-5  hover:text-green-300">
          &#169; NikhilbabuThachattil
        </h3>
      </div>
      <div className="flex gap-2 mx-5">
        <a
          href="https://www.facebook.com/thachattilnikhil"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer py-2"
        >
          <img
            className="w-3 h-3 md:w-8 md:h-8 rounded-full m-1"
            src={img5}
            alt=""
          />
        </a>

        <a
          href=" https://wa.me/+918907117188"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer py-2"
        >
          <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img1} alt="" />
        </a>
        <a
          href="https://www.behance.net/thachattilnikhil"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer py-2"
        >
          <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img2} alt="" />
        </a>
        <a
          href="https://www.instagram.com/nikhilbabuthachattil/"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer py-2"
        >
          <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img3} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-babu-thachattil-058158284/"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer py-2"
        >
          <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img4} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
