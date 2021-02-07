import React, { useState } from "react";
import { Field, Form } from "redux-form";
import LoginImage from "../../Assets/Galery/undraw_dev_focus.svg";
import { ROUTES } from "../../configs";
import "./Style.css";

export default function Component(props) {
  const { handleSubmit } = props;
  const [alert, setAlert] = useState("");

  const doLogin = (inputProps) => {
    const { username, password } = inputProps;
    try {
      if (username === "wisnu" && password === "wisnu") {
        window.location.href = ROUTES.DASHBOARD();
      } else {
        setAlert("show");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const _renderAlert = () => {
    return (
      <div
        className={`alert alert-danger alert-dismissible fade ${alert}`}
        role="alert"
      >
        <strong>Username / Password salah!</strong>
        <button
          type="button"
          onClick={() => (window.location.href = ROUTES.LOGIN())}
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={LoginImage} alt="Image" className="img-fluid" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3 className="text-title">Log In</h3>
                  <p className="mb-4">
                    Selamat datang di web admin, silahkan login untuk
                    melanjutkan
                  </p>
                </div>
                {alert === "show" ? _renderAlert() : <></>}
                <Form onSubmit={handleSubmit(doLogin)}>
                  <div className="form-group">
                    <label htmlFor="text">Username : </label>
                    <Field
                      name="username"
                      component="input"
                      maxLength="35"
                      pattern="[A-Za-z]+"
                      className="form-control"
                      type="text"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">Password : </label>
                    <Field
                      name="password"
                      component="input"
                      maxLength="35"
                      pattern="[A-Za-z]+"
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button className="btn btn-block btn-primary">Log in</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
