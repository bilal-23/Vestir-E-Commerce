import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./typography.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop.ts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        className={"toast-container"}
        limit={2}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
