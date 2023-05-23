import React, { useState } from "react";
import "../styles/AddProduct.scss";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose, AiOutlineCamera } from "react-icons/ai";

const AddProduct = ({ show, handleClose }) => {
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState(null);
  return (
    <Modal id="add-products" show={show} onHide={handleClose}>
      <div className="d-flex align-items-center">
        <h2 className="add-products-title ms-auto">Add New Products</h2>
        <button onClick={handleClose} className="ms-auto me-3 border-0">
          <AiOutlineClose className="fs-4" />
        </button>
      </div>
      <div>
        <form className="add-product">
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="category">
              Category <span className="text-danger">*</span>
            </label>
            <select className="add-product-input" name="category" id="category">
              <option value="computer">Computer</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="camera">Camera</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="product-name">
              Product Name <span className="text-danger">*</span>
            </label>
            <select
              className="add-product-input"
              name="product-name"
              id="product-name"
            >
              <option value="computer">Desktop</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="camera">Camera</option>
            </select>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="serial-number">
              Serial Number
            </label>
            <input
              type="text"
              className="add-product-input"
              name="serial-number"
              id="serial-number"
            ></input>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="purchase-price">
              Purchase Price <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="add-product-input"
              name="purchase-price"
              id="purchase-price"
            ></input>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="purchase-date">
              Purchase Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="add-product-input"
              name="purchase-date"
              id="purchase-date"
            ></input>
          </div>
          <div className="warranty">
            <input
              className="warranty-input"
              type="checkbox"
              id="has-warranty"
              name="has-warranty"
              value="has-warranty"
              onClick={() => setChecked(!checked)}
            ></input>
            <label className="warranty-label" htmlFor="has-warranty">
              Has Warranty
            </label>
          </div>
          {checked && (
            <>
              <div className="add-product-field">
                <label className="add-product-label" htmlFor="warranty">
                  Warranty <span className="text-danger">*</span>
                </label>
                <select
                  className="add-product-input"
                  name="warranty"
                  id="warranty"
                >
                  <option value="3">3</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="add-product-field">
                <label className="add-product-label" htmlFor="expire-date">
                  Expire Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="add-product-input"
                  name="expire-date"
                  id="expire-date"
                ></input>
              </div>
            </>
          )}
          <div className="image">
            <div className="image-btn-div">
              <label
                htmlFor="image"
                onClick={() => console.log("picture")}
                className="image-btn"
              >
                <AiOutlineCamera className="image-btn-icon" />
                Add Image
              </label>
              <input
                type="file"
                className="image-input"
                name="image"
                id="image"
                hidden
                accept="image/*"
                onChange={(e) => {
                  // setValue("profile_pic", e.target.files[0], {
                  //   shouldValidate: true,
                  // });
                  setImage(e.target.files[0]);
                }}
              ></input>
            </div>
            {Boolean(image) && (
              <div className="preview">
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="preview-image"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddProduct;
