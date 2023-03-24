import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Q1Page from "./Q1Page";
import Q2Page from "./Q2Page";

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/q1">Question 1</Link>
      </li>
      <li>
        <Link to="/q2">Question 2</Link>
      </li>
    </ul>
  </div>
);

const Q1 = () => (
  <div>
    <Q1Page />
  </div>
);

const Q2 = () => (
  <div style={{ background: "#f5f8fa", width: "100%", height: "100vh" }}>
    <Q2Page />
  </div>
);

const App = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/q1">
        <Q1 />
      </Route>
      <Route path="/q2">
        <Q2 />
      </Route>
    </Switch>
  </main>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
