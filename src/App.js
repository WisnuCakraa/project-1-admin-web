import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "./configs";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Product from "./Pages/Product";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.LOGIN()} component={Login} />
          <Route path={ROUTES.DASHBOARD()} component={Dashboard} />
          <Route path={ROUTES.NEW_PRODUCT()} component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default App;
