import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RelationContextProvider } from "./context/RelationContext";

ReactDOM.render(
  <RelationContextProvider>
    <App />
  </RelationContextProvider>,
  document.getElementById("root")
);
