import React from "react";
import YouTube from "react-youtube";
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
  const videoOptions = {
    height: "540", // YouTube theater mode height
    width: "960", // YouTube theater mode width
    playerVars: {
      autoplay: 0,
    },
  };

  const techIcons = [
    { icon: faHtml5, label: "HTML" },
    { icon: faCss3Alt, label: "CSS" },
    { icon: faSquareJs, label: "JavaScript" },
    { icon: faReact, label: "React" },
    { icon: faGithub, label: "GitHub" },
    { icon: faGoogle, label: "Firebase" },
    { icon: faServicestack, label: "ServiceNow" },
    { icon: faMicrosoft, label: "VSCode" },
  ];

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

      <div className="tech-icons-container" data-aos="fade-up">
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-icon">
            <FontAwesomeIcon icon={tech.icon} size="2x" />
            <p>{tech.label}</p>
          </div>
        ))}
      </div>




      <div className="social-media-title" data-aos="fade-up">
        <h2>Check Out My YouTube Channel!</h2>
      </div>

      <div className="video-container" data-aos="fade-up">
        <YouTube videoId="QSURtD1gro8" opts={videoOptions} />
      </div>
    </div>
  );
};

export default AboutContent;
