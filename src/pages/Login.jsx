import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../utils/DarkmodeContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post("http://13.214.37.101/login", body)
      .then((response) => {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/");
      })
      .catch(() => {
        alert("login failed");
      })
      .finally(() => {});
  };

  return (
    <div className="min-h-screen bg-main">
      <div className="flex md:pt-28 md:px-4 lg:pt-24 xl:max-w-6xl lg:mx-auto ">
        {/* img icon  */}
        <div className="hidden text-center md:self-center md:justify-center md:w-full md:grid">
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

        {/* Welcome */}
        <div className="w-full md:mr-2 lg:mr-0">
          <div className="md:mb-20 lg:mb-20">
            <h1 className="ml-8 text-5xl font-extrabold font-Roboto sm:text-7xl lg:-mt-2 text-limeEboox">
              Welcome!
            </h1>
            <h5 className="text-2xl italic font-Roboto ml-9 text-cyanEboox sm:text-3xl ">
              Sign in to continue
            </h5>
          </div>

          {/* form Login */}
          <form className="mx-4 mt-9" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="email"
                className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg block w-full p-3 dark:shadow-md  "
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg  block w-full p-3  "
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full py-3 mx-auto mt-5 font-medium text-white shadow-lg font-Roboto bg-cyanEboox rounded-3xl ">
              Sign in
            </button>
            <p className="text-xl text-center text-cyanEboox">
              Don't have an account yet?
              <Link className="ml-2 text-xl text-limeEboox" to={"/register"}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
