import React from "react";
import WorkCard from "../Cards/WorkCard/WorkCard";
import WorkCardData from "../../components/data/WorkCardData";
import "../common/SectionHeadingStyles.css";

// Mobile projects (MobileCardData) are hidden for now.
const Work = () => {
  return (
    <div className="work-container">
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
