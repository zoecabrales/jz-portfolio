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
        <h1
          style={{ fontFamily: "Montserrat sans-serif", fontStyle: "normal" }}
          data-aos="fade-down"
          data-aos-delay="300"
        >
          JZ Portfolio
        </h1>
      </Link>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        data-aos="fade-down"
        data-aos-delay="100"
        
      >
        <li data-aos="fade-down" data-aos-delay="200" >
          <Link to="/project">Projects</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="300">
          <Link to="/about">About</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="400">
          <Link to="/certifications">Certifications</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="500">
          <Link to="/work">Work Experiences</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="600">
          <Link to="/contact">Contact</Link>
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
