import React from "react";
import "./Style.css";

export default function Card() {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Sales</h5>
              <h1 className="display-5 mt-1 mb-3">2.382</h1>
              <div className="mb-1">
                <span className="text-danger">
                  <i className="mdi mdi-arrow-bottom-right"></i> -3.65%
                </span>
                <span className="text-muted">Since last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
