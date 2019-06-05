import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import PrivateRoute from './app.router';
import PageNotFound from './pages/404';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
