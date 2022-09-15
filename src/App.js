import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "./utils/DarkmodeContext";
import axios from "axios";
import { TokenContext } from "./utils/DarkmodeContext";

import "./App.css";
import History from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getToken = localStorage.getItem("token") || "0";
    setToken(getToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken}`;
  }, [token]);

  return (
    <TokenContext.Provider value={jwtToken}>
      <ThemeContext.Provider value={background}>
        <BrowserRouter>
          {/* {if (token !== "0"){  */}
          {token !== "0" ? (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/details" element={<Details />} />
              <Route path="/history-order" element={<History />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="*"
                element={
                  <div className="grid content-center justify-center min-h-screen text-2xl font-bold sm:text-5xl">
                    <span className="inline h-8 ">
                      {" "}
                      404 Error Not Found........
                    </span>
                  </div>
                }
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="*"
                element={
                  <div className="grid content-center justify-center min-h-screen text-2xl font-bold sm:text-5xl">
                    <p className="inline h-8">
                      You have to
                      <Link className="ml-2 text-limeEboox" to={"/"}>
                        Sign in
                      </Link>
                    </p>
                  </div>
                }
              />
            </Routes>
          )}
          {/* }
            else
          {
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          } */}
        </BrowserRouter>
      </ThemeContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
