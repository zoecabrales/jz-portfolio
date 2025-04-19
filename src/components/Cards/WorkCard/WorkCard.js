import React, { useState, useEffect, useRef } from "react";
import "./WorkCardStyles.css";

const WorkCard = ({
  imgsrc,
  screenshots,
  title,
  text,
  view,
  tools,
  source,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

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

  // Set up hover effect with DOM manipulation instead of React state
  useEffect(() => {
    const card = cardRef.current;
    const description = descriptionRef.current;
    if (!description || !card) return;

    const textContent = text;
    const toolsContent = tools;
    const paragraph = description.querySelector("p");

    const handleMouseEnter = () => {
      paragraph.textContent = toolsContent;
      description.classList.add("hovered");
      card.classList.add("hovered");
    };

    const handleMouseLeave = () => {
      paragraph.textContent = textContent;
      description.classList.remove("hovered");
      card.classList.remove("hovered");
    };

    description.addEventListener("mouseenter", handleMouseEnter);
    description.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      description.removeEventListener("mouseenter", handleMouseEnter);
      description.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [text, tools]);

  return (
    <div
      ref={cardRef}
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
                  className={`dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
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
        <div ref={descriptionRef} className="project-description">
          <p>{text}</p>
        </div>
        <div className="project-btns">
          <a
            href={source}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code"
          >
            <span>Code</span>
          </a>
          <a
            href={view}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View demo"
          >
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
