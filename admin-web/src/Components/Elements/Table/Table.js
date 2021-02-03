import React from "react";
import "./Style.css";

export default function Tabs(props) {
  const { actionsEdit, bodyContent, headContent } = props;

  const _renderTableBody = () => {
    return bodyContent.length > 0 ? (
      bodyContent.map((row, index) => (
        <tr key={index}>
          {headContent.map((item) => {
            let text = row[item.id];
            return <td>{text}</td>;
          })}
        </tr>
      ))
    ) : (
      <tr>
        <td>NO DATA ON TABLE</td>
      </tr>
    );
  };

  const _renderTableHead = () => {
    return headContent.map((row) => {
      return <th>{row.label}</th>;
    });
  };

  return (
    <div className="col-md-12 mt-4">
      <div className="card">
        <div className="card-body">
          <div className="d-md-flex align-items-center">
            <div>
              <h5 className="card-title">Product data.product</h5>
              <h5 className="card-subtitle">List Produk</h5>
            </div>
            <div className="ml-auto">
              <div className="dl">
                <select className="custom-select">
                  <option value="0" selected="">
                    Railing
                  </option>
                  <option value="1">Pintu</option>
                  <option value="2">Kanopi</option>
                  <option value="3">Teralis</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table v-middle">
            <thead>
              <tr className="bg-light">{_renderTableHead()}</tr>
            </thead>
            <tbody>{_renderTableBody(actionsEdit)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
