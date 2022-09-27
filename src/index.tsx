import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { hydrate } from "react-dom";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
