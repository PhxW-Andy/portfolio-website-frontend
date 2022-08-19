import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

import App from "./App";
import { BrowserRouter } from "react-router-dom";

//include all styles
import "../src/scss/style.scss";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
