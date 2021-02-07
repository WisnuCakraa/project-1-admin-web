import React from "react";
import { ROUTES } from "../../../configs";
import "./Style.css";

export default function Sidebar() {
  return (
    <nav className="fixed-top align-top" id="sidebar-wrapper" role="navigation">
      <div className="simplebar-content" style={{ padding: "0px" }}>
        <a className="sidebar-brand" href={ROUTES.DASHBOARD()}>
          <span className="align-middle">Wisnu Design</span>
        </a>

        <ul className="sidebar-nav align-self-stretch">
          <li>
            <a
              href={ROUTES.DASHBOARD()}
              className="nav-link text-left"
              role="button"
              aria-expanded="false"
            >
              <i className="flaticon-bar-chart-1"></i> Dashboard
            </a>
          </li>
          <li>
            <a
              href="/product"
              className="nav-link text-left"
              role="button"
              aria-expanded="false"
            >
              <i className="flaticon-bar-chart-1"></i> Product
            </a>
          </li>

          {/* <li className="has-sub">
            <a
              className="nav-link collapsed text-left"
              href="#collapseExample2"
              role="button"
              data-toggle="collapse"
            >
              <i className="flaticon-user"></i> Layanan
            </a>
            <div className="collapse menu mega-dropdown" id="collapseExample2">
              <div className="dropmenu" aria-labelledby="sidebarDropdown">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 px-2">
                      <div className="submenu-box">
                        <ul className="drop-menu list-unstyled m-0">
                          <li>
                            <a href="/pintu">Pintu</a>
                          </li>
                          <li>
                            <a href="/kontruksi-besi">Kontruksi Besi</a>
                          </li>
                          <li>
                            <a href="/kanopi">Kanopi</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li> */}
          <li className="">
            <a className="sidebar-link text-left" role="button">
              <i className="flaticon-bar-chart-1"></i> setting
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
