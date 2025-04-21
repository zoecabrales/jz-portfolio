import React, { useEffect, useRef } from "react";
import "./ProjectModalStyles.css";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Handle modal behavior
  useEffect(() => {
    // Close modal on ESC key press
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Find the navbar element
    const navbar = document.querySelector(".header");

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;

      // Hide the navbar when modal is open
      if (navbar) {
        navbar.style.display = "none";
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      if (isOpen) {
        const scrollY = document.body.style.top;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);

        // Show the navbar again when modal is closed
        if (navbar) {
          navbar.style.display = "";
        }
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { title, text, tools, screenshots, view, source } = project;

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-content">
          <h2 className="modal-title">{title}</h2>

          {/* Main Image Display */}
          <div className="modal-image-main">
            {screenshots && screenshots.length > 0 && (
              <img
                src={screenshots[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
              />
            )}
          </div>

          {/* Thumbnails Row */}
          {screenshots && screenshots.length > 1 && (
            <div className="modal-thumbnails">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={screenshot} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          )}

          <div className="modal-info">
            <div className="modal-description">
              <h3>Description</h3>
              <p>{text}</p>
            </div>

            <div className="modal-tech">
              <h3>Technologies</h3>
              <p>{tools}</p>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={source}
              className="modal-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
            <a
              href={view}
              className="modal-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
