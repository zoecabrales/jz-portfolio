import React from "react";
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

        <div className="about-container">
          <div
            className="about-card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h3>• Tech Stack •</h3>
            <p>HTML</p>
            <p>Javascript / Typescript</p>
            <p>React / React Native</p>
            <p>Firebase</p>
            <p>Redux / Context API</p>
            <p>Axios / Fetch</p>
            <p>CSS / SASS / Styled Components / MUI</p>
            <p>Node JS</p>
            <p>mySQL DB </p>
          </div>
          <div
            className="about-card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h3>• Design Tools •</h3>
            <p>Adobe XD</p>
            <p>Storybook</p>
            <p>Figma</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
          </div>
          <div
            className="about-card"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <h3>• Dev Tools and Extensions •</h3>
            <p>Chrome Dev Tools</p>
            <p>Postman</p>
            <p>Thunder Client</p>
            <p>Github / GitLab</p>
            <p>ESLint</p>
            <p>Prettier</p>
            <p>ES6 Snippets</p>
            <p>Gitlens</p>
          </div>
        </div>
      </div>
      {/* Embed YouTube video */}
      <div className="video-container" data-aos="fade-up">
        <YouTube videoId="QSURtD1gro8" opts={videoOptions} />
      </div>
    </div>
  );
};

export default AboutContent;
