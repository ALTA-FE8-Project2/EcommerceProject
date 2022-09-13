import React from "react";

const History = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-main font-poppins">
                <div className="container mx-auto lg:px-9 xl:px-0 md:px-9">
                    <h1 className="pt-10 text-3xl fonts-poppins">Order History</h1>
                    <hr className="mt-2 border-black" />
                    <div className="h-auto py-10 mt-5 bg-white rounded-xl">
                        <div className="px-10">
                            <div className="flex justify-between">
                                <h1>
                                    Date: 1 Januari 2022 <span className="ml-3">Order: #123456789</span>
                                </h1>
                                <div className="grid">
                                    <h1>Total</h1>
                                    <p className="mt-3">Rp 500.000</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex items-center mt-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                                        alt="#"
                                        className="w-10 h-10"
                                    />
                                    <p className="ml-8 text-right font-base">Karyakarsa1</p>
                                </div>
                                <div className="flex mt-5">
                                    <h3 className="text-limeEboox ">
                                        Detail Transactions <span className="px-3 py-3 ml-5 text-white rounded-xl bg-cyanEboox">Buy Again</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto lg:px-9 xl:px-0 md:px-9">
                    <div className="h-auto py-10 mt-5 bg-white rounded-xl">
                        <div className="px-10">
                            <div className="flex justify-between">
                                <h1>
                                    Date: 1 Januari 2022 <span className="ml-3">Order: #123456789</span>
                                </h1>
                                <div className="grid">
                                    <h1>Total</h1>
                                    <p className="mt-3">Rp 500.000</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex items-center mt-3">
                                    <img src="https://matematika.uinsu.ac.id/wp-content/uploads/2021/02/book.jpeg" alt="#" className="w-10 h-10" />
                                    <p className="ml-8 text-right font-base">Karyakarsa1</p>
                                </div>
                                <div className="flex mt-5">
                                    <h3 className="text-limeEboox ">
                                        Detail Transactions <span className="px-3 py-3 ml-5 text-white rounded-xl bg-cyanEboox">Buy Again</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
