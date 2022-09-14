import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Details = () => {
    return (
        <div className="bg-main dark:bg-slate-800">
            <Navbar />
            <div className="w-full min-h-screen font-poppins">
                <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
                    <h1 className="pt-10 text-3xl font-poppins dark:text-main">Details</h1>
                    <hr className="mt-2 border-black dark:border-main" />
                    <div className="h-auto mt-5 rounded-l">
                        <div className="grid grid-flow-col grid-rows-3 gap-4 mt-20 border sm:grid sm:grid-cols-1">
                            <div className="row-span-3">
                                <div className="flex flex-wrap mt-10">
                                    <div className="flex m-6 bg-white rounded-md shadow-md flex-col-3 sm:w-auto w-72 ">
                                        <div>
                                            <img
                                                src=" https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png"
                                                alt=""
                                                className="m-6 -mt-8 h-44 "
                                            />
                                        </div>
                                        <div className="col-span-2 row-span-2 py-10 bg-white rounded-lg bg">
                                            <h1 className="text-white"> Lorem ipsum </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-2">
                                <h1 className="font-bold font-poppins dark:text-main">Garis Waktu</h1>
                                <h1 className="font-poppins text-slate-500 dark:text-main">By Fiersa Bersari</h1>
                                <h1 className="font-medium font-poppins dark:text-main">Synopsis</h1>
                                <h1 className="font-bold font-poppins dark:text-main">
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing.{" "}
                                </h1>
                                <button className="mt-10 text-white rounded-sm bg-cyanEboox font-poppins">Add to Cart </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;
