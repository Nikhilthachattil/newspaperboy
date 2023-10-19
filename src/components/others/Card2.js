import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../assests/1025.jpg";
import img2 from "../../assests/1026.jpg";

const Card2 = () => {
  const [isFlipped, setisFlipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  useEffect(() => {
    // Automatically flip the card every 3 seconds (3000 milliseconds)
    const flipInterval = setInterval(() => {
      if (!isAnimating) {
        setisFlipped(!isFlipped);
        setisAnimating(true);
      }
    }, 3000); // Change this value to set the interval duration

    // Clear the interval when the component is unmounted
    return () => clearInterval(flipInterval);
  }, [isFlipped, isAnimating]);

  function handleFlip() {
    if (!isAnimating) {
      setisFlipped(!isFlipped);
      setisAnimating(true);
    }
  }

  return (
    <div>
      <div
        className="flip-card md:w-[450px] w-[210px] h-[300px] md:h-[600px] bg-secondary rounded-3xl"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setisAnimating(false)}
        >
          <div
            className="flip-card-front bg-cover w-[100%] h-[100%] p-4 rounded-3xl grayscale"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div
            className="flip-card-back bg-cover w-[100%] h-[100%] rounded-3xl grayscale"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card2;
