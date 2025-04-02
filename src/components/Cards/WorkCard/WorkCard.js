import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import "./WorkCardStyles.css";

const WorkCard = ({ imgsrc, title, text, view, tools, source }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`project-card ${theme}`}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="400"
    >
      <img src={imgsrc} alt="pro" />
      <h2 className={`project-title ${theme}`}>{title}</h2>
      <div className="project-details">
        <p 
          className={theme}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? tools : text}
        </p>
        <div className="project-btns">
          <a
            href={source}
            className="btn"
            style={{ marginRight: "10px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            href={view}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
