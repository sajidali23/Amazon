import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import Checkout from "./components/Checkout.jsx";
import SearchResults from "./components/SearchResults.jsx";
import ProductPage from "./components/ProductPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
