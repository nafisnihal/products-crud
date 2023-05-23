import React, { useState } from "react";
import "../styles/Action.scss";
import AddProduct from "./AddProduct";

const Action = () => {
  const [addProductShow, setAddProductShow] = useState(false);

  const handleClose = () => setAddProductShow(false);
  const handleShow = () => setAddProductShow(true);

  return (
    <div id="action">
      <button className="add-btn" onClick={handleShow}>
        Add Inventory
      </button>
      <input
        type="search"
        name=""
        id=""
        className="search-btn"
        placeholder="Search here"
      />
      {addProductShow && (
        <AddProduct show={addProductShow} handleClose={handleClose} />
      )}
    </div>
  );
};

export default Action;
