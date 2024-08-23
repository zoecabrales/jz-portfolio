import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggleButton;
