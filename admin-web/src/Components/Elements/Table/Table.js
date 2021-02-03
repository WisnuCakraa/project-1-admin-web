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
