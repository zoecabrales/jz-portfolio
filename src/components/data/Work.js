import React from "react";
import WorkCard from "../Cards/WorkCard/WorkCard";
import WorkCardData from "../../components/data/WorkCardData";
import "../common/SectionHeadingStyles.css";

const Work = () => {
  return (
    <div className="work-container">
      {/* Web Projects Section */}
      <div className="section-container">
        <h1 className="section-heading project-heading">Web Projects</h1>
        <div className="project-container">
          {WorkCardData.map((item, index) => (
            <WorkCard
              key={index}
              imgsrc={item.imgsrc}
              title={item.title}
              text={item.text}
              view={item.view}
              source={item.source}
              tools={item.tools}
              dep={item.dep}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
