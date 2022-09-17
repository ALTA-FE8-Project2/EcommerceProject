import React from "react";

const Card = ({ image, judul, price, handleDetail }) => {
  return (
    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
      <div className="cursor-pointer">
        <img
          src={image}
          alt=""
          className="m-6 -mt-8 h-44 "
          onClick={handleDetail}
        />
      </div>
      <div className="flex flex-col mr-3">
        <h1 className="mt-5 text-lg text-main dark:text-slate-800 font-poppins">
          {judul}
        </h1>
        <h2 className="m-1 text-lg text-main dark:text-slate-800 font-poppins">
          Rp {price}
        </h2>
        <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700">
          {" "}
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
