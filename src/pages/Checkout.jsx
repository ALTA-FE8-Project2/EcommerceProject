import React, { useState } from "react";
import { MdOutlinePayments } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Checkout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-glass dark:bg-slate-800">
      <Navbar />
      <div className="w-full min-h-screen font-poppins">
        <div className="container mx-auto lg:px-9 xl:px-0 md:px-9">
          <h1 className="mt-16 mb-5 text-3xl text-center sm:mb-0 text-slate-600 dark:text-white font-poppins">
            Checkout Items
          </h1>
          <hr className="hidden mt-2 mb-16 sm:block border-slate-600 dark:border-white" />
          {/* <div class="grid grid-rows-3 sm:grid sm:grid-cols-1 grid-flow-col gap-4"> */}
          <div class="px-2 md:px-0 lg:flex md:justify-between ">
            {/* Barang yang  ingin di checkout*/}
            <div class=" bg-white py-10 rounded-3xl min-w-[280px] lg:min-w-[600px] xl:min-w-[900px] 2xl:min-w-[1100px] my-10 lg:my-0 px-1 ">
              <div className="flex justify-between sm:text-base ">
                <div>
                  <h1 className="text-lg sm:text-2xl text-slate-700">
                    Items from E-Boox
                  </h1>
                  <h3 className="mt-8 text-xl text-slate-700">Items</h3>
                  <div className="flex flex-wrap items-center mt-5">
                    <img
                      src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                      alt="#"
                      className="w-10 h-10"
                    />
                    <p className="ml-2 sm:ml-8 text-slate-400">Karyakarsa1</p>
                  </div>
                </div>
                <div className="items-end sm:text-base">
                  <h1 className="text-xl sm:text-2xl text-slate-700">
                    Date: 1 Januari 2022
                  </h1>
                  <h3 className="mt-8 text-xl text-slate-700">Price</h3>
                  <div className="flex mt-5">
                    <p className="mt-2 text-slate-400">Rp 25.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Summary dari total item */}
              <div class=" bg-white py-10 rounded-3xl mb-10  ">
                <div className="mx-4">
                  <h1 className="text-2xl text-slate-700">Order Summary:</h1>
                  <h3 className="mt-5 text-xl text-slate-700">Subtotal</h3>
                  <p className="text-base text-slate-400">Rp 25.000</p>
                  <div className="flex justify-between">
                    <h3 className="mt-5 text-xl text-slate-700">Shipping</h3>
                    <p className="mt-5 text-base text-slate-400">Rp 0</p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="mt-5 text-xl text-slate-700">
                      Estimated Tax
                    </h3>
                    <p className="mt-5 text-base text-slate-400">Rp 0</p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="mt-5 text-xl text-slate-700">Total</h3>
                    <p className="mt-5 text-base text-slate-400">Rp 25.000</p>
                  </div>
                </div>
              </div>
              {/* Checkout */}
              <div class=" bg-white py-10 rounded-3xl mb-16 lg:mb-0 items-center mt-3">
                <h1 className="mx-4 text-2xl text-slate-700">Status</h1>
                <div className="flex justify-between mx-4 text-center">
                  <h3 className="mt-5 text-md text-slate-700">UPS Ground</h3>
                  <p className="mt-[23.5px] ml-4 text-xs text-slate-500">
                    Order #123456789
                  </p>
                </div>
                <div className="flex justify-center ">
                  <h2
                    className="px-10 py-2 -mb-5 font-semibold text-white cursor-pointer mt-11 bg-limeEboox rounded-xl font-poppins hover:bg-teal-800 hover:scale-110"
                    onClick={() => setShowModal(true)}
                  >
                    CHECKOUT
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="absolute top-36 sm:top-30 mx-auto  w-[320px] sm:w-[550px] lg:w-[700px] ">
              <div className="flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-main dark:bg-slate-800 focus:outline-none ">
                <div className="bg-gradient-to-tl from-limeEboox to-cyanEboox">
                  <div className="flex justify-center px-3 py-3 mt-2 font-poppins">
                    <MdOutlinePayments className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex items-start justify-center p-3 border-slate-200">
                  <h3 className="text-3xl font-semibold text-center text-limeEboox">
                    Great!
                  </h3>
                </div>
                <h1 className="p-3 text-xl font-semibold text-center text-slate-700 dark:text-white font-poppins">
                  Your order for #123456789 successfully
                </h1>
                <div className="flex items-center justify-center p-3">
                  <button
                    className="py-3 text-lg font-semibold text-center rounded-full text-limeEboox w-28 font-poppins bg-glass"
                    onClick={() => navigate("/")}
                  >
                    BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-slate-700 opacity-70"></div>
        </>
      ) : null}
      <Footer />
    </div>
  );
};
