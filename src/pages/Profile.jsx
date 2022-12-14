import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdPersonOutline, MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TokenContext } from "../utils/DarkmodeContext";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const { setToken } = useContext(TokenContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  //   -------------------------get data
  const getData = async () => {
    var requestOptions = {
      method: "get",
      url: "http://18.142.161.140/users/details",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const response = await axios(requestOptions);
      const { name, email } = response.data.data;
      setName(name);
      setEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------edit Profile
  const editData = (e) => {
    e.preventDefault();
    const data = { name: name, email: email };
    axios
      .put("http://18.142.161.140/users", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => getData())
      .catch((error) => console.log(error));
  };

  //----------------------Logout
  const handleLogout = () => {
    setToken("0");
    localStorage.removeItem("token");
    navigate("/");
    alert("you have been log out.....");
  };

  // -----------------------Delete Account
  const handleDeleteAccount = () => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: "http://18.142.161.140/users",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        setToken("0");
        localStorage.removeItem("token");
        navigate("/");
        alert("your accout has been deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen pt-5 -mt-4 bg-main dark:bg-slate-800">
        <div className="w-full md:flex md:items-center ">
          {/* read img */}
          <div className="hidden m-auto md:block md:w-1/2 ">
            <img
              className="mx-auto w-[290px] "
              src="https://cdn.discordapp.com/attachments/1017919526748299295/1019033613406318723/read.png"
              alt="book"
            />
          </div>

          {/* Data user */}
          <div className="flex flex-col md:w-1/2 lg:mx-auto ">
            <div className="flex flex-col gap-2 ml-2  sm:w-96 xl:w-[472px] md:mx-auto ">
              <div className="flex items-center ">
                <MdPersonOutline className=" text-limeEboox" size={70} />
                <div>
                  <h5 className="text-lg font-medium capitalize font-Poppins text-cyanEboox sm:text-3xl">
                    {name}
                  </h5>
                  <p className="font-roboto text-base sm:text-xl text-[#636F64]/50 ">
                    Full Name
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <MdOutlineEmail className="mx-2 text-limeEboox" size={60} />
                <div>
                  <h5 className="text-lg font-medium lowercase sm:text-3xl font-Poppins text-cyanEboox">
                    {email}
                  </h5>
                  <p className="font-Poppins text-base sm:text-xl text-[#636F64]/50 ">
                    Email
                  </p>
                </div>
              </div>
            </div>
            {/* button */}
            <button
              className="py-2 mx-auto mt-20 text-xl font-bold text-white rounded-full bg-cyanEboox md:text-2xl w-72 sm:w-96 xl:w-[472px] "
              onClick={() => setShowModal(true)}
            >
              Edit Profile
            </button>
            <button
              className="w-72 mx-auto py-2 mt-4 bg-[#FF4D00] text-white text-xl md:text-2xl font-bold  sm:w-96 rounded-full xl:w-[472px]"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
            <button
              className="w-72 mx-auto py-2 mt-4 bg-[#FF0000] text-white text-xl md:text-2xl font-bold  sm:w-96 rounded-full xl:w-[472px]"
              onClick={() => handleDeleteAccount()}
            >
              Delete Account
            </button>
          </div>
        </div>

        {/* modal */}

        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="absolute top-36 sm:top-30 mx-auto  w-[320px] sm:w-[550px] lg:w-[700px] ">
                <div className="flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-main dark:bg-slate-800 focus:outline-none">
                  <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-slate-200">
                    <button
                      className="absolute px-5 py-1 mb-1 mr-3 text-xl font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none -right-[12px] top-[0px] bg-cyanEboox hover:shadow-lg  focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </button>
                    <h3 className="text-3xl font-semibold text-limeEboox">
                      Edit Profile
                    </h3>
                  </div>

                  <div className="relative flex-auto px-3 mt-2">
                    <form
                      className="relative flex-auto w-full "
                      onSubmit={(e) => editData(e)}
                    >
                      <div>
                        <input
                          type="text"
                          className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg block w-full p-3 dark:shadow-md  "
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-black rounded-3xl shadow-lg  block w-full p-3  "
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                        <button
                          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-cyanEboox hover:shadow-lg focus:outline-none"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-70"></div>
          </>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
