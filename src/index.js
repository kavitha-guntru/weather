/*import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider


import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Wrap App with Provider *//*}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();*/


//2


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/Store"; // Import your Redux store
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
