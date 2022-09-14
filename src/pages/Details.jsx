import React from "react";

const Details = () => {
  return (
   <>
    <div className="w-full min-h-screen bg-main font-poppins">
      <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
        <h1 className="pt-10 text-3xl font-poppins">Details</h1>
        <hr className="mt-2 border-black" />
        <div className="h-auto mt-5 rounded-l">
          <div className="border  grid grid-rows-3 sm:grid sm:grid-cols-1 grid-flow-col gap-4 mt-20">
            <div className="row-span-3">
            <div className="flex flex-wrap  mt-10">
            <div className="flex flex-col-3 bg-white rounded-md shadow-md  m-6  sm:w-auto w-72 ">
                <div>
                  <img src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="h-44 -mt-8 m-6 " />
                </div>
                <div className="col-span-2 row-span-2 bg-white py-10 rounded-lg bg">  
                  <h1 className="text-white"> Lorem ipsum   </h1>
                </div>
              </div>
          </div>
          </div>
          <div className="row-span-2 col-span-2">
                  <h1 className="font-poppins font-bold ">Garis Waktu</h1>
                  <h1 className="font-poppins text-slate-500">By Fiersa Bersari</h1>
                  <h1 className="font-poppins font-medium">Synopsis</h1>
                  <h1 className="font-poppins font-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing. </h1>
                  <button className="bg-cyanEboox font-poppins text-white rounded-sm mt-10">Add to Cart </button>
                </div>
            
      
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Details;
