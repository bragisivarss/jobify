import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Zoom, ToastContainer } from "react-toastify";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      stacked
      transition={Zoom}
      position="bottom-center"
      autoClose={2500}
      limit={2}
      newestOnTop
      theme="colored"
    />
  </React.StrictMode>
);
