import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import rootSaga from "./sagas";
import reducer from "./store/reducer";

const sagaMiddleware = createSagaMiddleware();
//const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
