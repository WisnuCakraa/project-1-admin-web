import React from "react";
import { dataFilter } from "../../Utility/DummyData/dummy";
import { useForm } from "react-hook-form";
import "./Style.css";
// import { IMAGES } from "../../configs";

export default function Product() {
  const { handleSubmit, register, errors } = useForm();
  const _renderTypeProduct = () => {
    return dataFilter.map((item, index) => {
      return (
        <option value={item.value} key={index}>
          {item.label}
        </option>
      );
    });
  };
  const onSubmit = (inputProps) => {
    console.log(inputProps);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6, col-md-6 col-xs-12">
                <label className="ml-1" htmlFor="text">
                  Nama Produk
                </label>
                <input
                  name="productName"
                  className="form-control"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.productName && (
                  <p className="error mt-1">Produk Name harus diisi</p>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <label className="ml-1" htmlFor="text">
                  Kategori Produk
                </label>
                <input
                  name="productCategory"
                  className="form-control"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.productName && (
                  <p className="error mt-1">Produk Name harus diisi</p>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 mt-3">
                <label className="ml-1" htmlFor="text">
                  Type Produk
                </label>
                <select
                  name="type"
                  className="form-control"
                  ref={register({
                    required: true,
                  })}
                >
                  {_renderTypeProduct()}
                </select>
                {errors.type && (
                  <p className="error mt-1">Produk Name harus diisi</p>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 mt-3">
                <label className="ml-1" htmlFor="text">
                  Deskripsi
                </label>
                <input
                  name="description"
                  className="form-control"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.description && (
                  <p className="error mt-1">Produk Name harus diisi</p>
                )}
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12 mt-3">
                <label className="ml-1">Profile Picture</label>
                <input
                  name="profilePicture"
                  className="form-control"
                  type="file"
                  ref={register({
                    required: true,
                  })}
                />
                {errors.profilePicture && (
                  <p className="error mt-1">Produk Name harus diisi</p>
                )}
              </div>
            </div>
            <button className="btn btn-primary mt-3 " type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
