import React from "react";

import "./WorkCardStyles.css";

// import { NavLink } from "react-router-dom";

const WorkCard = ({ imgsrc, title, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="pro" />
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p>{text}</p>
        <div className="project-btns">
          <a href={view} className="btn">
            View
          </a>
          {/* <NavLink to={source} className="btn">
            Source
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
