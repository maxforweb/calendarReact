import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
import "./styles.css";
import "./styles.scss";

import store from './store';


var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , mountNode
);