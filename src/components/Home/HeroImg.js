import "./HeroImgStyles.css";

import React from "react";
import IntroImg2 from "../../assets/home-bg2.jpg";
import Avatar2 from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg2} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I am a Full-Time</p>
        <h1>Software Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1sf0k4StPm2lKF3TPjx6-XOi3gnVNLtMy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            My Resume
          </a>
          <div className="avatar">
            <img
              src={Avatar2}
              alt="profile"
              style={{ borderRadius: "50% 50% 50% 50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
