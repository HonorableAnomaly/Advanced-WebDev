import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);

// 2 commands required to run this app from 2 terminals:
// 1) npm start
// 2) npm run server
