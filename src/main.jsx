import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContext, ThemeProvider } from "./Context/ThemeProvider.jsx";
import "./index.css";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
