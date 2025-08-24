import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Wallet from "./pages/Wallet";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-orange-50 to-orange-200 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}