import React, { useState } from "react";
import "./NavbarStyles.css";
import { useTheme } from "../../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggleButton from "../Button/ThemeButton";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { theme } = useTheme();

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
    <div className={`header ${color ? "header-bg" : ""} ${theme}`}>
      <Link to="/">
        <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontStyle: "normal", color: theme === 'light' ? '#333' : '#fff' }}>
          JZ DevHub
        </h1>
      </Link>
      <div className="nav-wrapper">
        <ul className={`nav-menu ${click ? "active" : ""} ${theme}`}>
          <li>
            <Link to="/project" onClick={() => setClick(false)} className={theme}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setClick(false)} className={theme}>
              About
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={() => setClick(false)} className={theme}>
              Work Experiences
            </Link>
          </li>
          {/* <li>
            <Link to="/contact" onClick={() => setClick(false)}>
              Contact
            </Link>
          </li> */}
        </ul>
        <ThemeToggleButton />
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: theme === 'light' ? '#333' : '#fff' }} />
          ) : (
            <FaBars size={20} style={{ color: theme === 'light' ? '#333' : '#fff' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
