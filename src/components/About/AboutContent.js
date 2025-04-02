import React, { useState } from "react";
import YouTube from "react-youtube"; // Import YouTube component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faGithub,
  faSquareJs,
  faGoogle,
  faServicestack,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import "./AboutContentStyles.css";

const AboutContent = () => {
  const techIcons = [
    {
      icon: faHtml5,
      label: "HTML",
      description:
        "The latest HTML standard defines the structure and presentation of web pages.",
    },
    {
      icon: faCss3Alt,
      label: "CSS",
      description:
        "CSS3 styles web pages, including layout, colors, and fonts.",
    },
    {
      icon: faSquareJs,
      label: "JavaScript",
      description: "JavaScript enables interactive web experiences.",
    },
    {
      icon: faReact,
      label: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
    },
    {
      icon: faGithub,
      label: "GitHub",
      description:
        "GitHub is a platform for version control and collaboration using Git.",
    },
    {
      icon: faGoogle,
      label: "Firebase",
      description:
        "Firebase is Google's platform for building mobile and web apps.",
    },
    {
      icon: faServicestack,
      label: "ServiceNow",
      description:
        "ServiceNow is a cloud platform for managing digital workflows.",
    },
    {
      icon: faMicrosoft,
      label: "VSCode",
      description:
        "VSCode is a lightweight code editor developed by Microsoft.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const videoOptions = {
    height: "640", // Video height
    width: "640", // Video width
    playerVars: {
      autoplay: 0, // Disable autoplay
    },
  };

  return (
    <div className="about">
      <div className="heading">
        <h1 data-aos="fade-up">Who am I?</h1>
        <p data-aos="fade-up">
          I have been in the software development industry for 3+ years now.
          {<br />}
          Listed below is the tech stack I have learned throughout the course of
          my career.
        </p>
      </div>

      {/* Tech Icons Section */}
      <div className="tech-icons-container" data-aos="fade-up">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="tech-icon"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <FontAwesomeIcon icon={tech.icon} size="2x" />
            <p>{tech.label}</p>
            {hoveredIndex === index && (
              <div className="description-box">{tech.description}</div>
            )}
          </div>
        ))}
      </div>

      {/* YouTube Video Section */}
      <div className="video-container" data-aos="fade-up">
        <div>
          <h2>Check Out My YouTube Channel!</h2>
        </div>
        <YouTube videoId="QSURtD1gro8" opts={videoOptions} />
      </div>

      {/* Figma UI Design Section */}
      <div className="figma-container" data-aos="fade-up">
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

export default AboutContent;
