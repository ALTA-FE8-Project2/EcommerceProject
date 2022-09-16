import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  MdOutlineShoppingCart,
  MdSearch,
  MdOutlineHistory,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { IoSunny, IoMoon } from "react-icons/io5";
import { ThemeContext } from "../utils/DarkmodeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const handleChangeTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <header className="sticky top-0 z-30 w-full h-full text-black bg-limeEboox font-Poppin ">
      <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3 ">
        <div className="flex flex-wrap items-center w-full px-2 mx-auto md:px-4">
          <div className="relative flex items-center justify-between w-full ">
            {/*  logo*/}
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.discordapp.com/attachments/1017919526748299295/1018847868905324564/logo_2.png"
                alt="logo"
                className="w-[40px] sm:w-[50px]"
              />
              <h1 className="hidden mx-3 text-2xl italic font-bold font-poppins text-main sm:block ">
                eboox
              </h1>
            </Link>

            {/* search */}
            <div className="w-[80%]  px-2 sm:px-4">
              <div className="w-full rounded-full border sborder-[#D9D9D9] px-4 py-2 flex">
                <MdSearch size={25} color={"#D9D9D9"} className="inline" />
                <input
                  type="text"
                  placeholder="Search book..."
                  className="bg-limeEboox text-sm italic text-[#D9D9D9] px-0 sm:px-2 w-full rounded-3xl outline-none"
                />
              </div>
            </div>

            <button
              className="block py-1 text-xl leading-none text-black border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
            </button>

            {/* List menu for large size */}
            <ul className="flex-col justify-between hidden list-none w-52 lg:flex lg:flex-row lg:ml-auto ">
              {/* dark mode */}
              <li className="cursor-pointer nav-item">
                {theme === "dark" ? (
                  <IoSunny
                    className="text-white"
                    size={35}
                    onClick={() => handleChangeTheme("light")}
                  />
                ) : (
                  <IoMoon
                    className="text-white"
                    size={35}
                    onClick={() => handleChangeTheme("dark")}
                  />
                )}
              </li>

              {/* cart */}
              <li className="nav-item">
                <Link to="/cart" className="flex items-center ">
                  <MdOutlineShoppingCart className="text-white" size={40} />
                  <h3 className="ml-3 text-xl font-medium font-poppins lg:hidden">
                    Cart
                  </h3>
                </Link>
              </li>

              {/* History */}
              <li className="nav-item">
                <Link to="/history-order" className="flex items-center">
                  <MdOutlineHistory className="text-white" size={40} />
                  <h3 className="ml-3 text-xl font-medium font-poppins lg:hidden">
                    Hystory Order
                  </h3>
                </Link>
              </li>

              {/* Profile */}
              <li className="nav-item">
                <Link to="/profile" className="flex items-center">
                  <MdOutlineAccountCircle className="text-white" size={40} />
                  <h3 className="ml-3 text-xl font-medium font-poppins lg:hidden ">
                    Profile
                  </h3>
                </Link>
              </li>
            </ul>
          </div>

          {/* menu for mobile and tablet */}
          <div
            className={
              "  lg:hidden flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col w-full mt-6 list-none lg:flex-row lg:ml-auto ">
              {/* dark mode */}
              <li className="mx-auto cursor-pointer nav-item">
                {theme === "dark" ? (
                  <IoSunny
                    className="text-white "
                    size={35}
                    onClick={() => handleChangeTheme("light")}
                  />
                ) : (
                  <IoMoon
                    className="text-white"
                    size={35}
                    onClick={() => handleChangeTheme("dark")}
                  />
                )}
              </li>

              {/* cart */}
              <li className="w-[200px] nav-item">
                <Link to="/cart" className="flex items-center ">
                  <MdOutlineShoppingCart size={40} className="text-white" />
                  <h3 className="ml-3 text-xl font-medium text-white font-poppins">
                    Cart
                  </h3>
                </Link>
              </li>

              {/* History */}
              <li className="nav-item w-[200px]">
                <Link to="/history-order" className="flex items-center">
                  <MdOutlineHistory size={40} className="text-white" />
                  <h3 className="ml-3 text-xl font-medium text-white font-poppins">
                    Hystory Order
                  </h3>
                </Link>
              </li>

              {/* Profile */}
              <li className="nav-item w-[200px]">
                <Link to="/profile" className="flex items-center">
                  <MdOutlineAccountCircle size={40} className="text-white" />
                  <h3 className="ml-3 text-xl font-medium text-white font-poppins">
                    Profile
                  </h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
