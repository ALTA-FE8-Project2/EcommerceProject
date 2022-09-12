import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-main ">
      <div className="flex md:pt-3 md:px-4 xl:max-w-6xl lg:mx-auto ">
        {/* img icon  */}
        <div className="hidden text-center md:self-center md:justify-center md:w-full md:grid">
          <h1 className="text-5xl italic font-bold font-roboto text-limeEboox">
            e-boox
          </h1>
          <h2 className="text-4xl text-limeEboox">Books Store</h2>
          <img
            src="https://cdn.discordapp.com/attachments/1017919526748299295/1018855938297442374/logo-regis.png"
            className="h-[350px]  2xl:w-[432px] 2xl:h-[500px] mx-auto mt-6 "
            alt="gambar login"
          />
        </div>
        {/* form register */}
        <div className="w-full md:mr-2 lg:mr-0">
          <div className="md:mb-20 lg:mb-20">
            <h1 className="ml-8 text-5xl font-extrabold font-Roboto sm:text-7xl lg:-mt-2 text-limeEboox">
              Hi!
            </h1>
            <h5 className="text-2xl italic font-Roboto ml-9 text-cyanEboox sm:text-3xl ">
              Create a new account
            </h5>
          </div>
          <form className="flex flex-col gap-4 mx-4 mt-9">
            <div>
              <input
                type="text"
                className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg block w-full p-3 dark:shadow-md  "
                placeholder="Full Name"
                required
              />
            </div>
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
                type="email"
                className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg block w-full p-3 dark:shadow-md  "
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className=" font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg  block w-full p-3  "
                placeholder="Password"
                required
              />
            </div>
            <button className="w-full py-3 mx-auto mt-2 font-medium text-white shadow-lg font-Roboto bg-cyanEboox rounded-3xl ">
              Sign up
            </button>
            <p className="text-sm text-center sm:text-xl text-cyanEboox">
              Don't have an account yet?
              <Link
                className="ml-2 text-sm sm:text-xl text-limeEboox"
                to={"/login"}
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
