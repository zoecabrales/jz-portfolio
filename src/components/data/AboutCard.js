import React from "react";

const AboutCard = ({ title, items }) => {
  return (
    <div className="about-card" data-aos="fade-up">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default AboutCard;
