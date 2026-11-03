import React from "react";
import WorkCard from "../Cards/WorkCard/WorkCard";
import WorkCardData from "../../components/data/WorkCardData";
import MobileCardData from "../../components/data/MobileCardData";
import "../common/SectionHeadingStyles.css";

const Work = () => {
  return (
    <div className="work-container">
      <div className="section-container">
        <h1 className="section-heading project-heading">Mobile Projects</h1>
        <div className="project-container">
          {MobileCardData.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="section-container">
        <h1 className="section-heading project-heading">Web Projects</h1>
        <div className="project-container">
          {WorkCardData.map((item) => (
            <WorkCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
