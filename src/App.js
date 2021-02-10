import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routesApp } from "./configs/routesApp";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routesApp.map((item, index) => {
            const { exact, path, compt } = item;
            return (
              <Route key={index} exact={exact} path={path} component={compt} />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
