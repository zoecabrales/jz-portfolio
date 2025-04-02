import React from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

import "./FooterStyles.css";

const Footer = () => {
  const { theme } = useTheme();
  
  const navToFacebook = () => {
    return (window.location.href = "https://www.facebook.com/");
  };

  const navToLinkedIn = () => {
    return (window.location.href =
      "https://www.linkedin.com/in/jireh-zoe-cabrales-74ba5164/");
  };

  const navToGithub = () => {
    return (window.location.href = "https://github.com/zoecabrales");
  };

  const navToYT = () => {
    return (window.location.href =
      "https://www.youtube.com/@jirehzoecabrales5060");
  };

  return (
    <div className={`footer ${theme}`}>
      <div className="footer-container">
        <div
          className="left"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="location">
            <FaHome size={20} style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }} />
            <div>
              <p>Opon Lapu-Lapu City, Cebu</p>
              <p>Philippines</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }}
              />
              +63 945-381-6177
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaEnvelope
                size={20}
                style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }}
              />
              jirehzoe@gmail.com
            </h4>
          </div>
        </div>
        <div
          className="right"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <h4>About Me</h4>
          <p>
            I am a Software Developer with 3+ years of experience in software
            development, I enjoy discussing new project ideas and design
            challenges.
          </p>
          <div className="social">
            <div className="social-fb" data-aos="zoom-in" data-aos-delay="100">
              <FaFacebook
                size={30}
                style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }}
                onClick={navToFacebook}
              />
            </div>
            <div className="social-fb" data-aos="zoom-in" data-aos-delay="200">
              <FaLinkedin
                size={30}
                style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }}
                onClick={navToLinkedIn}
              />
            </div>
            <div className="social-fb" data-aos="zoom-in" data-aos-delay="300">
              <FaGithub
                size={30}
                style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }}
                onClick={navToGithub}
              />
            </div>
            <div className="social-fb" data-aos="zoom-in" data-aos-delay="300">
              <FaYoutube
                size={30}
                style={{ color: theme === 'light' ? '#333' : '#fff', marginRight: "2rem" }}
                onClick={navToYT}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
