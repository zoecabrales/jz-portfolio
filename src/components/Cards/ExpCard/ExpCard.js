import React, { useState } from "react";
import "./ExpCardStyles.css";
import { useTheme } from "../../../context/ThemeContext"; // Import the useTheme hook

const ExpCard = ({ company, project, role, duties }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`exp-card ${theme}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
    >
      {!isHovered ? (
        <div className="exp-card-content">
          <h2>{`Company: ${company}`}</h2>
          <h4>{`Project: ${project}`}</h4>
          <p>{`Role: ${role}`}</p>
        </div>
      ) : (
        <div className="exp-card-duties">
          <h2>Tasks & Tools</h2>
          {duties.map((duty, index) => (
            <p key={index}>{duty}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpCard;
