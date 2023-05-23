import React from "react";
import { Modal } from "react-bootstrap";
import "../styles/DeleteProduct.scss";
import { BsTrash3 } from "react-icons/bs";

const DeleteProduct = ({ show, handleClose }) => {
  return (
    <Modal id="delete-product" show={show} onHide={handleClose}>
      <div className="delete-icon mx-auto">
        <BsTrash3 className="icon" />
      </div>
      <p className="fs-4 mx-auto">
        Are you sure you want to delete this Product ?
      </p>
      <div className="confirm-btn">
        <button onClick={handleClose} className="no-btn">
          NO
        </button>
        <button className="yes-btn">YES</button>
      </div>
    </Modal>
  );
};

export default DeleteProduct;
