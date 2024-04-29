import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import styles from "./styles/global.module.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <div className={styles.globalStyles}>
        <App />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
