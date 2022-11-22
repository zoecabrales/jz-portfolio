import "./CertCardStyles.css";

import React from "react";
// import { Link } from "react-router-dom";

const CertCard = ({ heading }) => {
  return (
    <div className="heading">
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
          <div className="card">
            <h3>- Udemy -</h3>
            <a
              href="https://www.udemy.com/certificate/UC-175e280b-6616-408e-aaf6-16be932c70fa/"
              style={{ fontSize: "1.5rem" }}
            >
              Understanding Typescript
            </a>
            <br />
            <br />
            <a
              href="https://www.udemy.com/certificate/UC-752b2f48-d7e1-4b43-af37-33f50c070eee/"
              style={{ fontSize: "1.5rem" }}
            >
              ES6 Javascript
            </a>
            <br />
            <br />
            <a
              href="https://www.udemy.com/certificate/UC-675b0d3e-6dda-40aa-8a63-4a87ae084cb0/"
              style={{ fontSize: "1.5rem" }}
            >
              React Fullstack (Redux, Hooks, GraphQL)
            </a>
            <br />
            <br />
            <a
              href="https://www.udemy.com/certificate/UC-b613aec9-c4e7-4daa-a85b-41d9692dcffc/"
              style={{ fontSize: "1.5rem" }}
            >
              React Native FullStack (NodeJs & ExpressJs)
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
