import React from "react";
export const Checkout = () => {
    return (
        <>
            <div className="w-full h-[684px] bg-glass">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-poppins">Checkout Items</h1>
                    <hr className="mt-2 border-black" />
                    <div className="h-auto mt-5 rounded-l">
                        <div class="grid grid-rows-3 grid-flow-col gap-4">
                            <div class="row-span-3 col-span-3 bg-main py-10 rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="ml-4">
                                        <h1 className="text-2xl">Items from E-Boox</h1>
                                        <h3 className="mt-8 text-xl">Items</h3>
                                        <div className="flex mt-5">
                                            <img src="#" alt="#" />
                                            <p className="ml-8 font-thin">Karyakarsa1</p>
                                        </div>
                                    </div>
                                    <div className="items-end">
                                        <h1 className="text-2xl">Date: 1 Januari 2022</h1>
                                        <h3 className="mt-8 text-xl">Price</h3>
                                        <div className="flex mt-5">
                                            <p className="font-thin">Rp 25.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 row-span-2 bg-main py-10 rounded-lg">
                                <div className="ml-4">
                                    <h1 className="text-2xl">Order Summary:</h1>
                                    <h3 className="mt-5 text-xl">Subtotal</h3>
                                    <p className="text-base font-thin">Rp 25.000</p>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Shipping</h3>
                                        <p className="mt-4 mr-3 text-base font-thin">Rp 0</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Estimated Tax</h3>
                                        <p className="mt-4 mr-3 text-base font-thin">Rp 0</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="mt-5 text-xl">Total</h3>
                                        <p className="mt-4 mr-3 text-base font-thin">Rp 25.000</p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-span-2 bg-main py-10">03</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
