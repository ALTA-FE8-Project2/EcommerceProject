import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
    return (
        <div className="bg-main dark:bg-slate-800">
            <Navbar />
            <div className="w-full min-h-screen font-poppins">
                <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
                    <h1 className="pt-10 text-3xl font-poppins">Cart</h1>
                    <hr className="mt-2 border-black " />
                </div>
                <div className="container grid grid-cols-2 gap-4 mx-auto">
                    <div className="mt-24 bg-white">
                        <div className="flex flex-wrap justify-center">
                            <h2 className="mt-8 text-2xl font-poppins text-slate-500">Fiersa Bersari</h2>
                            <br />
                            <h1 className="mt-8 text-2xl font-poppins">Garis Waktu</h1>
                        </div>

                        <img src="https://cdn.discordapp.com/attachments/1017709537312116772/1019144286027128882/gariswaktu.png" alt="" className="m-6 -mt-8 h-44 " />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
