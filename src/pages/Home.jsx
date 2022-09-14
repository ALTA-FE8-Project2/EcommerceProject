import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";





import sekawan from "../assets/sekawan.svg";
import Footer from "../components/Footer";

const Home = () => {

// masukin data API ke set
const [list,setList] =  useState([])
const [add,setAdd] = useState ({
  name : "",
  price : "",

})



const getApi = () => {
axios.get("http://13.214.37.101/products")
// untuk memanggil respon APi
.then((res) => setList(res.data.data))
}

// syarat wajib manggil apo
useEffect (() => {
  getApi () 
},[])




// // Add To Product
// const handleProduct = () => {
//   axios.post("http://13.214.37.101/products",add)
// }

// // inputD
// const inputData = (e) => {

//   let newAdd = {...add}
//   // untuk mengambil value yang dari name
//   newAdd[e.target.name] = e.target.value
//   // menampilkan di form
//   setAdd(newAdd)
// }

    return (
        <div className="dark:bg-slate-800">
            <Navbar />
            <section className="max-w-screen-xl mx-auto my-24 ">
                <div className="grid grid-flow-col gap-8 py-1 my-24 ">
                    <div className="flex flex-col col-span-6 py-20 my-3 mb-10">
                        <h1 className="text-5xl font-bold font-roboto text-limeEboox">e-Boox</h1>
                        <h1 className="mt-2 text-5xl font-bold font-roboto dark:text-main">
                            The Best <span className="text-limeEboox">Online</span>
                        </h1>
                        <h1 className="mt-2 text-5xl font-bold font-roboto dark:text-main">
                            Book
                            <span className="text-limeEboox"> Store</span>
                        </h1>
                        <div>
                            <button className="flex justify-between px-6 py-3 mt-16 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear rounded-md shadow outline-none bg-cyanEboox active:bg-limeEboox-300 hover:lg focus:outline-none ">
                                Get Our It{" "}
                                <span>
                                    {" "}
                                    <img
                                        src="https://cdn.discordapp.com/attachments/1017789562757591111/1019105238650736660/undraw_handcrafts_arrow_1.png"
                                        alt=""
                                        className="flex justify-center h-6 ml-auto"
                                    />{" "}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="relative col-span-7 ">
                        <img src={sekawan} alt="sekawan" className="absolute mx-48 h-96" />
                    </div>
                </div>
            </section>
            {/* product */}

            <section className="min-h-screen bg-main dark:bg-slate-900">
                <div className="p-10 mb-10 font-bold text-center">
                    <h1 className="text-5xl font-roboto md:text3xl dark:text-main">Product</h1>
                </div>


            {/* Mapping objeck  */}
            {list.map((obj,index)=> {
              return (
                // key = untuk mapping
                <div key={index} className="flex flex-wrap justify-between mt-10 ">
                <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                    <div>
                        <img src= {obj.url} alt="" className="m-6 -mt-8 h-44 " />

                <div className="flex flex-wrap justify-center mt-10 ">
                    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                        <div>
                            <img src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="m-6 -mt-8 h-44 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mt-5 text-lg text-main dark:text-slate-800 font-poppins">Garis Waktu</h1>
                            <h2 className="text-lg text-main dark:text-slate-800 font-poppins"> Author : Fiersa Bersari</h2>
                            <h2 className="m-1 text-lg text-main dark:text-slate-800 font-poppins">Rp. 150.000</h2>
                            <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700"> Add To Cart</button>
                        </div>
                    </div>
                    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                        <div>
                            <img src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="m-6 -mt-8 h-44 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mt-5 text-lg font-poppins text-main dark:text-slate-800">Garis Waktu</h1>
                            <h2 className="text-lg font-poppins text-main dark:text-slate-800"> Author : Fiersa Bersari</h2>
                            <h2 className="m-1 text-lg font-poppins text-main dark:text-slate-800">Rp. 150.000</h2>
                            <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700"> Add To Cart</button>
                        </div>
                    </div>
                    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                        <div>
                            <img src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="m-6 -mt-8 h-44 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mt-5 text-lg font-poppins text-main dark:text-slate-800">Garis Waktu</h1>
                            <h2 className="text-lg font-poppins text-main dark:text-slate-800"> Author : Fiersa Bersari</h2>
                            <h2 className="m-1 text-lg font-poppins text-main dark:text-slate-800">Rp. 150.000</h2>
                            <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700"> Add To Cart</button>
                        </div>
                    </div>
                    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                        <div>
                            <img src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="m-6 -mt-8 h-44 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mt-5 text-lg font-poppins text-main dark:text-slate-800">Garis Waktu</h1>
                            <h2 className="text-lg font-poppins text-main dark:text-slate-800"> Author : Fiersa Bersari</h2>
                            <h2 className="m-1 text-lg font-poppins text-main dark:text-slate-800">Rp. 150.000</h2>
                            <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700"> Add To Cart</button>
                        </div>
                    </div>
                    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                        <div>
                            <img src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="m-6 -mt-8 h-44 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mt-5 text-lg font-poppins text-main dark:text-slate-800">Garis Waktu</h1>
                            <h2 className="text-lg font-poppins text-main dark:text-slate-800"> Author : Fiersa Bersari</h2>
                            <h2 className="m-1 text-lg font-poppins text-main dark:text-slate-800">Rp. 150.000</h2>
                            <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700"> Add To Cart</button>
                        </div>
                    </div>
                    <div className="flex m-6 border-black rounded-md shadow-md bg-slate-800 dark:bg-main flex-col-3 sm:w-auto ">
                        <div>
                            <img src=" https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1489732961l/1362193._SY475_.jpg" alt="" className="m-6 -mt-8 h-44 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="mt-5 text-lg font-poppins text-main dark:text-slate-800">Garis Waktu</h1>
                            <h2 className="text-lg font-poppins text-main dark:text-slate-800"> Author : Fiersa Bersari</h2>

                            <h2 className="m-1 text-lg font-poppins text-main dark:text-slate-800">Rp. 150.000</h2>
                            <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-cyan-900"> Add To Cart</button>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <h1 className="mt-5 text-lg text-main dark:text-slate-800 font-poppins">{obj.name}</h1>
                        <h2 className="text-lg text-main dark:text-slate-800 font-poppins"> Author : Fiersa Bersari</h2>
                        <h2 className="m-1 text-lg text-main dark:text-slate-800 font-poppins">Rp {obj.price}</h2>
                        <button className="text-center text-white transition-all duration-500 rounded-md bg-cyanEboox hover:bg-lime-700"> Add To Cart</button>
                    </div>
                </div>
              </div>

              )
            })}

               
            </section>


      
          </section> */}
            <Footer />

        </div>
    );
};
export default Home;
