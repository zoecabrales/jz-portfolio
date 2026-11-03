import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="contact-name">Full Name</label>
        <input id="contact-name" name="name" type="text" />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" />

        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Type your message here"
        />
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
          aria-label="Download resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Form;
