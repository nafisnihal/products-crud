import React, { useState } from "react";
import "../styles/AddProduct.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";

const AddProduct = ({ show, handleClose }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Modal id="add-products" show={show} onHide={handleClose}>
      <div className="d-flex align-items-center">
        <h2 className="mt-2 ms-auto" closeButton>
          Add New Products
        </h2>
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
            <label className="warranty-label" for="has-warranty">
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
        </form>
      </div>
    </Modal>
  );
};

export default AddProduct;
