import React, { useState } from "react";
import "./CertCardStyles.css";
// import TSCert from "../../../assets/TScert.jpg";

const CertCard = ({ heading }) => {
  const [hoveredCert, setHoveredCert] = useState(null);

  return (
    <div className="heading">
      <h1>My Digital Certifications</h1>
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
          <div
            className="card"
            onMouseEnter={() => setHoveredCert("typescript")}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3>- Udemy -</h3>
            <a
              href="https://www.udemy.com/certificate/UC-175e280b-6616-408e-aaf6-16be932c70fa/"
              style={{ fontSize: "1.5rem" }}
            >
              Understanding TypeScript
            </a>
            <br />
          </div>

          <div
            className="card"
            onMouseEnter={() => setHoveredCert("")}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3>- Udemy -</h3>
            <a
              href="https://www.udemy.com/certificate/UC-752b2f48-d7e1-4b43-af37-33f50c070eee/"
              style={{ fontSize: "1.5rem" }}
            >
              ES6 Javascript
            </a>
          </div>

          <div
            className="card"
            onMouseEnter={() => setHoveredCert("")}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3>- Udemy -</h3>
            <a
              href="https://www.udemy.com/certificate/UC-675b0d3e-6dda-40aa-8a63-4a87ae084cb0/"
              style={{ fontSize: "1.5rem" }}
            >
              React Fullstack (Redux, Hooks, GraphQL)
            </a>
          </div>

          <div
            className="card"
            onMouseEnter={() => setHoveredCert("")}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3>- Udemy -</h3>
            <a
              href="https://www.udemy.com/certificate/UC-b613aec9-c4e7-4daa-a85b-41d9692dcffc/"
              style={{ fontSize: "1.5rem" }}
            >
              React Native FullStack (NodeJs & ExpressJs)
            </a>
          </div>

          <div
            className="card"
            onMouseEnter={() => setHoveredCert("")}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <h3>- Udemy -</h3>
            <a
              href="https://www.udemy.com/certificate/UC-d18ffd27-832f-41d7-9efe-4a6506140604/"
              style={{ fontSize: "1.5rem" }}
            >
              ServiceNow Developer Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
