import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeButton.css";

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${theme}`} 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggleButton;
