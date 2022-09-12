import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import History from "./pages/History";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/history" element={<History />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
