import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import "./index.css";
import "material-design-icons/iconfont/material-icons.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
