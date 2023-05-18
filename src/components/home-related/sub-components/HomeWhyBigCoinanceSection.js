import React from "react";
import "./css/HomeWhyBigCoinanceSection.css";

const HomeWhyBigCoinanceSection = (props) => {
  return (
    <div className="home-why-big-coinance-section-container">
      <img alt="Why big coinance" src={props.image} />

      <p className="why-big-coinance-title">{props.title}</p>
      <p className="why-big-coinance-content">{props.content}</p>
    </div>
  );
};

export default HomeWhyBigCoinanceSection;
