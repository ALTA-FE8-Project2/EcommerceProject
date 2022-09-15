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
                                            <img src={location.state.image} alt="" className="m-6 -mt-8 scale-90 w-36 h-44" onClick={() => navigate("/")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-20 ml-24">
                                <h1 className="font-bold font-poppins dark:text-main">{location.state.judul}</h1>
                                <h1 className="font-medium font-poppins dark:text-main">Synopsis</h1>
                                <h1 className="font-bold font-poppins dark:text-main">{location.state.sinopsis}</h1>
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
