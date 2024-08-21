import React from "react";

import "./WorkCardStyles.css";

const WorkCard = ({ imgsrc, title, text, view }) => {
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
        <p>{text}</p>
        <div className="project-btns">
          <a
            href={view}
            className="btn"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-once="true"
          >
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
