import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute(props) {
  const { path, changeSession } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        return changeSession ? (
          <this.props.Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    changeSession: state.changeSession,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
