import React from "react";
import ExpCard from "../Cards/ExpCard/ExpCard";
import ExpCardData from "../data/ExpCardData";

const Exp = () => {
  return (
    <div className="exp">
      <h1 className="section-heading exp-heading">
        Professional Work Experiences
      </h1>
      <div className="exp-card-container">
        {ExpCardData.map((value, index) => {
          return (
            <ExpCard
              key={index}
              company={value.company}
              project={value.project}
              role={value.role}
              duties={value.duties}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exp;
