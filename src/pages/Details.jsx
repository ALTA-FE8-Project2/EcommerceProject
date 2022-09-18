import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-main dark:bg-slate-800">
      <Navbar />
      <div className="w-full min-h-screen font-poppins ">
        <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
          <h1 className="pt-10 text-3xl font-poppins dark:text-main">
            Details
          </h1>
          <hr className="mt-2 border-black dark:border-main" />
        </div>
        {/* product image */}
        <div className="container grid grid-cols-2 gap-6 p-24 ">
          <div>
            <div className="mt-8 ">
              <div clasName="flex flex-wrap">
                <img
                  src={location.state.image}
                  alt=""
                  className="-mt-8 scale-90 m-60 w-52 h-72"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>

          {/* product content */}
          <div>
            <h1 className="mb-5 text-3xl font-bold font-poppins dark:text-main">
              {location.state.judul}
            </h1>
            <h1 className="text-2xl font-medium font-poppins text dark:text-main">
              Synopsis
            </h1>
            <h1 className="font-bold font-poppins dark:text-main">
              {location.state.sinopsis}
            </h1>
            <div className="flex gap-3 pb-5 mt-6 border-b border-grey-200">
              <button className="flex gap-2 px-8 py-2 font-medium text-white uppercase transition rounded bg-cyanEboox item-center hover:bg-transparent hover:text-black">
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

export default Details;
