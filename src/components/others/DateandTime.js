import React, { useState, useEffect } from "react";

const DateAndTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const displayTodayDate = currentTime.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const displayTime = currentTime.toLocaleTimeString();

  return (
    <div className=" mx-auto text-[10px] md:text-[15px] my-2 font-serif">
      <h5 className="font-bold font-Primary">25 p</h5>
      <div>{displayTodayDate}</div>
      <div>{displayTime}</div>
      <h5>Published in SomeWhereShire</h5>
    </div>
  );
};

export default DateAndTime;
