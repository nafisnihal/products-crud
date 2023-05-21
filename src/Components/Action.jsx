import React, { useState } from "react";
import "../styles/Action.scss";
import AddProduct from "./AddProduct";

const Action = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      {show && <AddProduct show={show} handleClose={handleClose} />}
    </div>
  );
};

export default Action;
