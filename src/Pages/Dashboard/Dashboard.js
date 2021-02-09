import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../configs";
import MainContent from "../../Components/MainContent";
import { dataFilter } from "../../Utility/DummyData/dummy";
import { getListProductJson } from "../../Utility/DummyData";
import Table from "../../Components/Elements/Table";
import {
  nextPaging,
  pagination,
  paging,
  previousPaging,
  totalPages,
} from "../../Components/Elements/Pagination";
import "./Style.css";

export default function Dashboard() {
  const data = getListProductJson.response.data;
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    setListProduct(data.product);
  });

  const _renderHeaderTable = [
    { id: "no", label: "No." },
    { id: "productName", label: "Nama Produk" },
    { id: "productCategory", label: "Kategori Produk" },
    { id: "descriptionProduct", label: "Deskripsi" },
    { id: "actions", label: "actions" },
  ];

  const _renderDataFilter = () => {
    return dataFilter.map((item, i) => {
      const { label, value } = item;
      return (
        <option value={value} key={i}>
          {label}
        </option>
      );
    });
  };

  const _renderActions = (item) => {
    console.log(item);
    return (
      <Link
        className="fas fa-edit"
        to={{
          pathname: "/dashboard/id",
        }}
      ></Link>
    );
  };

  const renderList = listProduct
    .filter((item) => {
      return item.type === "pintu";
    })
    .map((item, index) => {
      return {
        ...item,
        no: index + 1,
        type: item.type,
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
        <div className="card col-md-12 mt-lg-4 mt-4">
          <div className="card-body">
            <div className="d-md-flex align-items-center">
              <div>
                <h4 className="card-title">List Produk</h4>
                <h5 className="card-subtitle">
                  Table produk untuk mengupdate web customer
                </h5>
              </div>
              <div className="ml-auto">
                <div className="dl">
                  <select defaultValue="asd" className="custom-select">
                    {_renderDataFilter()}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 ml-1">
          <Link to={ROUTES.NEW_PRODUCT()}>
            <div className="fas fa-plus-square fa-2x"></div>
          </Link>
        </div>
        <Table bodyContent={renderList} headContent={_renderHeaderTable} />
      </div>
      <div className="d-flex justify-content-end">{pagination(paging)}</div>
    </MainContent>
  );
}
