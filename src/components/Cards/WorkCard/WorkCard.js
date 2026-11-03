import React, { useState } from "react";
import "./WorkCardStyles.css";
import ProjectModal from "../../Modal/ProjectModal";

const WorkCard = ({
  imgsrc,
  cover,
  screenshots,
  category,
  title,
  text,
  view,
  tools,
  source,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previewImage = imgsrc || cover || screenshots?.[0];
  const projectScreenshots = screenshots?.length
    ? cover
      ? [cover, ...screenshots.filter((screenshot) => screenshot !== cover)]
      : screenshots
    : previewImage
      ? [previewImage]
      : [];
  const technologies = tools
    ?.replace(/^Tools Used:\s*/i, "")
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);
  const sourceUrl = source && source !== "#" ? source : null;
  const viewUrl = view && view !== "#" ? view : null;

  return (
    <>
      <article
        className={`project-card ${
          category?.startsWith("Mobile") ? "mobile-project" : ""
        }`}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="400"
      >
        {previewImage && (
          <div className="project-preview">
            <img
              className="project-image"
              src={previewImage}
              alt={`${title} preview`}
              loading="lazy"
            />
          </div>
        )}
        <div className="project-card-content">
          {category && <p className="project-category">{category}</p>}
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{text}</p>
          {technologies?.length > 0 && (
            <ul className="project-technologies" aria-label="Technologies used">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          )}
          <div className="project-card-actions">
            <button
              className="project-details-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              More details
            </button>
            {sourceUrl && (
              <a
                href={sourceUrl}
                className="project-external-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code`}
              >
                Code
              </a>
            )}
            {viewUrl && (
              <a
                href={viewUrl}
                className="project-external-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} demo`}
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          title,
          text,
          tools,
          screenshots: projectScreenshots,
          view: viewUrl,
          source: sourceUrl,
        }}
      />
    </>
  );
};

export default WorkCard;
