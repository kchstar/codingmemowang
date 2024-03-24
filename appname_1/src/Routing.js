import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Features from './Pages/Features';

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
