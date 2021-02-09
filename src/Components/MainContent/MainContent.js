import React from "react";
import Footer from "../Elements/Footer/Footer";
import Sidebar from "../Elements/Sidebar/Sidebar";
import { IMAGES } from "../../configs";
import "./Style.css";

$(document).ready(function () {
  $("#bar").click(function () {
    $(this).toggleClass("open");
    $("#page-content-wrapper , #sidebar-wrapper").toggleClass("toggled");
  });
});

export default function MainContent(props) {
  return (
    <div id="wrapper">
      <div className="overlay"></div>
      <Sidebar />
      <div id="page-content-wrapper">
        <div id="content">
          <div className="container-fluid p-0 px-lg-0 px-md-0">
            <nav className="navbar navbar-expand navbar-light my-navbar">
              <div
                type="button"
                id="bar"
                className="nav-icon1 hamburger animated fadeInLeft is-closed"
                data-toggle="offcanvas"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Bie Chan
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={IMAGES.PROFILE}
                    />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="wrap-dash container-fluid px-lg-4">
              {props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
