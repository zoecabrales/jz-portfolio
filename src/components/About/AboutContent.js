import React from "react";
import AboutCard from "../data/AboutCard";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "./AboutContentStyles.css";

const AboutContent = () => {
  const videoOptions = {
    height: "540", // YouTube theater mode height
    width: "960", // YouTube theater mode width
    playerVars: {
      autoplay: 0,
    },
  };

  const techStack = [
    "HTML",
    "Javascript / Typescript",
    "React / React Native",
    "Firebase",
    "Redux / Context API",
    "Axios / Fetch",
    "CSS / SASS ",
  ];

  const serviceNow = [
    "Glide API",
    "HTML & CSS",
    "Client-side Scripting",
    "Server-side scripting",
    "Flow Designer",
    "Cataloguing",
  ];

  const devTools = [
    "Chrome Dev Tools",
    "Postman",
    "Github",
    "Prettier",
    "ES6 Snippets",
    "Gitlens",
  ];

  return (
    <div className="about">
      <div className="heading">
        <h1 data-aos="fade-up">Who am I?</h1>
        <p data-aos="fade-up">
          I am a react front-end developer. I have 2 years of experience in Web
          and Mobile Development
        </p>
        <Link to="/contact">
          <button className="btn btn-about" data-aos="fade-up">
            Contact
          </button>
        </Link>
      </div>

      {/* About Cards */}
      <div className="about-container">
        <AboutCard title="• Tech Stack •" items={techStack} />
        <AboutCard title="• ServiceNow Tools •" items={serviceNow} />
        <AboutCard title="• Dev Tools and Extensions •" items={devTools} />
      </div>

      <div className="social-media-title" data-aos="fade-up">
        <h2>Check Out My YouTube Channel!</h2>
      </div>

      {/* Embed YouTube video */}
      <div className="video-container" data-aos="fade-up">
        <YouTube videoId="QSURtD1gro8" opts={videoOptions} />
      </div>
    </div>
  );
};

export default AboutContent;
