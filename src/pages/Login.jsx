import React from "react";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-main">
      <div className="flex md:pt-28 md:px-4 lg:pt-24 xl:max-w-6xl lg:mx-auto ">
        {/* getbook icon || image and Hello! */}
        <div className="hidden text-center md:block md:w-full">
          <h1 className="text-5xl italic font-bold font-roboto text-limeEboox">
            e-boox
          </h1>
          <h2 className="text-4xl text-limeEboox">Books Store</h2>
          <img
            src="https://cdn.discordapp.com/attachments/1017919526748299295/1018855815546937438/logo-login.png"
            className="h-[350px]  2xl:w-[432px] 2xl:h-[500px] mx-auto mt-6 "
            alt="gambar login"
          />
        </div>
        {/* form login */}
        <div className="w-full md:mr-2 lg:mr-0">
          <div className="md:mb-20 lg:mb-20">
            <h1 className="ml-8 text-5xl font-extrabold font-Roboto sm:text-7xl lg:-mt-2 text-limeEboox">
              Welcome!
            </h1>
            <h5 className="text-2xl italic font-Roboto ml-9 text-cyanEboox sm:text-3xl ">
              Sign in to continue
            </h5>
          </div>
          <form className="mx-4 mt-9">
            <div>
              <input
                type="text"
                className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg block w-full p-3 dark:shadow-md  "
                placeholder="Username"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg  block w-full p-3  "
                placeholder="Password"
                required
              />
            </div>
            <button className="w-full py-3 mx-auto mt-5 font-medium text-white shadow-lg font-Roboto bg-cyanEboox rounded-3xl ">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
