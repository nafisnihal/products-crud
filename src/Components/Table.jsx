import React from "react";
import "../styles/Table.scss";
import { FiEdit } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../helpers/API";
import { FcRemoveImage } from "react-icons/fc";

const Table = () => {
  const { data: productsData = [] } = useQuery([`/products`]);
  // console.log(productsData);
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
          {productsData.map((product, index) => (
            <tr className="" key={product.id}>
              <td className="py-2">{index + 1}</td>
              <td>{product?.assetNumber}</td>
              <td>{product?.categoryName}</td>
              <td>
                {product?.productPhoto === null ? (
                  <FcRemoveImage className="table-product-image" />
                ) : (
                  <img
                    className="table-product-image"
                    src={`${BASE_URL}/${product?.productPhoto?.v50x50Path}`}
                    alt="product"
                    width="50px"
                  />
                )}
              </td>
              <td>{product?.productName}</td>
              <td>{product?.serialNumber}</td>
              <td>{product?.purchasePrice}</td>
              <td>{product?.warrantyInYears || "N/A"}</td>
              <td>{product?.purchaseDate}</td>
              <td>
                <button className="border-0 text-primary fs-4">
                  <FiEdit className="pb-1" />
                </button>
                <button className="border-0 text-danger fs-4 ms-2">
                  <BsTrash3 className="pb-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
