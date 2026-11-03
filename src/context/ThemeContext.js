import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((previousTheme) =>
      previousTheme === "dark" ? "light" : "dark"
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
