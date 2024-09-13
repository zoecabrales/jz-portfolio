import React, { useState } from "react";
import "./WorkCardStyles.css";

const WorkCard = ({ imgsrc, title, text, view, tools }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="400"
    >
      <img src={imgsrc} alt="pro" />
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isHovered ? tools : text}
        </p>
        <div className="project-btns">
          <a href={view} className="btn">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
