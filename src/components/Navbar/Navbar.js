import React, { useState } from "react";
import "./NavbarStyles.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontStyle: "normal" }}>
          JZ DevHub
        </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/project" onClick={() => setClick(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setClick(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/certifications" onClick={() => setClick(false)}>
            Certifications
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={() => setClick(false)}>
            Work Experiences
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setClick(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
