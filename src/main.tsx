import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { HelpScoutContextProvider } from "@helpscout/ui-kit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelpScoutContextProvider>
      <App />
    </HelpScoutContextProvider>
  </React.StrictMode>
);
