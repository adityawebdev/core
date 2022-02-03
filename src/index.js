import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContextProvider";
import { ColorContextProvider } from "./context/ColorContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <ColorContextProvider>
      <Router>
        <App />
      </Router>
    </ColorContextProvider>
  </ResultContextProvider>,
  document.getElementById("root")
);
