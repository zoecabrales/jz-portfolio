import React from "react";
import WorkCard from "../Cards/WorkCard/WorkCard";
import WorkCardData from "../../components/data/WorkCardData";
import MobileCardData from "../../components/data/MobileCardData";

const Work = () => {
  return (
    <div className="work-container">
      {/* Web Projects Section */}
      <div className="section-container">
        <h1 className="project-heading">Web Projects</h1>
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

      {/* Mobile Projects Section */}
      <div className="section-container">
        <h1 className="project-heading">Mobile Projects</h1>
        <div className="project-container">
          {MobileCardData.map((item, index) => (
            <WorkCard
              key={index}
              imgsrc={item.imgsrc}
              screenshots={item.screenshots}
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
