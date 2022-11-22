import React from "react";

import "./ExpCardStyles.css";

const ExpCard = ({ heading, text, company, project, role, duties }) => {
  return (
    <div className="heading">
      <h1>{heading}</h1>
      <p>{text}</p>
      <div className="project">
        <div className="project-card-container">
          <div className="card">
            <h2>{`Company: ${company}`}</h2>
            <h4>{`Project: ${project}`}</h4>
            <br />
            <p>{`Role: ${role}`}</p>
            <div className="card">
              {duties.map((duty, index) => {
                return <p key={index}>{duty}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
