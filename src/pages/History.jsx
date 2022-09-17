import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const History = () => {
  return (
    <div className=" bg-glass dark:bg-slate-800">
      <Navbar />
      <div className="w-full min-h-screen px-2 sm:px-0 font-poppins ">
        <div className="container mx-auto lg:px-9 xl:px-0 md:px-9 ">
          <h1 className="pt-10 text-3xl fonts-poppins text-slate-700 dark:text-white">
            Order History
          </h1>
          <hr className="mt-2 border-slate-700 dark:border-white" />
          <div className="h-auto py-10 my-5 bg-white rounded-xl">
            <div className="flex flex-wrap justify-between px-7 sm:px-10">
              <div className="justify-between ">
                <h1 className="text-slate-700 ">
                  Date: 1 Januari 2022{" "}
                  <span className="ml-3 text-slate-700">Order: #123456789</span>
                </h1>
                <div className="flex items-center mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                    alt="#"
                    className="w-10 h-10"
                  />
                  <p className="ml-8 text-right font-base text-slate-700">
                    Karyakarsa1
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between w-[900px] sm:w-[200px] ">
                <div className="flex">
                  <h1 className="ml-3 text-slate-700 ">Total</h1>
                  <p className="ml-3 text-slate-700">Rp 500.000</p>
                </div>
                <button className="px-5 py-3 mx-auto text-white sm:mx-0 mt-9 rounded-xl bg-cyanEboox">
                  Buy Again
                </button>
              </div>
            </div>
          </div>

          <div className="h-auto py-10 my-5 bg-white rounded-xl ">
            <div className="flex flex-wrap justify-between px-7 sm:px-10 ">
              <div className="justify-between ">
                <h1 className="text-slate-700">
                  Date: 1 Januari 2022{" "}
                  <span className="ml-3 text-slate-700">Order: #123456789</span>
                </h1>
                <div className="flex items-center mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                    alt="#"
                    className="w-10 h-10"
                  />
                  <p className="ml-8 text-right font-base text-slate-700">
                    Karyakarsa1
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between w-[900px] sm:w-[200px] ">
                <div className="flex">
                  <h1 className="ml-3 text-slate-700 ">Total</h1>
                  <p className="ml-3 text-slate-700">Rp 500.000</p>
                </div>
                <button className="px-5 py-3 mx-auto text-white sm:mx-0 mt-9 rounded-xl bg-cyanEboox">
                  Buy Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
