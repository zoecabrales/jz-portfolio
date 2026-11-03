import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggleButton from "../Button/ThemeButton";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { theme } = useTheme();

  const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => setColor(window.scrollY >= 1);
    changeColor();
    window.addEventListener("scroll", changeColor, { passive: true });
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={`header ${color ? "header-bg" : ""} ${theme}`}>
      <Link to="/" className="header-brand" aria-label="JZ DevHub home">
        JZ DevHub
      </Link>
      <ul
        id="primary-navigation"
        className={`nav-menu ${click ? "active" : ""}`}
      >
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
      <div className="theme-toggle-container">
        <ThemeToggleButton />
      </div>
      <button
        type="button"
        className="hamburger"
        onClick={handleClick}
        aria-label={click ? "Close navigation" : "Open navigation"}
        aria-expanded={click}
        aria-controls="primary-navigation"
      >
        {click ? (
          <FaTimes
            size={20}
            aria-hidden="true"
            style={{ color: theme === "light" ? "#333" : "#fff" }}
          />
        ) : (
          <FaBars
            size={20}
            aria-hidden="true"
            style={{ color: theme === "light" ? "#333" : "#fff" }}
          />
        )}
      </button>
    </div>
  );
};

export default Navbar;
