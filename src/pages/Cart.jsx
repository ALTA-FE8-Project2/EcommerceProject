import React from "react";

const Cart = () => {
  return (
   <>
   <div className="w-full min-h-screen bg-main font-poppins">
      <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
        <h1 className="pt-10 text-3xl font-poppins">Cart</h1>
        <hr className="mt-2 border-black" />
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div className="mt-24 bg-white">
            <div className="flex flex-wrap justify-center">
              <h2 className="mt-8 font-poppins text-slate-500 text-2xl">Fiersa Bersari</h2>
              <br />
              <h1 className="mt-8 font-poppins text-2xl">Garis Waktu</h1>
            </div>
          
            <img src="https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt=""   className="h-44 -mt-8 m-6 "/>
            
          </div>
        </div>
        <div className="">
          <h1>test</h1>
        </div>
    </div>
   </>
  );
};

export default Cart;
