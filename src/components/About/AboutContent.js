import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="heading">
        <h1>Who am I?</h1>
        <p>
          I am a react front-end developer. I have 2 years of experience in Web
          and Mobile Development
        </p>
        <Link to="/contact">
          <button className="btn btn-about">Contact</button>
        </Link>
        <div className="about-container">
          <div className="about-card">
            <h3>• Tech Stack •</h3>
            <p>HTML</p>
            <p>Javascript / Typescript</p>
            <p>React / React Native</p>
            <p>Firebase</p>
            <p>Redux / Context API</p>
            <p>Axios / Fetch</p>
            <p>CSS / SASS / Styled Components</p>
          </div>
          <div className="about-card">
            <h3>• Design Tools •</h3>
            <p>Adobe XD</p>
            <p>Storybook</p>
            <p>Figma</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
          </div>
          <div className="about-card">
            <h3>• Dev Tools and Extensions •</h3>
            <p>Chrome Dev Tools</p>
            <p>Postman</p>
            <p>Thunder Client</p>
            <p>Github / GitLab</p>
            <p>ESLint</p>
            <p>Prettier</p>
            <p>ES7 Snippets</p>
            <p>Gitlens</p>
            <p>NPM Intellisense</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
