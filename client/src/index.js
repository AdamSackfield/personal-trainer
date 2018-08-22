import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './index.scss';

import App from "./components/stateful/App";

ReactDOM.render(
  <Router history={createBrowserHistory({})}>
    <App />
  </Router>,
  document.getElementById("app")
);