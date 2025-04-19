import React, { useState, useRef, useEffect } from "react";
import "./CertCardStyles.css";
import "../../../components/common/SectionHeadingStyles.css";

const CertCard = ({ heading }) => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const cardRefs = useRef({});

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

  // Set up DOM-based hover effects
  useEffect(() => {
    certifications.forEach((cert) => {
      const card = cardRefs.current[cert.id];
      if (!card) return;

      const handleMouseEnter = () => {
        card.classList.add("hovered");
        setHoveredCert(cert.id);
      };

      const handleMouseLeave = () => {
        card.classList.remove("hovered");
        setHoveredCert(null);
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [certifications]);

  return (
    <div className="heading">
      <h1 className="section-heading">My Digital Certifications</h1>
      <h2>{heading}</h2>
      <h4
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
        className="pricing"
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
              className="card"
              ref={(el) => (cardRefs.current[cert.id] = el)}
            >
              <div className="card-content">
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
                <div
                  className={`hover-info ${
                    hoveredCert === cert.id ? "visible" : ""
                  }`}
                >
                  <p>Instructor: {cert.instructor}</p>
                  <p>Date: {cert.dateCompleted}</p>
                  <p>Video Length: {cert.videoLength}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertCard;
