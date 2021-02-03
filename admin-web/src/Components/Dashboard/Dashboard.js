import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import MainContent from "../MainContent/MainContent";
import Card from "../Elements/Card/Card";
import Table from "../Elements/Table/Table";
import { dataTable } from "../Utility/DummyData/dummy";
import { getListProductJson } from "../Utility/DummyData";
import "./Style.css";

export default function Dashboard() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {});

  const _renderHeaderTable = [
    { id: "no", label: "No." },
    { id: "productName", label: "Nama Produk" },
    { id: "productCategory", label: "Kategori Produk" },
    { id: "descriptionProduct", label: "Deskripsi" },
    { id: "actions", label: "actions" },
  ];

  const _renderActions = () => {
    return (
      <Link>
        <i
          onClick={() => {
            alert("click");
          }}
          className="fas fa-edit"
        ></i>
      </Link>
    );
  };

  const renderList = dataTable.map((item, index) => {
    return {
      ...item,
      no: index + 1,
      productName: item.productName,
      productCategory: item.productCategory,
      descriptionProduct: item.descriptionProduct,
      actions: _renderActions(item),
    };
  });
  return (
    <MainContent>
      <div className="row">
        <div className="col-md-12 mt-lg-4 mt-4">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i>
              Generate Report
            </a>
          </div>
        </div>
        <Card />
        <Table
          actionsEdit={_renderActions()}
          bodyContent={renderList}
          headContent={_renderHeaderTable}
        />
      </div>
    </MainContent>
  );
}
