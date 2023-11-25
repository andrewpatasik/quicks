import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QuickTabProvider } from "./hooks/useQuickTab.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuickTabProvider>
      <App />
    </QuickTabProvider>
  </React.StrictMode>
);
