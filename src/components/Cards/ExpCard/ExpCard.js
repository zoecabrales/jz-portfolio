import React, { useState, useRef, useEffect } from "react";
import "./ExpCardStyles.css";
import { useTheme } from "../../../context/ThemeContext";

const ExpCard = ({ company, project, role, duties }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Use a class-based approach for hover instead of state
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnterEvent = () => {
      card.classList.add("hovered");
      setIsHovered(true); // Keep the state in sync for any components that might use it
    };

    const handleMouseLeaveEvent = () => {
      card.classList.remove("hovered");
      setIsHovered(false); // Keep the state in sync for any components that might use it
    };

    card.addEventListener("mouseenter", handleMouseEnterEvent);
    card.addEventListener("mouseleave", handleMouseLeaveEvent);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnterEvent);
      card.removeEventListener("mouseleave", handleMouseLeaveEvent);
    };
  }, []);

  return (
    <div ref={cardRef} className={`exp-card ${theme}`}>
      <div className="exp-card-front">
        <h2>{`Company: ${company}`}</h2>
        <h4>{`Project: ${project}`}</h4>
        <p>{`Role: ${role}`}</p>
      </div>
      <div className="exp-card-back">
        <h2>Tasks & Tools</h2>
        {duties.map((duty, index) => (
          <p key={index}>{duty}</p>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;
