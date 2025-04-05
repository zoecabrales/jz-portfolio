import React, { useState, useEffect } from "react";
import "./WorkCardStyles.css";

const WorkCard = ({ imgsrc, screenshots, title, text, view, tools, source }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Auto-rotate screenshots if available
  useEffect(() => {
    let intervalId;
    if (screenshots && screenshots.length > 1) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === screenshots.length - 1 ? 0 : prev + 1
        );
      }, 2000); // Change image every 2 seconds
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [screenshots]);

  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="400"
    >
      <div className="image-container">
        {screenshots ? (
          <>
            <img 
              src={screenshots[currentImageIndex]} 
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              className="project-image"
            />
            <div className="screenshot-dots">
              {screenshots.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <img src={imgsrc} alt="project" className="project-image" />
        )}
      </div>
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isHovered ? tools : text}
        </p>
        <div className="project-btns">
          <a
            href={source}
            className="btn"
            style={{ marginRight: "10px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            href={view}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
