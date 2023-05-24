import React from "react";
import { Modal } from "react-bootstrap";
import "../styles/DeleteProduct.scss";
import { BsTrash3 } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import globalAxiosInstance from "../helpers/axiosInterceptor";

const DeleteProduct = ({ show, handleClose, productRefetch }) => {
  const { mutate: deleteMutation } = useMutation(
    (payload) =>
      globalAxiosInstance.delete(`/products/${show}`, {
        headers: {},
      }),
    {
      onSuccess: () => {
        console.log("success");
        handleClose();
        productRefetch();
      },
      onError: ({ response }) => {
        console.log(response);
      },
    }
  );

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
        <button onClick={deleteMutation} className="yes-btn">
          YES
        </button>
      </div>
    </Modal>
  );
};

export default DeleteProduct;
