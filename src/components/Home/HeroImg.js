import "./HeroImgStyles.css";

import React from "react";
import IntroImg2 from "../../assets/home-bg2.jpg";
import Avatar2 from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="mask">
        <img className="intro-img" src={IntroImg2} alt="" />
      </div>
      <div className="content">
        <div className="hero-copy">
          <p className="hero-eyebrow">SOFTWARE DEVELOPER</p>
          <h1 id="hero-title">Hi, I’m Jireh.</h1>
          <p className="hero-description">
            I build thoughtful, user-friendly web and mobile experiences.
          </p>
          <div className="hero-actions">
            <Link to="/project" className="hero-link hero-link-primary">
              View Projects
            </Link>
            <Link to="/contact" className="hero-link hero-link-secondary">
              Contact Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1sf0k4StPm2lKF3TPjx6-XOi3gnVNLtMy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="avatar">
          <img src={Avatar2} alt="Portrait of Jireh" />
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
