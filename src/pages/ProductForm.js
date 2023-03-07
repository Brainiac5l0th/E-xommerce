import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUpdate } from "../features/filters/actionCreators";
import addProductThunk from "../features/products/thunk/addProductThunk";
import updateProductThunk from "../features/products/thunk/updateProductThunk";

const ProductForm = () => {
  const filters = useSelector((state) => state.filters);
  const { toUpdate } = filters;
  const allProducts = useSelector((state) => state.products);
  const updateData = allProducts.filter(
    (singleProduct) => singleProduct.id === toUpdate
  )[0];
  useEffect(() => {
    document.title = toUpdate ? "Update Product" : "Add Product";
  }, [toUpdate]);
  
  useEffect(() => {
    if (toUpdate) {
      setProductData({
        name: updateData.name,
        price: updateData.price,
        thumbnail: updateData.thumbnail,
        category: updateData.category,
        description: updateData.description,
        in_stock: updateData.in_stock,
      });
    }
  }, [toUpdate, updateData]);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    thumbnail: "",
    category: "",
    description: "",
    in_stock: true,
  });

  //handler
  const handleChange = (event) => {
    if (event.target.name === "price") {
      setProductData({
        ...productData,
        [event.target.name]: parseFloat(event.target.value),
      });
    } else if (event.target.name === "stock") {
      setProductData({
        ...productData,
        in_stock: !productData.in_stock,
      });
    } else {
      setProductData({
        ...productData,
        [event.target.name]: event.target.value,
      });
    }
  };

  //submitting a new form data
  const resetProductData = () => {
    setProductData({
      name: "",
      price: "",
      thumbnail: "",
      category: "",
      description: "",
      in_stock: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toUpdate) {
      dispatch(updateProductThunk(toUpdate, productData));
      dispatch(clearUpdate());
    } else {
      dispatch(addProductThunk(productData));
    }
    resetProductData();
  };

  return (
    <section className="container mx-auto bg-[#2a3549]">
      <div className="flex flex-col justify-center items-center outline-none rounded-xl py-8">
        <h1 className="font-bold text-3xl">
          {toUpdate ? `Update Product ` : "Add Product"}
        </h1>
        <form className="w-full md:w-8/12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
              <div>
                <label
                  className="text-white dark:text-gray-200 font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                  value={productData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200 font-semibold"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                  value={productData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200 font-semibold"
                htmlFor="thumbnail"
              >
                Image URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                value={productData.thumbnail}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200 font-semibold"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                value={productData.category}
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Choose a Category
                </option>
                <option value="Laptop">Laptop</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Tablet">Tablet</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200 font-semibold"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                rows={6}
                id="description"
                name="description"
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                value={productData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <input
                id="stock"
                name="stock"
                type="checkbox"
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-600 ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                checked={productData.in_stock}
                onChange={handleChange}
              />
              <label
                htmlFor="stock"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Available in Stock
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-2 text-white transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-700"
            >
              {toUpdate ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
