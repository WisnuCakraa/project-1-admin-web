import React, { useState } from "react";
import LoginImage from "../../Assets/Galery/undraw_dev_focus.svg";
import { useForm } from "react-hook-form";
import { ROUTES } from "../../configs";
import "./Style.css";

export default function Component() {
  const [alert, setAlert] = useState("");
  const { register, handleSubmit, errors } = useForm();

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
                <form onSubmit={handleSubmit(doLogin)}>
                  <div className="form-group">
                    <label htmlFor="text">Username : </label>
                    <input
                      className="form-control"
                      ref={register({ required: true })}
                      name="username"
                    />
                    {errors.username && (
                      <p className="error mt-1">username harus diisi</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">Password : </label>
                    <input
                      className="form-control"
                      ref={register({ required: true })}
                      name="password"
                    />
                    {errors.password && (
                      <p className="error mt-1">password harus diisi</p>
                    )}
                  </div>
                  <button className="btn btn-block btn-primary">Log in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
