import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import Details from "./pages/Details";
import HistoryOrder from "./pages/HistoryOrder";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="/history-order" element={<HistoryOrder />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <div className="grid content-center justify-center min-h-screen text-2xl font-bold sm:text-5xl">
              <span className="inline h-8 "> 404 Error Not Found........</span>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
