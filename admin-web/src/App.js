import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product/Product";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default App;
