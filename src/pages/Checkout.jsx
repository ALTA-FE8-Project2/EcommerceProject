import React from "react";
export const Checkout = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-glass">
                <div className="container mx-auto all lg:px-9 xl:px-0 md:px-9">
                    <h1 className="pt-10 text-3xl font-poppins">Checkout Items</h1>
                    <hr className="mt-2 border-black" />
                    <div className="h-auto mt-5 rounded-l">
                        <div class="grid grid-rows-3 sm:grid sm:grid-cols-1 grid-flow-col gap-4">
                            <div class="row-span-3 col-span-3 bg-main py-10 rounded-lg br">
                                <div className="grid grid-cols-2 gap-4 sm:text-base">
                                    <div className="ml-4">
                                        <h1 className="text-2xl">Items from E-Boox</h1>
                                        <h3 className="mt-8 text-xl">Items</h3>
                                        <div className="flex items-center mt-5">
                                            <img
                                                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                                                alt="#"
                                                className="w-10 h-10"
                                            />
                                            <p className="ml-8 font-thin text-slate-400">Karyakarsa1</p>
                                        </div>
                                    </div>
                                    <div className="items-end sm:text-base">
                                        <h1 className="text-2xl">Date: 1 Januari 2022</h1>
                                        <h3 className="mt-8 text-xl">Price</h3>
                                        <div className="flex mt-5">
                                            <p className="mt-2 font-thin text-slate-400">Rp 25.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 row-span-2 bg-main py-10 rounded-lg bg">
                                <div className="mx-4">
                                    <h1 className="text-2xl">Order Summary:</h1>
                                    <h3 className="mt-5 text-xl">Subtotal</h3>
                                    <p className="text-base font-thin text-slate-400">Rp 25.000</p>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Shipping</h3>
                                        <p className="mt-5 text-base font-thin text-slate-400">Rp 0</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Estimated Tax</h3>
                                        <p className="mt-5 text-base font-thin text-slate-400">Rp 0</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Total</h3>
                                        <p className="mt-5 text-base font-thin text-slate-400">Rp 25.000</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-span-2 bg-main py-10 rounded-lg items-center bm">
                                <h1 className="mx-4 text-2xl">Status</h1>
                                <div className="flex justify-between mx-4 text-center">
                                    <h3 className="mt-5 text-md">UPS Ground</h3>
                                    <p className="mt-[23.5px] ml-4 text-xs font-thin text-slate-500">Order #123456789</p>
                                </div>
                                <div className="flex justify-center">
                                    <h2 className="px-10 py-2 -mb-5 font-semibold text-white cursor-pointer mt-11 bg-limeEboox rounded-xl font-poppins hover:bg-teal-800 hover:py-3 hover:text-lg">
                                        CHECKOUT
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
