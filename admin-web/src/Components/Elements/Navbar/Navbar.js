import React from "react";
import bie from "../../Utility/Galery/profile.JPG";
import "./Style.css";

$(document).ready(function () {
  $("#bar").click(function () {
    $(this).toggleClass("open");
    $("#page-content-wrapper ,#sidebar-wrapper").toggleClass("toggled");
  });
});

export default function Navbar() {
  return (
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
            <img className="img-profile rounded-circle" src={bie} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
