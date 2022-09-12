import React from "react";
export const Checkout = () => {
    return (
        <>
            <div className="w-full h-[684px] bg-glass">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-poppins">Checkout Items</h1>
                    <hr className="mt-2 border-black" />
                    <div className="h-auto mt-5 rounded-l">
                        <div class="grid grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4">
                            <div class="row-span-3 col-span-3 bg-main/60 py-10 rounded-lg">
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
                                            <p className="ml-8 font-thin">Karyakarsa1</p>
                                        </div>
                                    </div>
                                    <div className="items-end sm:text-base">
                                        <h1 className="text-2xl">Date: 1 Januari 2022</h1>
                                        <h3 className="mt-8 text-xl">Price</h3>
                                        <div className="flex mt-5">
                                            <p className="font-thin">Rp 25.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 row-span-2 bg-main/60 py-10 rounded-lg">
                                <div className="mx-4">
                                    <h1 className="text-2xl">Order Summary:</h1>
                                    <h3 className="mt-5 text-xl">Subtotal</h3>
                                    <p className="text-base font-thin">Rp 25.000</p>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Shipping</h3>
                                        <p className="mt-4 text-base font-thin">Rp 0</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Estimated Tax</h3>
                                        <p className="mt-4 text-base font-thin">Rp 0</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Total</h3>
                                        <p className="mt-4 text-base font-thin">Rp 25.000</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-span-2 bg-main/60 py-10 rounded-lg items-center">
                                <h1 className="mx-4 text-2xl">Status</h1>
                                <div className="flex justify-between mx-4">
                                    <h3 className="mt-5 text-xl">UPS Ground</h3>
                                    <p className="mt-4 text-base font-thin">Order #123456789</p>
                                </div>
                                <div className="flex justify-center">
                                    <h2 className="px-10 py-2 -mb-5 font-semibold text-white mt-11 bg-limeEboox rounded-xl font-poppins hover:bg-teal-800 hover:py-3">CHECKOUT</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
