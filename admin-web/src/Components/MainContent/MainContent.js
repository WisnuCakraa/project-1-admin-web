import React from "react";
import Footer from "../Elements/Footer/Footer";
import Sidebar from "../Elements/Sidebar/Sidebar";
import Navbar from "../Elements/Navbar/Navbar";
import "./Style.css";

export default function MainContent(props) {
  return (
    <div id="wrapper">
      <div className="overlay"></div>
      <Sidebar />
      <div id="page-content-wrapper">
        <div id="content">
          <div className="container-fluid p-0 px-lg-0 px-md-0">
            <Navbar />
            <div className="wrap-dash container-fluid px-lg-4">
              {props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
