import React from "react";
import "../others/css/Flashnews.css";

function slide2() {
  return (
    <main className="news-container overflow-hidden">
      <div className="title">Inspirational Quotes :</div>
      <ul className="animate-infinite-scroll">
        <li>
          “I've always dreamed of being a World Champion and I didn't want to
          stop trying, even knowing that maybe it could never happen.” : Lionel
          Messi
        </li>
        <li>
          “All our dreams can come true, if we have the courage to pursue them.”
          : Walt Disney
        </li>
        <li>
          “Imagination is more important than knowledge.” : Albert Einstein
        </li>
      </ul>
    </main>
  );
}

export default slide2;
