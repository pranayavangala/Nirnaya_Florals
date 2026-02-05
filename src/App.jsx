import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import FlowerDetails from "./pages/FlowerDetails";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/flowers/:id" element={<FlowerDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
