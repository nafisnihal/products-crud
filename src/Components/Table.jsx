import React from "react";
import "../styles/Table.scss";
import { FiEdit } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";

const Table = () => {
  return (
    <div id="table">
      <table className="text-center">
        <thead className="">
          <tr className="">
            <th className="py-2">SL</th>
            <th>Asset No.</th>
            <th>Categoty</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Serial No.</th>
            <th>Price</th>
            <th>Waranty</th>
            <th>Purchase Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td className="">1</td>
            <td>123456</td>
            <td>Computer</td>
            <td>
              <img className="img-fluid" src="" alt="product" />
            </td>
            <td>HP</td>
            <td>123456</td>
            <td>50000</td>
            <td>1 Year</td>
            <td>12/12/2020</td>
            <td>
              <button className="border-0 text-primary fs-4">
                <FiEdit className="pb-1" />
              </button>
              <button className="border-0 text-danger fs-4 ms-2">
                <BsTrash3 className="pb-1" />
              </button>
            </td>
          </tr>
          <tr className="products">
            <td className="">2</td>
            <td>123456</td>
            <td>Computer</td>
            <td>
              <img className="img-fluid" src="" alt="product" />
            </td>
            <td>HP</td>
            <td>123456</td>
            <td>50000</td>
            <td>1 Year</td>
            <td>12/12/2020</td>
            <td>
              <button className="border-0 text-primary fs-4">
                <FiEdit className="pb-1" />
              </button>
              <button className="border-0 text-danger fs-4 ms-2">
                <BsTrash3 className="pb-1" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
