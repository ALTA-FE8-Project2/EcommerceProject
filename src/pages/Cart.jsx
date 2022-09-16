import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import trash from "../assets/trash.svg";
// import { useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-main dark:bg-slate-800 ">
      <Navbar />
      <div className="w-full min-h-screen font-poppins">
        <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
          <h1 className="pt-10 text-3xl font-poppins">Cart</h1>
          <hr className="mt-2 border-black " />
        </div>

        <div className="container grid grid-cols-2 gap-8 mx-auto mt-8 border ">
          <div className="grid grid-cols-4 gap-4 bg-white lg:px-9 xl:px-0 md:px-9">
            <img
              src="https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png"
              alt=""
              className="m-6 mt-8 h-[130px] "
            />
            <div className="">
              <h1 className="mt-10 text2xl font-poppins">
                {" "}
                Judul : Garis waktu
              </h1>
              <h1 className="mt-2 text2xl font-poppins">
                Harga : Rp. 150.000{" "}
              </h1>
              <div className="mt-8">
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
            </div>
            <div className="grid grid-cols-4 gap-1 bg-blue"></div>
            <div className="flex justify-end mb-20 ">
              <button>
                {" "}
                <img
                  src="https://cdn.discordapp.com/attachments/796303347287064626/1019881117337255966/trash.png"
                  alt="trash"
                  className="mr-16"
                />{" "}
              </button>
            </div>
          </div>
          <div className="bg-white w-80 ">
            <h1 className="flex justify-center mt-3 text-3xl font-bold font-poppins">
              Total Belanja
            </h1>
            <h1 className="flex justify-center mt-5 text-3xl font-bold font-poppins ">
              Rp. 15000{" "}
            </h1>
            <div className="flex justify-center pb-5 mt-10 border-grey-200 ">
              <button className="flex gap-2 px-8 py-2 font-medium text-white uppercase transition rounded bg-cyanEboox item-center hover:bg-transparent hover:text-black hover:boder">
                <h2>Add To Cart</h2>
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
