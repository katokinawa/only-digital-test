import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.module.css";
import { Home } from "./components/home/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
