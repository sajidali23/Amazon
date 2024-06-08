import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
