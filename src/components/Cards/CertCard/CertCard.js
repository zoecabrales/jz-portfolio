import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import "./CertCardStyles.css";

const CertCard = ({ heading }) => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const { theme } = useTheme();

  const certifications = [
    {
      id: "typescript",
      title: "Understanding TypeScript",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmuller",
      dateCompleted: "04-23-2022",
      videoLength: "15 hours",
      link: "https://www.udemy.com/certificate/UC-175e280b-6616-408e-aaf6-16be932c70fa/",
    },
    {
      id: "es6",
      title: "ES6 JavaScript",
      platform: "Udemy",
      instructor: "Stephen Grider",
      dateCompleted: "04-22-2022",
      videoLength: "6.5 hours",
      link: "https://www.udemy.com/certificate/UC-752b2f48-d7e1-4b43-af37-33f50c070eee/",
    },
    {
      id: "react",
      title: "React Fullstack (Redux, Hooks, GraphQL)",
      platform: "Udemy",
      instructor: "Andrei Neagoie, Yihua Zhang, Zero To Mastery",
      dateCompleted: "9-22-2022",
      videoLength: "39 hours",
      link: "https://www.udemy.com/certificate/UC-675b0d3e-6dda-40aa-8a63-4a87ae084cb0/ ",
    },
    {
      id: "servicenow",
      title: "ServiceNow Developer Course",
      platform: "Udemy",
      instructor: "Mark Miller, Singa Code",
      dateCompleted: "12-23-2022",
      videoLength: "8.5 hours",
      link: "https://www.udemy.com/certificate/UC-d18ffd27-832f-41d7-9efe-4a6506140604/",
    },
  ];

  // Get the current hovered certification details
  const hoveredCertDetails = certifications.find(
    (cert) => cert.id === hoveredCert
  );

  return (
    <div className={`heading ${theme}`}>
      <h1 className={theme}>My Digital Certifications</h1>
      <h2 className={theme}>{heading}</h2>
      <h4
        className={theme}
        style={{ marginTop: "50px" }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        Hover and click the list.
      </h4>
      <div
        className={`pricing ${theme}`}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div className="card-container">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`card ${theme}`}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <h3>- {cert.platform} -</h3>
              <a
                href={cert.link}
                style={{ fontSize: "1.5rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.title}
              </a>
              <br />
              {hoveredCert === cert.id && (
                <div className="hover-info">
                  <p>Instructor: {cert.instructor}</p>
                  <p>Date: {cert.dateCompleted}</p>
                  <p>Video Length: {cert.videoLength}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertCard;
