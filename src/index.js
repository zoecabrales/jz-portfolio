import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/scrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
