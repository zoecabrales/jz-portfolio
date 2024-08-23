import React from "react";
import "./ExpCardStyles.css";

const ExpCard = ({ company, project, role, duties }) => {
  return (
    <div className="exp-card">
      <h2>{`Company: ${company}`}</h2>
      <h4>{`Project: ${project}`}</h4>
      <p>{`Role: ${role}`}</p>
      <div className="duties">
        {duties.map((duty, index) => (
          <p key={index}>{duty}</p>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;
