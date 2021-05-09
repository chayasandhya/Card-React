import React from "react";
import Content from "./Content";
import image from "../Assets/image.jpg";
import "./Card.css";

function Card() {
  return (
    <div className="card_container">
      <div className="image_container">
        <div className="image_tag">NATURE</div>
        <img className="img" src={image} />
      </div>
      <Content />
    </div>
  );
}

export default Card;
