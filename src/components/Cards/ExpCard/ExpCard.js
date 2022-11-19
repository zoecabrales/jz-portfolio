import React from "react";

import "./ExpCardStyles.css";

const ExpCard = ({heading, text}) => {
  return (
    <div className="heading">
      <h1>{heading}</h1>
        <p>{text}</p>
    <div className="exp">
      <div className="exp-card-container">
        <div className="exp-card">
          <h2>Company: Old St Labs</h2>
          <h4>Project: Kopona </h4>
          <br />
          <p>Junior Frontend Developer</p>
          <p>Code Refactoring</p>
          <p>Bug fixing</p>
          <p>Created UX features</p>
          <p>Deployment to AWS S3 bucket</p>
          <p>Convert code from JS to Typescript</p>
          <p>Hands on with REST API</p>
          <p>React</p>
        </div>
        <div className="exp-card">
          <h2>Company: Viseo </h2>
          <h4>Project: My Unique Moments</h4>
          <br />
          <p>Junior Application Developer</p>
          <p>Code Refactoring</p>
          <p>Push Notifs for iOS and Android</p>
          <p>Country color theme</p>
          <p>Test flight deployment</p>
          <p>Arabic language implementation</p>
          <p>React Native</p>
        </div>
        <div className="exp-card">
          <h2>Company: Ridehero </h2>
          <h4>Project: Aguila</h4>
          <br />
          <p>Junior Software Engineer</p>
          <p>Code Refactoring</p>
          <p>Push Notifs for iOS and Android</p>
          <p>Bug fixing</p>
          <p>Used MVVM design</p>
          <p>Assist on Websockets</p>
          <p>Code refactoring</p>
          <p>Xamarin</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExpCard;
