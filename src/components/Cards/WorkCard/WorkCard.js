import React, { useState, useEffect, useRef } from "react";
import "./WorkCardStyles.css";
import ProjectModal from "../../Modal/ProjectModal";
import { useTheme } from "../../../context/ThemeContext";

const WorkCard = ({
  imgsrc,
  screenshots,
  title,
  text,
  view,
  tools,
  source,
}) => {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

  // Handle card click to open modal
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  // No longer need auto-rotate for card view

  // No hover effect needed anymore

  return (
    <>
      <div
        ref={cardRef}
        className={`project-card ${theme}`}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="400"
      >
        <h2 className="project-title">{title}</h2>
        <div className="project-details">
          <div ref={descriptionRef} className="project-description">
            <p>{text}</p>
          </div>
          <div className="view-more-container">
            <button
              className={`view-more-btn ${theme}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              <span>Click for more info</span>
            </button>
          </div>
          <div className="project-btns">
            <a
              href={source}
              className={`btn ${theme}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Code</span>
            </a>
            <a
              href={view}
              className={`btn ${theme}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View demo"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          title,
          text,
          tools,
          screenshots,
          view,
          source,
        }}
      />
    </>
  );
};

export default WorkCard;
