import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Checkout } from "./pages/Checkout";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
