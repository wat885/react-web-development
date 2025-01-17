import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk"
import reducers from "./reducers";

// 1.reducers 2.stateเริ่มต้น 3.middleware redux
const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{
  /* <Provider store={store}>
<React.StrictMode>
  <App />
</React.StrictMode>
</Provider>, */
}
