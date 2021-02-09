import { changeUserSession } from "../../Actions/user";
import { withRouter } from "react-router";
import Component from "./Component";
import { connect } from "react-redux";

export function mapDispatchToProps() {
  return {
    changeUserSession: changeUserSession,
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Component));
