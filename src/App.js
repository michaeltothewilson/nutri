import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import FoodLog from "./FoodLog";
import Browse from "./Browse";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page-content row h-100">
          <nav className="col-12 col-sm-2 pt-4 sidebar">
            <h1 className="logo">nutri</h1>
            <ul className="nav flex-column">
              <hr/>
              <li className="nav-item nav-link">
                <Link to="/">dashboard</Link>
              </li>
              <hr/>
              <li className="nav-item nav-link">
                <Link to="/foodlog">food log</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/browse">browse</Link>
              </li>
              <hr/>
            </ul>
          </nav>
          <div className="col-12 col-sm-10" id="dashboard">
            <div className="search-bar">
              <nav className="container navbar navbar-light justify-content-between">
                <a className="navbar-brand">nutrition, simplified 🥕</a>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for a food" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav>
            </div>
            <div className="dashboard-body">
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/foodlog">
                  <FoodLog />
                </Route>
                <Route path="/browse">
                  <Browse />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
