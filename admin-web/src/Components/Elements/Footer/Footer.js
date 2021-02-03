import React from "react";
import "./Style.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-left">
            <p className="mb-0">
              <a href="index.html" className="text-muted">
                <strong> </strong>Make with love nunu
              </a>
            </p>
          </div>
          <div className="col-6 text-right">
            <ul className="list-inline">
              <li className="footer-item">
                <a className="text-muted" href="#">
                  Support
                </a>
              </li>
              <li className="footer-item">
                <a className="text-muted" href="#">
                  Help Center
                </a>
              </li>
              <li className="footer-item">
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li className="footer-item">
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
