import React from "react";
import "./FigmaSectionStyles.css";

const FigmaSection = () => {
  return (
    <div className="figma-section" data-aos="fade-up">
      <div className="figma-container">
        <div>
          <h2>My Figma UI Design</h2>
          <h3>This is only for my side projects</h3>
        </div>
        <div className="figma-image">
          <img 
            src={require("../../assets/figma-ui.png")} 
            alt="Figma UI Design" 
            className="rounded-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FigmaSection; 