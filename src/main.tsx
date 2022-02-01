import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Global from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>,
  document.getElementById("root")
);
