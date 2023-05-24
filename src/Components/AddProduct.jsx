import React, { useState } from "react";
import "../styles/AddProduct.scss";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose, AiOutlineCamera } from "react-icons/ai";
import globalAxiosInstance from "../helpers/axiosInterceptor";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AddProduct = ({ show, handleClose }) => {
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState(null);

  const queryClient = useQueryClient();

  const { data: categoryProductData = [] } = useQuery([
    `/products/category-name-wise-product-names`,
  ]);
  console.log(categoryProductData);

  const { mutate: productMutation, reset } = useMutation(
    (payload) =>
      globalAxiosInstance.post("/products", payload, {
        headers: {},
      }),
    {
      onSuccess: () => {
        // console.log("success");
        queryClient.invalidateQueries(["/products"]);
        handleClose();
        reset();
      },
      onError: ({ response }) => {
        console.log(response);
      },
    }
  );

  const handleAddProduct = (data) => {
    // console.log(data);
    const productPayload = {
      assetNumber: data.assetNumber,
      categoryName: data.categoryName,
      productName: data.productName,
      serialNumber: data.serialNumber,
      purchasePrice: data.purchasePrice,
      purchaseDate: data.purchaseDate,
      warrantyInYears: data.warrantyInYears,
      warrantyExpireDate: data.warrantyExpireDate,
    };

    const productDTO = new Blob([JSON.stringify(productPayload)], {
      type: "application/json",
    });

    const payload = new FormData();
    payload.append("product", productDTO);

    if (Boolean(image)) {
      payload.append("productPhoto", image);
    }

    productMutation(payload);
    // console.log(payload);
  };

  const productSchema = yup
    .object({
      categoryName: yup.string().required("This is required field"),
      productName: yup.string().required("This is required field"),
      serialNumber: yup.string().required("This is required field"),
      purchasePrice: yup.string().required("This is required field"),
      purchaseDate: yup.string().required("This is required field"),
    })
    .required();

  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const [categoryName, setCategoryName] = useState("");

  return (
    <Modal id="add-products" show={show} onHide={handleClose}>
      <div className="d-flex align-items-center">
        <h2 className="add-products-title ms-auto">Add New Products</h2>
        <button onClick={handleClose} className="ms-auto me-3 border-0">
          <AiOutlineClose className="fs-4" />
        </button>
      </div>
      <div>
        <form className="add-product" onSubmit={handleSubmit(handleAddProduct)}>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="categoryName">
              Category <span className="text-danger">*</span>
            </label>
            <select
              className="add-product-input"
              name="categoryName"
              id="categoryName"
              {...register("categoryName")}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option value="">Select Category</option>
              {categoryProductData.map((category, idx) => (
                <option value={category.name} key={idx}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="productName">
              Product Name <span className="text-danger">*</span>
            </label>
            <select
              className="add-product-input"
              name="productName"
              id="productName"
              {...register("productName")}
            >
              <option value="">Select Product</option>
              {categoryProductData.map((category) => {
                if (category.name === categoryName) {
                  return category.products.map(({ name }, idx) => (
                    <option value={name} key={idx}>
                      {name}
                    </option>
                  ));
                }
              })}
            </select>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="assetNumber">
              Serial Number
            </label>
            <input
              type="text"
              className="add-product-input"
              name="assetNumber"
              id="assetNumber"
              {...register("serialNumber")}
            ></input>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="purchasePrice">
              Purchase Price <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="add-product-input"
              name="purchasePrice"
              id="purchasePrice"
              {...register("purchasePrice")}
            ></input>
          </div>
          <div className="add-product-field">
            <label className="add-product-label" htmlFor="purchaseDate">
              Purchase Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="add-product-input"
              name="purchaseDate"
              id="purchaseDate"
              {...register("purchaseDate")}
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
                <label className="add-product-label" htmlFor="warrantyInYears">
                  Warranty <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="add-product-input"
                  name="warrantyInYears"
                  id="warrantyInYears"
                  {...register("warrantyInYears")}
                ></input>
              </div>
              <div className="add-product-field">
                <label
                  className="add-product-label"
                  htmlFor="warrantyExpireDate"
                >
                  Expire Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="add-product-input"
                  name="warrantyExpireDate"
                  id="warrantyExpireDate"
                  {...register("warrantyExpireDate")}
                ></input>
              </div>
            </>
          )}
          <div className="image">
            <div className="image-btn-div">
              <label
                htmlFor="image"
                // onClick={() => console.log("picture")}
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
          <div className="submit-buttons">
            <button type="reset" className="cancel-btn" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddProduct;
