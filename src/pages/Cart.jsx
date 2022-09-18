import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import trash from "../assets/trash.svg";
// import { useNavigate } from "react-router-dom";

const Cart = () => {
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCartProduct();
  }, []);

  // get product
  const getCartProduct = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "http://18.142.161.140/carts",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setProducts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // delete product
  const handleDelete = (productId) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `http://18.142.161.140/carts/${productId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        getCartProduct();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-main dark:bg-slate-800 ">
      <Navbar />
      <div className="w-full min-h-screen font-poppins">
        <div className="container mx-auto lg:px-9 xl:px-0 md:px-9">
          <h1 className="pt-10 text-3xl font-poppins">Cart</h1>
          <hr className="mt-2 border-black " />
        </div>

        {/* product */}
        <div className="container flex flex-wrap justify-between px-2 mx-auto mt-8 ">
          <div>
            {products.map((product) => (
              <div
                className="flex flex-wrap my-5 bg-white rounded-md lg:px-9 xl:px-0 "
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.product_name}
                  className="m-6 mt-8 h-[130px] all"
                />

                <div className="flex flex-col justify-center pl-3 sm:pl-0 ">
                  <h1 className="text-xl font-poppins">
                    {product.product_name}{" "}
                  </h1>
                  <h1 className=" font-poppins">{product.price} </h1>
                </div>

                <div className="flex items-center justify-between w-full sm:w-[180px] px-4 mx-auto mt-6 sm:mt-0 mb-2 sm:mb-2">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Pilih Item
                    </label>
                  </div>
                  <button onClick={() => handleDelete(product.id)}>
                    <img
                      src="https://cdn.discordapp.com/attachments/796303347287064626/1019881117337255966/trash.png"
                      alt="trash"
                      className=""
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="h-48 mt-10 mb-10 bg-white rounded-md lg:mt-5 w-80 lg:mb-0 ">
            <h1 className="flex justify-center mt-3 text-2xl font-bold font-poppins">
              Total Belanja
            </h1>
            <h1 className="flex justify-center mt-2 text-xl font-bold font-poppins ">
              Rp. 15000
            </h1>
            <div className="flex justify-center pb-5 lg:pb-0 mt-7 border-grey-200 ">
              <button className="flex px-8 py-2 font-medium text-white uppercase transition rounded bg-cyanEboox item-center hover:bg-green-500 hover:text-black hover:boder">
                <h2>Checkout</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
