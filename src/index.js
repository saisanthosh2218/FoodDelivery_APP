import React from "react";
import { createRoot } from "react-dom/client";
import store from "./reducer/store";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootInstance = createRoot(root);
rootInstance.render(app);
