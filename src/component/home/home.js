import React from "react";
import mountains from "../../assests/video/mountains.mp4";
import Header from "../header/header";
import "./home.css";

export default function Home() {
  const tlist = [
    "Unplanned trips create the best memories.",
    "An unplanned trip with your loved ones is always enjoyable.",
    "Life itself is an unplanned journey.",
    "The best experiences come from unplanned events.",
    "Unplanned trips can help you feel relaxed.",
    "A trip becomes more exciting when it is unplanned.",
    "Unplanned trip are best becouse plan trip never happens.",
  ];

  const randomlist = tlist[Math.floor(Math.random() * tlist.length)];

  return (
    <div className="position-relative">
      <div className="videoconatiner">
        <video className="videoTag" autoPlay loop muted>
          <source src={mountains} type="video/mp4" />
        </video>
      </div>
      <div className="position-absolute home-header w-100 px-5 py-3">
        <Header />
      </div>
      <div className="position-absolute home-content w-100 px-5 py-3">
        <h2>{randomlist}</h2>
      </div>
    </div>
  );
}
