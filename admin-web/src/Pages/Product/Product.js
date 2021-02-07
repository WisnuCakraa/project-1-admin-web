import React from "react";
import { dataFilter } from "../../Components/Utility/DummyData/dummy";
import { Field, Form } from "redux-form";
import { IMAGES } from "../../configs";

export default function Product(props) {
  const { handleSubmit } = props;

  const _renderTypeProduct = () => {
    return dataFilter.map((item, index) => {
      return <option key={index}>{item.label}</option>;
    });
  };

  const onFormSubmit = (data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("profile_pic", data.profile_pic[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const url = "http://example.com/fileupload/";
    post(url, formData, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6, col-md-6 col-xs-12">
                <label className="ml-1" htmlFor="text">
                  Nama Produk
                </label>
                <Field
                  name="productName"
                  component="input"
                  maxLength="35"
                  pattern="[A-Za-z]+"
                  className="form-control"
                  type="text"
                  placeholder="Nama Produk"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <label className="ml-1" htmlFor="text">
                  Kategori Produk
                </label>
                <Field
                  name="productCategory"
                  component="input"
                  maxLength="35"
                  pattern="[A-Za-z]+"
                  className="form-control"
                  type="text"
                  placeholder="Kategori Produk"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 mt-3">
                <label className="ml-1" htmlFor="text">
                  Type Produk
                </label>
                <Field
                  name="type"
                  component="select"
                  className="form-control"
                  type="text"
                >
                  {_renderTypeProduct()}
                </Field>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 mt-3">
                <label className="ml-1" htmlFor="text">
                  Deskripsi
                </label>
                <Field
                  name="description"
                  component="input"
                  pattern="[A-Za-z]+"
                  className="form-control"
                  type="text"
                  placeholder="Deskripsi  "
                />
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <label className="ml-1">Profile Picture</label>
                <input type="file" />
              </div>
            </div>
            <button className="btn btn-primary mt-3 " type="submit">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
