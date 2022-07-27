import React from "react";
import "./Card.component.scss";

const Card = ({ height, width, Object, backgroundColor = "white" }) => {
  let rootElement = document.documentElement;
  rootElement.style.setProperty("--cardHeight", height);
  rootElement.style.setProperty("--cardWidth", width);
  rootElement.style.setProperty("--cardBackgroundColor", backgroundColor);
  return (
    <div
      className="card"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {Object}
    </div>
  );
};

export default Card;
