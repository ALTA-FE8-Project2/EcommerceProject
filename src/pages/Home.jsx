import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import sekawan from "../assets/sekawan.svg";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
const Home = () => {
    const navigate = useNavigate();
    const [listProducts, setListProducts] = useState([]);
    const API = "http://13.214.37.101/products";

    useEffect(() => {
        getListProducts();
    }, []);

    // untuk get data E-Book dari endpoint mas fakhry
    const getListProducts = async () => {
        try {
            const response = await axios.get(API);
            console.log(response.data.data);
            setListProducts(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // untuk navigate ke halaman details
    const handleDetail = (item) => {
        navigate(`/details/${item.name}`, {
            state: {
                image: item.url,
                judul: item.name,
                sinopsis: item.detail,
                price: item.price,
            },
        });
    };

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
                    <div className="relative col-span-7">
                        <img src={sekawan} alt="sekawan" className="absolute mx-48 h-96" />
                    </div>
                </div>
            </section>
            {/* product */}
            <section className="min-h-screen bg-main dark:bg-slate-900">
                <div className="p-10 mb-10 font-bold text-center">
                    <h1 className="text-5xl font-roboto md:text3xl dark:text-main">Product</h1>
                </div>
                <div className="flex flex-wrap justify-center mt-10 ">
                    {listProducts.map((product, i) => {
                        return (
                            <div key={i}>
                                <Card image={product.url} judul={product.name} price={product.price} sinopsis={product.detail} handleDetail={() => handleDetail(product)} />
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default Home;
