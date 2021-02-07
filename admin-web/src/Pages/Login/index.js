import { reduxForm } from "redux-form";
import { changeUserSession } from "../../Actions/user";
import { withRouter } from "react-router";
import Login from "./Component";
import { connect } from "react-redux";

let Component = Login;

Component = reduxForm({
  form: "login",
})(Login);

export function mapDispatchToProps() {
  return {
    changeUserSession: changeUserSession,
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Component));
