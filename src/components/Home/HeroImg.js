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
        <p
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          Hi, I am a Full-Time FrontEnd
        </p>
        <h1
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          React Developer.
        </h1>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
          <div className="avatar">
            <img
              src={Avatar2}
              alt="profile"
              style={{ borderRadius: "50% 0 50% 50%" }}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
