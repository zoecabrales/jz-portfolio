import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Full Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="email"></input>

        <label>Subject</label>
        <input type="text"></input>

        <label>Message</label>
        <textarea rows={6} placeholder="Type your message here" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div className="or-divider">
        <span>OR</span>
      </div>
      <div className="resume-download">
        <a
          href="https://drive.google.com/file/d/1sf0k4StPm2lKF3TPjx6-XOi3gnVNLtMy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Form;
