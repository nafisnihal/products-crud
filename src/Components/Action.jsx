import React from "react";
import "../styles/Action.scss";

const Action = () => {
  return (
    <div id="action">
      <button className="add-btn">Add Inventory</button>
      <input
        type="search"
        name=""
        id=""
        className="search-btn"
        placeholder="Search here"
      />
    </div>
  );
};

export default Action;
