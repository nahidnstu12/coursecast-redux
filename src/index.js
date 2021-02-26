import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore.js";

const store = configureStore();

render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("app")
);
