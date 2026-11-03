import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./FooterStyles.css";

const Footer = () => {
  const { theme } = useTheme();
  const socialLinks = [
    { href: "https://www.facebook.com/", label: "Facebook", Icon: FaFacebook },
    {
      href: "https://www.linkedin.com/in/jireh-zoe-cabrales-74ba5164/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    { href: "https://github.com/zoecabrales", label: "GitHub", Icon: FaGithub },
    {
      href: "https://www.youtube.com/@jirehzoecabrales5060",
      label: "YouTube",
      Icon: FaYoutube,
    },
  ];

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
            <FaHome className="footer-contact-icon" aria-hidden="true" />
            <div>
              <p>Opon Lapu-Lapu City, Cebu</p>
              <p>Philippines</p>
            </div>
          </div>
          <a className="footer-contact-item" href="tel:+639453816177">
            <FaPhone className="footer-contact-icon" aria-hidden="true" />
            <span>+63 945-381-6177</span>
          </a>
          <a className="footer-contact-item" href="mailto:jirehzoe@gmail.com">
            <FaEnvelope className="footer-contact-icon" aria-hidden="true" />
            <span>jirehzoe@gmail.com</span>
          </a>
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
          <nav className="social" aria-label="Social profiles">
            {socialLinks.map(({ href, label, Icon }, index) => (
              <a
                key={label}
                href={href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-aos="zoom-in"
                data-aos-delay={100 * (index + 1)}
              >
                <Icon size={22} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
