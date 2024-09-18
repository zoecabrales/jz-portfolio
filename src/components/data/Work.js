import React from "react";
import WorkCard from "../Cards/WorkCard/WorkCard";
import WorkCardData from "../../components/data/WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
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
  );
};

export default Work;
