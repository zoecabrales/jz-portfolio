import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import "./FooterStyles.css";

const Footer = () => {
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

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Opon Lapu-Lapu City, Cebu</p>
              <p>Philippines</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +63 945-381-6177
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaEnvelope
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jirehzoe@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a Junior Frontend Developer with 2 years of experience in
            software development, I enjoy discussing new project ideas and
            design challenges
          </p>
          <div className="social">
            <div className="social-fb">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
                onClick={navToFacebook}
              />
            </div>
            <div className="social-fb">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
                onClick={navToLinkedIn}
              />
            </div>
            <div className="social-fb">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
                onClick={navToGithub}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
